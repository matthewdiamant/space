const levelTemplates = [
  {
    level: 1,
    concurrentEnemies: 10,
    enemyCount: 10,
    spawnPoint: [10, 10],
  },
];

class Level {
  initializeLevel(level, { player, enemies }) {
    this.level = levelTemplates.find((t) => t.level === level);
    player.health = player.maxHealth;
    player.x = this.level.spawnPoint[0];
    player.y = this.level.spawnPoint[1];
    enemies.initialize(this.level);
    this.levelOverTimer = 0;
  }

  tick({ player, enemies }) {
    if (enemies.enemies.length <= 0) {
      this.levelOverTimer += 1;
    }

    if (this.levelOverTimer > 600) {
      this.initializeLevel(1, { player, enemies });
    }
  }

  draw(drawer) {
    const delay = 80;
    if (this.levelOverTimer > delay) {
      drawer.rect({
        adjusted: false,
        fillColor: "rgba(0,0,0,0.9)",
        rect: [20, 20, 88, 42],
      });
    }

    if (this.levelOverTimer > delay * 2) {
      drawer.text({
        text: `level ${this.level.level} complete`,
        size: 1,
        x: 32,
        y: 30,
      });
    }

    if (this.levelOverTimer > delay * 3) {
      drawer.text({
        text: `${this.level.enemyCount} aliens defeated`,
        size: 1,
        x: 31 - (this.level.enemyCount >= 10 ? 2 : 0),
        y: 45,
      });
    }
  }
}

export default Level;
