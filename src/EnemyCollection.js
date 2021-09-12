import Boss from "./Boss";
import Enemy from "./Enemy";
import WeaponFactory from "./WeaponFactory";
import types from "./enemyTypes";

class EnemyCollection {
  constructor() {
    this.enemies = [];
    this.remainingEnemies = [];
    this.enemyCount = 0;
  }

  initialize({
    concurrentEnemies,
    enemyCount,
    enemySpawnPoints,
    enemies,
    level,
  }) {
    this.concurrentEnemies = concurrentEnemies;
    this.enemyCount = enemyCount;
    this.enemySpawnPoint = () =>
      enemySpawnPoints[Math.floor(Math.random() * enemySpawnPoints.length)];

    this.remainingEnemies = [];
    Object.entries(enemies).forEach(([type, count]) => {
      this.remainingEnemies = this.remainingEnemies.concat(
        Array(count).fill(type)
      );
    });

    for (let i = 0; i < concurrentEnemies; i++) {
      this.enemies.push(this.createEnemy(level));
    }
  }

  createEnemy(level) {
    this.enemyCount -= 1;
    let { type, health, persona, colors, weapon } = types[
      this.remainingEnemies.pop()
    ];
    weapon = weapon || new WeaponFactory().random(level);
    const [x, y] = this.enemySpawnPoint();
    if (type === "boss") {
      return new Boss(x, y, health, -1);
    } else {
      return new Enemy(x, y, health, -1, colors, persona, weapon);
    }
  }

  tick({ camera, map, projectiles, spurts, chunks, player, sound, level }) {
    this.enemies.forEach((enemy) => {
      enemy.tick({ camera, map, projectiles, player, sound });
    });

    this.enemies = this.enemies.reduce((enemies, enemy) => {
      if (enemy.health <= 0) {
        enemy.explode({ spurts, chunks, sound });
        if (
          this.enemies.length <= this.concurrentEnemies &&
          this.enemyCount > 0
        ) {
          enemies.push(this.createEnemy(level.level.level));
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
