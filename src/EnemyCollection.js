import Blood from "./Blood";
import BloodChunk from "./BloodChunk";
import Enemy from "./Enemy";
import { runAndGun, idiot, pacifist, sentinel } from "./EnemyPersonas";

const colors = {
  skin: "red",
  horns: "red",
  eyes: "yellow",
  body: "orange",
};

class EnemyCollection {
  constructor() {
    this.enemies = [];
    this.enemyCount = 0;
  }

  initialize({ concurrentEnemies, enemyCount }) {
    this.concurrentEnemies = concurrentEnemies;
    this.enemyCount = enemyCount;

    for (let i = 0; i < concurrentEnemies; i++) {
      this.enemies.push(
        new Enemy(249, 20, 100, Math.random() > 0.5 ? 1 : -1, colors, runAndGun)
      );
      this.enemyCount -= 1;
    }
  }

  tick({ camera, map, projectiles, spurts, chunks, player }) {
    this.enemies.forEach((enemy) => {
      enemy.tick({ camera, map, projectiles, player });
    });

    this.enemies = this.enemies.reduce((enemies, enemy) => {
      if (enemy.health <= 0) {
        for (let i = 0; i < 100; i++) {
          spurts.add(
            new Blood(
              enemy.x,
              enemy.y,
              Math.random() * 5 - 2.5,
              Math.random() * 5 - 5,
              enemy.bloodColor
            )
          );
        }
        for (let i = 0; i < 5; i++) {
          chunks.chunks.push(
            new BloodChunk(
              enemy.x,
              enemy.y - 2,
              Math.random() * 3 - 1.5,
              Math.random() * 3 - 1.5,
              "red"
            )
          );
        }
        if (
          this.enemies.length <= this.concurrentEnemies &&
          this.enemyCount > 0
        ) {
          enemies.push(new Enemy(249, 20, 100, -1, colors, runAndGun));
          this.enemyCount -= 1;
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
