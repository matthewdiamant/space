import Enemy from "./enemy";

const colors = {
  skin: "red",
  horns: "red",
  eyes: "yellow",
  body: "orange",
};

const levelTemplates = [
  {
    level: 1,
    concurrentEnemies: 3,
    enemyCount: 10,
  },
];

class Level {
  constructor() {
    this.level = levelTemplates[0];
  }

  initializeLevel(level, { player, enemies }) {
    this.level = levelTemplates.find((t) => t.level === level);
    player.health = player.maxHealth;
    enemies.initialize(this.level);
  }

  tick({ enemies }) {
    if (
      enemies.enemies.length < this.level.concurrentEnemies &&
      enemies.enemyCount > 0
    ) {
      enemies.enemies.push(new Enemy(249, 20, 100, -1, colors));
    }
  }
}

export default Level;
