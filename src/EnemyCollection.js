import Boss from "./Boss";
import Enemy from "./Enemy";
import types, { makeColors } from "./enemyTypes";

class EnemyCollection {
  constructor() {
    this.enemies = [];
    this.remainingEnemies = [];
    this.enemyCount = 0;
  }

  initialize({ concurrentEnemies, enemyCount, enemySpawnPoint, enemies }) {
    this.concurrentEnemies = concurrentEnemies;
    this.enemyCount = enemyCount;
    this.enemySpawnPoint = enemySpawnPoint;

    this.remainingEnemies = [];
    Object.entries(enemies).forEach(([type, count]) => {
      this.remainingEnemies = this.remainingEnemies.concat(
        Array(count).fill(type)
      );
    });

    for (let i = 0; i < concurrentEnemies; i++) {
      this.enemies.push(this.createEnemy());
    }
  }

  createEnemy() {
    this.enemyCount -= 1;
    const { type, health, persona, colors, weapon } = types[
      this.remainingEnemies.pop()
    ];
    const [x, y] = this.enemySpawnPoint;
    if (type === "boss") {
      return new Boss(x, y, health, -1);
    } else {
      return new Enemy(x, y, health, -1, makeColors(colors), persona, weapon);
    }
  }

  tick({ camera, map, projectiles, spurts, chunks, player, sound }) {
    this.enemies.forEach((enemy) => {
      enemy.tick({ camera, map, projectiles, player, sound });
    });

    this.enemies = this.enemies.reduce((enemies, enemy) => {
      if (enemy.health <= 0) {
        enemy.explode({ spurts, chunks });
        if (
          this.enemies.length <= this.concurrentEnemies &&
          this.enemyCount > 0
        ) {
          enemies.push(this.createEnemy());
        }
      } else {
        enemies.push(enemy);
      }
      return enemies;
    }, []);
  }

  draw(drawer) {
    this.enemies.forEach((e) => e.draw(drawer));
  }
}

export default EnemyCollection;
