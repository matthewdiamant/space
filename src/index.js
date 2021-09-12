import Drawer from "./Drawer";
import GameContainer from "./GameContainer";
import Keyboard from "./Keyboard";
import Sound from "./Sound";
import CollisionDetector from "./CollisionDetector";

import Background from "./Background";
import Level from "./Level";
import Map from "./Map";
import HUD from "./HUD";
import Player from "./Player";
import EnemyCollection from "./EnemyCollection";
import ProjectileCollection from "./ProjectileCollection";
import BloodCollection from "./BloodCollection";
import PackageCollection from "./PackageCollection";

window.onload = () => {
  let gameContainer = new GameContainer();

  let drawer = new Drawer(gameContainer.canvas);
  let keyboard = new Keyboard();
  let sound = new Sound();
  let collisionDetector = new CollisionDetector();

  let background = new Background({
    cw: gameContainer.canvas.width,
    ch: gameContainer.canvas.height,
  });

  let level = new Level();
  let map = new Map();
  let hud = new HUD();
  let player = new Player(10, 10, 350);
  let enemies = new EnemyCollection();
  let projectiles = new ProjectileCollection();
  let spurts = new BloodCollection();
  let chunks = { chunks: [] };
  let packages = new PackageCollection();

  gameContainer.initialize();
  level.initializeLevel(1, {
    player,
    enemies,
    chunks,
    spurts,
    packages,
    map,
    background,
  });

  let fps = 60,
    interval = 1000 / fps,
    lastTime = 0,
    delta = 0;

  let gameLoop = (currentTime) => {
    window.requestAnimationFrame(gameLoop);
    if (currentTime - lastTime) {
      tick();
      collisionDetection();
      drawer.clearBackground();
      drawObjects().map((object) => object.draw(drawer));
      lastTime = currentTime - (delta % interval);
    }
  };

  let tick = () => {
    const { camera } = drawer;
    level.tick({
      player,
      enemies,
      chunks,
      spurts,
      packages,
      sound,
      map,
      background,
    });
    player.tick({ camera, keyboard, map, projectiles, sound, chunks, spurts });
    enemies.tick({
      camera,
      map,
      projectiles,
      spurts,
      chunks,
      player,
      sound,
      level,
    });
    camera.tick({ player, map });
    projectiles.tick();
    spurts.tick();

    if (chunks.chunks.length > 1000) {
      chunks.chunks = chunks.chunks.slice(chunks.chunks.length - 1000);
    }
    chunks.chunks.forEach((chunk) => chunk.tick());

    hud.tick(player, enemies, level.level.enemyColor);
    packages.tick(map, level.level.level);
  };

  let collisionDetection = () => {
    projectiles.projectiles
      .filter((p) => !p.exploding)
      .forEach((projectile) => {
        // map
        if (map.getTile(projectile.x, projectile.y)) {
          projectile.destroy();
        }

        // characters
        enemies.enemies.concat([player]).forEach((object) => {
          collisionDetector.handleProjectile(projectile, object, spurts);
        });
      });

    spurts.spurts.concat(chunks.chunks).forEach((item) => {
      if (map.getTile(item.x, item.y)) item.stick();
    });

    packages.packages.forEach((packge) => {
      // map
      if (map.getTile(packge.x, packge.y + packge.size)) {
        packge.landed = true;
      }

      // characters
      enemies.enemies.concat([player]).forEach((object) => {
        collisionDetector.handlePackage(packge, object, packages);
      });
    });
  };

  let drawObjects = () => [
    background,
    map,
    enemies,
    player,
    packages,
    projectiles,
    spurts,
    ...chunks.chunks,
    hud,
    level,
  ];

  document.querySelector("div").className += " loaded";
  gameLoop();
};
