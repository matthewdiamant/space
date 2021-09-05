import Drawer from "./Drawer";
import GameContainer from "./GameContainer";
import Keyboard from "./Keyboard";
import Sound from "./Sound";
import Music from "./Music";
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
  let map = new Map(level.level);
  let hud = new HUD();
  // let music = new Music();
  let player = new Player(10, 10, 1000);
  let enemies = new EnemyCollection();
  let projectiles = new ProjectileCollection();
  let spurts = new BloodCollection();
  let chunks = [];
  let packages = new PackageCollection();

  gameContainer.initialize();
  level.initializeLevel(1, { player, enemies });

  let fps = 60,
    interval = 1000 / fps,
    lastTime = new Date().getTime(),
    currentTime = 0,
    delta = 0;

  let gameLoop = () => {
    tick();
    collisionDetection();
    draw();
  };

  let tick = () => {
    const { camera } = drawer;
    level.tick({ player, enemies });
    player.tick({ camera, keyboard, map, projectiles });
    enemies.tick({ camera, map, projectiles, spurts, chunks });
    camera.tick({ player, map });
    projectiles.tick();
    spurts.tick();
    chunks.forEach((chunk) => chunk.tick());
    hud.tick(player, enemies);
    packages.tick(map);
  };

  let collisionDetection = () => {
    projectiles.projectiles
      .filter((p) => !p.exploding && p.lifespan > 2)
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

    spurts.spurts.concat(chunks).forEach((item) => {
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

  let draw = () => {
    window.requestAnimationFrame(gameLoop);

    currentTime = new Date().getTime();
    delta = currentTime - lastTime;

    if (delta > interval) {
      drawer.clearBackground();
      drawObjects().map((object) => object.draw(drawer));
      lastTime = currentTime - (delta % interval);
    }
  };

  let drawObjects = () => [
    background,
    map,
    enemies,
    player,
    packages,
    projectiles,
    spurts,
    ...chunks,
    hud,
    level,
  ];

  document.querySelector("main").className += " loaded";
  gameLoop();
};
