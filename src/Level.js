import Music from "./Music";
import Package from "./Package";
import WeaponFactory, {
  assaultRifle,
  debugPistol,
  grenade,
  minigun,
  shotgun,
  sniperRifle,
} from "./WeaponFactory";
import { humanoid } from "./Sprites";
import {
  sentinelColors,
  pacifistColors,
  idiotColors,
  runAndGunColors,
  aggroColors,
  bossColors,
} from "./enemyTypes";
import { canvasWidth, canvasHeight } from "./constants";

const colorSchemes = [
  {
    background: ["#112", "#131"],
    tiles: ["#114", "#336", "#003"],
  },
  {
    background: ["#33f", "#1f1"],
    tiles: ["#963", "#c96", "#620"],
  },
];

const level1 = {
  concurrentEnemies: 1,
  spawnPoint: [40, 0],
  enemyColor: sentinelColors,
  enemySpawnPoints: [[230, 100]],
  enemies: {
    sentinel: 1,
  },
};

const enemySpawnPoints = [
  [45, 10],
  [155, 10],
  [265, 10],
  [90, 10],
  [220, 30],
  [48, 80],
  [130, 80],
  [180, 80],
  [260, 80],
  [110, 110],
  [205, 110],
];

const levelTemplates = [
  (level) => ({
    concurrentEnemies: 3 + Math.floor(level / 6),
    spawnPoint: [40, 150],
    enemyColor: sentinelColors,
    enemySpawnPoints,
    enemies: {
      sentinel: 10 + Math.floor(level / 6) * 3,
    },
  }),
  (level) => ({
    concurrentEnemies: 3 + Math.floor(level / 6),
    spawnPoint: [40, 150],
    enemyColor: pacifistColors,
    enemySpawnPoints,
    enemies: {
      pacifist: 10 + Math.floor(level / 6) * 3,
    },
  }),
  (level) => ({
    concurrentEnemies: 3 + Math.floor(level / 6),
    spawnPoint: [40, 150],
    enemyColor: idiotColors,
    enemySpawnPoints,
    enemies: {
      idiot: 10 + Math.floor(level / 6) * 3,
    },
  }),
  (level) => ({
    concurrentEnemies: 3 + Math.floor(level / 6),
    spawnPoint: [40, 150],
    enemyColor: runAndGunColors,
    enemySpawnPoints,
    enemies: {
      runAndGun: 10 + Math.floor(level / 6) * 3,
    },
  }),
  (level) => ({
    concurrentEnemies: 3 + Math.floor(level / 6),
    spawnPoint: [40, 150],
    enemyColor: aggroColors,
    enemySpawnPoints,
    enemies: {
      aggro: 10 + Math.floor(level / 6) * 3,
    },
  }),
  (level) => ({
    concurrentEnemies: 1,
    spawnPoint: [20, 156],
    enemyColor: bossColors,
    enemySpawnPoints: [[120, 10]],
    enemies: {
      boss: 1,
    },
  }),
];

const delay = 80;

class Level {
  constructor() {
    this.music = new Music();
    this.musicStarted = false;
    this.gameOver = false;
    this.totalEnemies = 0;
  }

  initializeLevel(
    level,
    { player, enemies, chunks, spurts, packages, map, background }
  ) {
    this.level = level === 1 ? level1 : levelTemplates[(level - 1) % 6](level);
    this.level.level = level;
    this.level.enemyCount = Object.entries(this.level.enemies).reduce(
      (sum, [k, v]) => sum + v,
      0
    );
    const colors = colorSchemes[Math.floor((level - 1) / 6) % 2];
    map.loadLevel(level, colors.tiles);
    background.colors = colors.background;
    player.health = player.maxHealth;
    player.x = this.level.spawnPoint[0];
    player.y = this.level.spawnPoint[1];
    chunks.chunks = [];
    spurts.spurts = [];
    packages.packages =
      level === 1
        ? [new Package(146, 90, new WeaponFactory().create(assaultRifle))]
        : [];
    enemies.initialize(this.level);
    this.levelOverTimer = 0;
    this.levelFadeIn = 0;
    this.welcomeMessage = false;
    this.totalEnemies += this.level.enemyCount;
  }

  tick({ player, enemies, chunks, spurts, packages, sound, map, background }) {
    if (player.health <= 0) {
      this.gameOver = true;
    }

    this.levelFadeIn += 1;

    if (enemies.enemies.length <= 0) {
      this.levelOverTimer += 1;
    }

    if (this.levelOverTimer === delay) {
      sound.setGlobalVolume(0.2);
    }

    if (this.levelOverTimer > delay * (7 + (this.level.level === 1 ? 3 : 0))) {
      sound.setGlobalVolume(1);
      this.initializeLevel(this.level.level + 1, {
        player,
        enemies,
        chunks,
        spurts,
        packages,
        map,
        background,
      });
    }

    const oldWelcomeMessage = this.welcomeMessage;
    this.welcomeMessage =
      this.level.level === 1 && this.levelOverTimer > delay * 7;
    if (oldWelcomeMessage !== this.welcomeMessage) {
      this.music.startMusic();
    }

    if (
      [delay, delay * 2, delay * 3, delay * 4].includes(this.levelOverTimer)
    ) {
      sound.play("message");
    }
  }

