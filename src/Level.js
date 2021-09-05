const levelTemplates = [
  {
    concurrentEnemies: 5,
    enemyCount: 10,
    spawnPoint: [40, 10],
  },
];

const delay = 80;

class Level {
  initializeLevel(level, { player, enemies, chunks, spurts }) {
    this.level = levelTemplates[level] || levelTemplates[0];
    this.level.level = level;
    player.health = player.maxHealth;
    player.x = this.level.spawnPoint[0];
    player.y = this.level.spawnPoint[1];
    chunks.chunks = [];
    spurts.spurts = [];
    enemies.initialize(this.level);
    this.levelOverTimer = 0;
    this.levelFadeIn = 0;
  }

  tick({ player, enemies, chunks, spurts }) {
    this.levelFadeIn += 1;

    if (enemies.enemies.length <= 0) {
      this.levelOverTimer += 1;
    }

    if (this.levelOverTimer > delay * 6) {
      this.initializeLevel(this.level.level + 1, {
        player,
        enemies,
        chunks,
        spurts,
      });
    }
  }

  draw(drawer) {
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
        x: 32 - (this.level.level >= 10 ? 2 : 0),
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

    if (this.levelFadeIn < 200) {
      drawer.rect({
        adjusted: false,
        fillColor: `rgba(0,0,0,${1 - this.levelFadeIn / 200})`,
        rect: [0, 0, 128, 128],
      });
    }
  }
}

export default Level;
