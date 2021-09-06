import Blood from "./Blood";
import BloodChunk from "./BloodChunk";
import Enemy from "./Enemy";
import { aggro, runAndGun, idiot, pacifist, sentinel } from "./EnemyPersonas";

const defaultColors = {
  skin: "red",
  horns: "red",
  eyes: "yellow",
  body: "orange",
};

const pacifistColors = {
  ...defaultColors,
  horns: "beige",
  eyes: "red",
  skin: "beige",
  body: "red",
}

const types = {
  aggro: { health: 50, persona: aggro, colors: defaultColors },
  runAndGun: { health: 50, persona: runAndGun, colors: defaultColors },
  idiot: { health: 50, persona: idiot, colors: defaultColors },
  pacifist: { health: 50, persona: pacifist, colors: pacifistColors },
  sentinel: { health: 50, persona: sentinel, colors: defaultColors },
};

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
    const { health, persona, colors } = types[this.remainingEnemies.pop()];
    const [x, y] = this.enemySpawnPoint;
    const facing = Math.random() > 0.5 ? 1 : -1;
    return new Enemy(x, y, health, facing, colors, persona);
  }

  tick({ camera, map, projectiles, spurts, chunks, player, sound }) {
    this.enemies.forEach((enemy) => {
      enemy.tick({ camera, map, projectiles, player, sound });
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
