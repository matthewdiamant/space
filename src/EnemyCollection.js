import Blood from "./Blood";
import BloodChunk from "./BloodChunk";
import { idiot, sentinel } from "./EnemyPersonas";

class EnemyCollection {
  constructor() {
    this.enemies = [];
    this.enemyCount = 0;
  }

  initialize({ enemyCount }) {
    this.enemyCount = enemyCount;
  }

  tick({ camera, map, projectiles, spurts, chunks }) {
    this.enemies.forEach((e) => {
      const [presses, immobile] = idiot(e);
      e.tick({ camera, map, projectiles, presses, immobile });
    });

    this.enemies = this.enemies.reduce((enemies, enemy) => {
      if (enemy.health <= 0) {
        this.enemyCount -= 1;
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
          chunks.push(
            new BloodChunk(
              enemy.x,
              enemy.y - 2,
              Math.random() * 3 - 1.5,
              Math.random() * 3 - 1.5,
              "red"
            )
          );
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
