import Boss from "./Boss";
import Enemy from "./Enemy";
import WeaponFactory from "./WeaponFactory";
import types from "./enemyTypes";

class EnemyCollection {
  constructor() {
    this.enemies = [];
    this.remainingEnemies = [];
    this.enemyCount = 0;
    this.lifespan = 0;
  }

  initialize({
    concurrentEnemies,
    enemyCount,
    enemySpawnPoints,
    enemies,
    level,
  }) {
    this.lifespan = 0;
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

  bonusEnemies(level) {
    if (
      level > 6 &&
      !(
        this.lifespan % Math.floor(1000 / ((Math.max(level - 7, 0) + 10) * 0.1))
      )
    ) {
      const weapon = new WeaponFactory().random(level);
      const [x, y] = this.enemySpawnPoint();

      const enemyTypes = Object.entries(types)
        .filter(([key, value]) => value.type !== "boss")
        .map(([_, value]) => value);

      const { health, colors, persona } = enemyTypes[
        Math.floor(Math.random() * enemyTypes.length)
      ];

      const bonusEnemy = new Enemy(x, y, health, -1, colors, persona, weapon);
      this.enemies.push(bonusEnemy);
    }
  }

  tick({ camera, map, projectiles, spurts, chunks, player, sound, level }) {
    this.lifespan += 1;

    if (this.enemies.length > 0) {
      this.bonusEnemies(level.level.level);
    }

    this.enemies.forEach((enemy) => {
      enemy.tick({ camera, map, projectiles, player, sound, spurts, chunks });
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
