import Enemy from "./enemy";

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

  tick() {}
}

export default Level;