  endOfLevelScreen(drawer) {
    if (this.levelOverTimer > delay) {
      drawer.rect({
        adjusted: false,
        fillColor: "rgba(0,0,0,0.9)",
        rect: [(canvasWidth - 88) / 2, (canvasHeight - 62) / 2, 88, 60],
      });
    }

    if (this.levelOverTimer > delay * 2) {
      drawer.text({
        text: `level ${this.level.level} complete`,
        size: 1,
        x: (canvasWidth - 88) / 2 + 11 - (this.level.level >= 10 ? 2 : 0),
        y: (canvasHeight - 62) / 2 + 10,
      });
    }

    if (this.levelOverTimer > delay * 3) {
      drawer.text({
        text: `${this.totalEnemies} alien${
          this.totalEnemies !== 1 ? "s" : ""
        } defeated`,
        size: 1,
        x: (canvasWidth - 88) / 2 + 11 - (this.totalEnemies >= 10 ? 2 : 0),
        y: (canvasHeight - 62) / 2 + 25,
      });
    }

    if (this.levelOverTimer > delay * 4) {
      humanoid(
        (canvasWidth - 88) / 2 + 12,
        (canvasHeight - 62) / 2 + 40,
        1,
        sentinelColors,
        {
          bodyless: true,
        }
      ).forEach(({ c, r }) =>
        drawer.rect({ adjusted: false, fillColor: c, rect: r })
      );
      humanoid(
        (canvasWidth - 88) / 2 + 22,
        (canvasHeight - 62) / 2 + 40,
        1,
        pacifistColors,
        {
          bodyless: true,
        }
      ).forEach(({ c, r }) =>
        drawer.rect({ adjusted: false, fillColor: c, rect: r })
      );
      humanoid(
        (canvasWidth - 88) / 2 + 32,
        (canvasHeight - 62) / 2 + 40,
        1,
        idiotColors,
        {
          bodyless: true,
        }
      ).forEach(({ c, r }) =>
        drawer.rect({ adjusted: false, fillColor: c, rect: r })
      );
      humanoid(
        (canvasWidth - 88) / 2 + 42,
        (canvasHeight - 62) / 2 + 40,
        1,
        runAndGunColors,
        {
          bodyless: true,
        }
      ).forEach(({ c, r }) =>
        drawer.rect({ adjusted: false, fillColor: c, rect: r })
      );
      humanoid(
        (canvasWidth - 88) / 2 + 52,
        (canvasHeight - 62) / 2 + 40,
        1,
        aggroColors,
        {
          bodyless: true,
        }
      ).forEach(({ c, r }) =>
        drawer.rect({ adjusted: false, fillColor: c, rect: r })
      );
      humanoid(
        (canvasWidth - 88) / 2 + 62,
        (canvasHeight - 62) / 2 + 35,
        1,
        bossColors,
        {
          bodyless: true,
          big: true,
        }
      ).forEach(({ c, r }) =>
        drawer.rect({ adjusted: false, fillColor: c, rect: r })
      );
    }

    const drawX = (x, offset = 0) => {
      drawer.lines({
        lines: [
          [x + offset / 2, (canvasHeight - 62) / 2 + 41 - offset],
          [x + 7 + offset * 3, (canvasHeight - 62) / 2 + 47 + offset],
        ],
        strokeColor: "red",
      });
      drawer.lines({
        lines: [
          [x + 7 + offset * 3, (canvasHeight - 62) / 2 + 41 - offset],
          [x + offset / 2, (canvasHeight - 62) / 2 + 47 + offset],
        ],
        strokeColor: "red",
      });
    };

    if (this.levelOverTimer > delay * 5)
      if ((this.level.level - 1) % 6 >= 0) drawX((canvasWidth - 88) / 2 + 12);
    if (this.levelOverTimer > delay * 5.1)
      if ((this.level.level - 1) % 6 >= 1) drawX((canvasWidth - 88) / 2 + 22);
    if (this.levelOverTimer > delay * 5.2)
      if ((this.level.level - 1) % 6 >= 2) drawX((canvasWidth - 88) / 2 + 32);
    if (this.levelOverTimer > delay * 5.3)
      if ((this.level.level - 1) % 6 >= 3) drawX((canvasWidth - 88) / 2 + 42);
    if (this.levelOverTimer > delay * 5.4)
      if ((this.level.level - 1) % 6 >= 4) drawX((canvasWidth - 88) / 2 + 52);
    if (this.levelOverTimer > delay * 5.5)
      if ((this.level.level - 1) % 6 >= 5)
        drawX((canvasWidth - 88) / 2 + 62, 2);
  }

  draw(drawer) {
    this.endOfLevelScreen(drawer);

    if (this.welcomeMessage) {
      drawer.rect({
        adjusted: false,
        fillColor: "#000",
        rect: [0, 0, canvasWidth, canvasHeight],
      });
      drawer.text({
        text: "Welcome",
        size: 4,
        x: 17,
        y: 40,
      });
      drawer.text({
        text: "to space",
        size: 4,
        x: 19,
        y: 70,
      });
    }

    if (this.levelFadeIn < 200) {
      drawer.rect({
        adjusted: false,
        fillColor: `rgba(0,0,0,${1 - this.levelFadeIn / 200})`,
        rect: [0, 0, canvasWidth, canvasHeight],
      });
    }

    const newLevelTimer = delay * (7 + (this.level.level === 1 ? 3 : 0));
    if (this.levelOverTimer > newLevelTimer - 50) {
      drawer.rect({
        adjusted: false,
        fillColor: `rgba(0,0,0,${
          1 - (newLevelTimer - this.levelOverTimer) / 50
        })`,
        rect: [0, 0, canvasWidth, canvasHeight],
      });
    }

    if (this.gameOver) {
      drawer.rect({
        adjusted: false,
        fillColor: "#000",
        rect: [(canvasWidth - 98) / 2, 26, 98, 31],
      });
      drawer.text({
        text: "Game over",
        size: 2,
        x: 40,
        y: 36,
      });
    }
  }
}

export default Level;
