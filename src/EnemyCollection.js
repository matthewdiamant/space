import Boss from "./Boss";
import Enemy from "./Enemy";
import { aggro, runAndGun, idiot, pacifist, sentinel } from "./EnemyPersonas";
import WeaponFactory, { assaultRifle } from "./WeaponFactory";

const defaultColors = ["red", "red", "yellow", "orange"];
const pacifistColors = ["beige", "beige", "red", "red"];

const makeColors = ([skin, horns, eyes, body]) => ({ skin, horns, eyes, body });

const types = {
  aggro: { type: "aggro", health: 25, persona: aggro, colors: defaultColors },
  runAndGun: {
    type: "runAndGun",
    health: 25,
    persona: runAndGun,
    colors: defaultColors,
  },
  idiot: { type: "idiot", health: 25, persona: idiot, colors: defaultColors },
  pacifist: {
    type: "pacifist",
    health: 25,
    persona: pacifist,
    colors: pacifistColors,
  },
  sentinel: {
    type: "sentinel",
    health: 25,
    persona: sentinel,
    colors: defaultColors,
    weapon: new WeaponFactory().create(assaultRifle),
  },
  boss: {
    type: "boss",
    health: 250,
    persona: sentinel,
    colors: pacifistColors,
  },
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
