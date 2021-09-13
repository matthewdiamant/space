import Blood from "./Blood";
import BloodChunk from "./BloodChunk";
import Character from "./Character";
import Weapon from "./Weapon";

import { collideFloor } from "./collisions";
import { humanoid } from "./Sprites";
import { minigun } from "./WeaponFactory";
import { bossColors } from "./enemyTypes";

const clamp = (num, min, max) => Math.min(Math.max(min, num), max);

const anglerProjectiles = {
  color: () => "yellow",
  speed: 1.5,
  lift: -0.6,
  grav: 0,
  spreadY: 0.3,
  explosion: 3,
  size: 5,
  damage: 10,
  blood: 20,
};

const angler = {
  cooldown: 15,
  payloadCount: 1,
  shake: { force: 1, duration: 15 },
  sound: "shotgun",
  projectileConfig: anglerProjectiles,
};

const angler2 = Object.assign({}, angler);
angler2.projectileConfig = Object.assign({}, anglerProjectiles);
angler2.projectileConfig.lift = 0.6;

const makeMini = (lift) => {
  const proj = Object.assign({}, minigun.projectileConfig);
  proj.lift = lift;
  const mini = Object.assign({}, minigun);
  mini.projectileConfig = proj;
  return mini;
};

// prettier-ignore
const weapons = [
  { weapon: new Weapon(makeMini(0.8)),  y: 25,  x: 40, shoot: 40, offset: 70 },
  { weapon: new Weapon(makeMini(0.4)),  y: 28, x: 40, shoot: 40, offset: 60 },
  { weapon: new Weapon(minigun),        y: 31, x: 40, shoot: 40, offset: 50 },
  { weapon: new Weapon(makeMini(0)),    y: 33, x: 40, shoot: 40, offset: 40 },
  { weapon: new Weapon(makeMini(-0.4)), y: 36, x: 40, shoot: 40, offset: 30 },
  { weapon: new Weapon(makeMini(-0.8)), y: 39, x: 40, shoot: 40, offset: 20 },

  { weapon: new Weapon(angler), y: 30, x: 28, shoot: 100, offset: 200 },
  { weapon: new Weapon(angler2), y: 10, x: 28, shoot: 100, offset: 200 },
];

const death = {
  cooldown: 15,
  payloadCount: 0,
  shake: { force: 4, duration: 200 },
  sound: "death",
  projectileConfig: {
    color: () => "yellow",
    speed: 1.5,
    lift: -0.6,
    grav: 0,
    spreadY: 0.3,
    explosion: 3,
    size: 5,
    damage: 10,
    blood: 5,
  },
};

class Boss extends Character {
  constructor(x, y, health, facing, weapon) {
    super(x, y, health, facing, weapon);
    this.bloodColor = "#32CD32";
    this.size = 56;
    this.dx = 0.2;
  }

  tick({ map, projectiles, camera, sound, player, spurts, chunks }) {
    this.lifespan += 1;

    // move x
    const maxLeft = 105;
    const maxRight = 160;
    this.x += this.facing * this.dx;
    this.x = Math.max(Math.min(this.x, maxRight), maxLeft);

    // move y
    this.dy += this.grav;
    this.dy = clamp(this.dy, -this.maxDy, this.maxDy);
    this.y += this.dy;

    if (!collideFloor(this, map)) {
      this.grounded = false;
      this.airtime += 1;
    }

    if (!this.skull) {
      if (!(this.lifespan % 200))
        this.facing = player.x > this.x + this.size / 2 ? 1 : -1;
    } else {
      if (!(this.lifespan % 100)) {
        this.dx = 1 - Math.random() * 2;
        this.dy = 1 - Math.random() * 2;
      }
      this.facing = player.x > this.x + this.size / 2 ? 1 : -1;
      this.y = Math.max(Math.min(this.y, 100), 10);
    }

    weapons.forEach(({ weapon, x, y, shoot, offset }) => {
      if (this.lifespan <= 100) return;
      const weaponLocation = {
        x: this.x + x,
        y: this.y + y,
        facing: this.facing,
      };

      const space =
        (this.lifespan + offset) % (!this.skull ? 400 : 200) < shoot;
      weapon.tick(space, projectiles, weaponLocation, camera, sound, 0.7, this);
    });

    if (!this.skull && this.health <= 200) {
      this.skull = true;
      this.size = 32;
      this.grav = 0;
      this.x += this.facing * 10;
      this.dx = 2;
      this.explode({ spurts, chunks, sound });
      new Weapon(death).tick(true, projectiles, {}, camera, sound, 1, this);
    }

    if (this.health <= 0) {
      new Weapon(death).tick(true, projectiles, {}, camera, sound, 1, this);
    }
  }

  explode({ spurts, chunks, sound }) {
    for (let i = 0; i < 300; i++) {
      spurts.add(
        new Blood(
          this.x + Math.random() * 60,
          this.y + Math.random() * 60,
          Math.random() * 5 - 2.5,
          Math.random() * 5 - 5,
          this.bloodColor
        )
      );
    }
    for (let i = 0; i < 40; i++) {
      chunks.chunks.push(
        new BloodChunk(
          this.x + Math.random() * 60,
          this.y + Math.random() * 60,
          Math.random() * 3 - 1.5,
          Math.random() * 3 - 1.5,
          "red"
        )
      );
    }
  }

  draw(drawer) {
    if (this.health < this.maxHealth) {
      drawer.rect({
        fillColor: "white",
        rect: [
          this.x - 2,
          this.y - (this.skull ? 10 : 22),
          60 * (this.health / this.maxHealth),
          2,
        ],
      });
    }

    if (!this.skull) {
      humanoid(
        this.x - (this.facing === 1 ? 13 : 26),
        this.y - 40,
        this.facing,
        bossColors,
        {
          huge: true,
        }
      ).forEach(({ c, r }) => drawer.rect({ fillColor: c, rect: r }));
    } else {
      const mult = 4;
      [
        [2, 0, 5, 1],
        [1, 1, 7, 1],
        [0, 2, 9, 2],
        [2, 4, 3, 1],
        [7, 4, 2, 1],
        [2, 5, 1, 1],
        [4, 5, 1, 1],
        [7, 5, 2, 1],
        [0, 6, 8, 1],
        [1, 7, 5, 1],
        [1, 8, 1, 1],
        [3, 8, 1, 1],
        [5, 8, 1, 1],
      ].forEach(([x, y, width, height]) =>
        drawer.rect({
          fillColor: "white",
          rect: [
            this.x + (this.facing === 1 ? 8 - x - width : x) * mult,
            this.y + y * mult,
            width * mult,
            height * mult,
          ],
        })
      );
    }
  }
}

export default Boss;
