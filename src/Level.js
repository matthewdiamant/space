import Music from "./Music";

const levelTemplates = [
  {
    concurrentEnemies: 5,
    enemyCount: 10,
    spawnPoint: [40, 10],
  },
];

const delay = 80;

class Level {
  constructor() {
    this.music = new Music();
    this.musicStarted = false;
  }

  initializeLevel(level, { player, enemies, chunks, spurts, packages }) {
    this.level = levelTemplates[level] || levelTemplates[0];
    this.level.level = level;
    player.health = player.maxHealth;
    player.x = this.level.spawnPoint[0];
    player.y = this.level.spawnPoint[1];
    chunks.chunks = [];
    spurts.spurts = [];
    packages.packages = [];
    enemies.initialize(this.level);
    this.levelOverTimer = 0;
    this.levelFadeIn = 0;
    this.welcomeMessage = false;
  }

  tick({ player, enemies, chunks, spurts, packages, sound }) {
    this.levelFadeIn += 1;

    if (enemies.enemies.length <= 0) {
      this.levelOverTimer += 1;
    }

    if (this.levelOverTimer > delay * (6 + (this.level.level === 1 ? 3 : 0))) {
      this.initializeLevel(this.level.level + 1, {
        player,
        enemies,
        chunks,
        spurts,
        packages,
      });
    }

    const oldWelcomeMessage = this.welcomeMessage;
    this.welcomeMessage =
      this.level.level === 1 && this.levelOverTimer > delay * 5;
    if (oldWelcomeMessage !== this.welcomeMessage) {
      this.music.startMusic();
    }

    if ([delay, delay * 2, delay * 3].includes(this.levelOverTimer)) {
      sound.play("message");
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

    if (this.welcomeMessage) {
      drawer.rect({
        adjusted: false,
        fillColor: "#000",
        rect: [14, 68, 100, 42],
      });
      drawer.text({
        text: "Welcome",
        size: 2,
        x: 32,
        y: 74,
      });
      drawer.text({
        text: "to space",
        size: 2,
        x: 33,
        y: 94,
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
