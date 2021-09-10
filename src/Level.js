import Music from "./Music";
import Package from "./Package";
import WeaponFactory, {
  assaultRifle,
  debugPistol,
  shotgun,
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
  colors: colorSchemes[0],
};

const levelTemplates = [
  (level) => ({
    concurrentEnemies: 5,
    spawnPoint: [40, 10],
    enemyColor: sentinelColors,
    enemySpawnPoints: [
      [50, 10],
      [100, 10],
      [150, 10],
      [200, 10],
      [249, 10],
    ],
    enemies: {
      sentinel: 10,
    },
    colors: colorSchemes[0],
  }),
  (level) => ({
    concurrentEnemies: 5,
    spawnPoint: [40, 150],
    enemyColor: pacifistColors,
    enemySpawnPoints: [
      [50, 10],
      [100, 10],
      [150, 10],
      [200, 10],
      [249, 10],
    ],
    enemies: {
      pacifist: 10,
    },
    colors: colorSchemes[0],
  }),
  (level) => ({
    concurrentEnemies: 5,
    spawnPoint: [40, 150],
    enemyColor: idiotColors,
    enemySpawnPoints: [
      [50, 10],
      [100, 10],
      [150, 10],
      [200, 10],
      [249, 10],
    ],
    enemies: {
      idiot: 10,
    },
    colors: colorSchemes[1],
  }),
  (level) => ({
    concurrentEnemies: 5,
    spawnPoint: [40, 150],
    enemyColor: runAndGunColors,
    enemySpawnPoints: [
      [50, 10],
      [100, 10],
      [150, 10],
      [200, 10],
      [249, 10],
    ],
    enemies: {
      runAndGun: 10,
    },
    colors: colorSchemes[0],
  }),
  (level) => ({
    concurrentEnemies: 5,
    spawnPoint: [40, 150],
    enemyColor: aggroColors,
    enemySpawnPoints: [
      [50, 10],
      [100, 10],
      [150, 10],
      [200, 10],
      [249, 10],
    ],
    enemies: {
      aggro: 10,
    },
    colors: colorSchemes[0],
  }),
  (level) => ({
    concurrentEnemies: 1,
    spawnPoint: [20, 156],
    enemyColor: bossColors,
    enemySpawnPoints: [[120, 10]],
    enemies: {
      boss: 1,
    },
    colors: colorSchemes[0],
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
    map.loadLevel(level, this.level.colors.tiles);
    background.colors = this.level.colors.background;
    player.health = player.maxHealth;
    player.x = this.level.spawnPoint[0];
    player.y = this.level.spawnPoint[1];
    chunks.chunks = [];
    spurts.spurts = [];
    packages.packages =
      level === 1
        ? [new Package(146, 90, new WeaponFactory().create(shotgun))]
        : // [new Package(146, 90, new WeaponFactory().create(debugPistol))]
          [];
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

    if (this.levelOverTimer > delay * (7 + (this.level.level === 1 ? 3 : 0))) {
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

  draw(drawer) {
    if (this.levelOverTimer > delay) {
      drawer.rect({
        adjusted: false,
        fillColor: "rgba(0,0,0,0.9)",
        rect: [20, 20, 88, 62],
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
        text: `${this.totalEnemies} alien${
          this.totalEnemies !== 1 ? "s" : ""
        } defeated`,
        size: 1,
        x: 31 - (this.totalEnemies >= 10 ? 2 : 0),
        y: 45,
      });
    }

    if (this.levelOverTimer > delay * 4) {
      humanoid(32, 60, 1, sentinelColors, {
        bodyless: true,
      }).forEach(({ c, r }) =>
        drawer.rect({ adjusted: false, fillColor: c, rect: r })
      );
      humanoid(42, 60, 1, pacifistColors, {
        bodyless: true,
      }).forEach(({ c, r }) =>
        drawer.rect({ adjusted: false, fillColor: c, rect: r })
      );
      humanoid(52, 60, 1, idiotColors, { bodyless: true }).forEach(({ c, r }) =>
        drawer.rect({ adjusted: false, fillColor: c, rect: r })
      );
      humanoid(62, 60, 1, runAndGunColors, {
        bodyless: true,
      }).forEach(({ c, r }) =>
        drawer.rect({ adjusted: false, fillColor: c, rect: r })
      );
      humanoid(72, 60, 1, aggroColors, { bodyless: true }).forEach(({ c, r }) =>
        drawer.rect({ adjusted: false, fillColor: c, rect: r })
      );
      humanoid(82, 55, 1, bossColors, {
        bodyless: true,
        big: true,
      }).forEach(({ c, r }) =>
        drawer.rect({ adjusted: false, fillColor: c, rect: r })
      );
    }

    const drawX = (x, offset = 0) => {
      drawer.lines({
        lines: [
          [x + offset / 2, 61 - offset],
          [x + 7 + offset * 3, 67 + offset],
        ],
        strokeColor: "red",
      });
      drawer.lines({
        lines: [
          [x + 7 + offset * 3, 61 - offset],
          [x + offset / 2, 67 + offset],
        ],
        strokeColor: "red",
      });
    };

    if (this.levelOverTimer > delay * 5)
      if ((this.level.level - 1) % 6 >= 0) drawX(32);
    if (this.levelOverTimer > delay * 5.1)
      if ((this.level.level - 1) % 6 >= 1) drawX(42);
    if (this.levelOverTimer > delay * 5.2)
      if ((this.level.level - 1) % 6 >= 2) drawX(52);
    if (this.levelOverTimer > delay * 5.3)
      if ((this.level.level - 1) % 6 >= 3) drawX(62);
    if (this.levelOverTimer > delay * 5.4)
      if ((this.level.level - 1) % 6 >= 4) drawX(72);
    if (this.levelOverTimer > delay * 5.5)
      if ((this.level.level - 1) % 6 >= 5) drawX(82, 2);

    if (this.welcomeMessage) {
      drawer.rect({
        adjusted: false,
        fillColor: "#000",
        rect: [0, 0, 200, 200],
      });
      drawer.text({
        text: "Welcome",
        size: 3,
        x: 17,
        y: 30,
      });
      drawer.text({
        text: "to space",
        size: 3,
        x: 19,
        y: 60,
      });
    }

    if (this.levelFadeIn < 200) {
      drawer.rect({
        adjusted: false,
        fillColor: `rgba(0,0,0,${1 - this.levelFadeIn / 200})`,
        rect: [0, 0, 128, 128],
      });
    }

    const newLevelTimer = delay * (7 + (this.level.level === 1 ? 3 : 0));
    if (this.levelOverTimer > newLevelTimer - 50) {
      drawer.rect({
        adjusted: false,
        fillColor: `rgba(0,0,0,${
          1 - (newLevelTimer - this.levelOverTimer) / 50
        })`,
        rect: [0, 0, 128, 128],
      });
    }

    if (this.gameOver) {
      drawer.rect({
        adjusted: false,
        fillColor: "#000",
        rect: [15, 26, 98, 31],
      });
      drawer.text({
        text: "Game over",
        size: 2,
        x: 25,
        y: 36,
      });
    }
  }
}

export default Level;
