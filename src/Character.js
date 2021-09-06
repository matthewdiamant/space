import GameObject from "./GameObject";
import WeaponFactory from "./WeaponFactory";

const clamp = (num, min, max) => Math.min(Math.max(min, num), max);

const offset = 1;

const collideSide = (player, map) => {
  let { x, y, dx, size } = player;

  if (dx > 0) {
    const rightTopTileType = map.getTile(x + size, y);
    const rightBottomTileType = map.getTile(x + size, y + size - offset);
    if (rightTopTileType || rightBottomTileType) {
      player.dx = 0;
      player.x = Math.floor(x / 8) * 8;
    }
  } else if (dx < 0) {
    const leftTopTileType = map.getTile(x, y);
    const leftBottomTileType = map.getTile(x, y + size - offset);
    if (leftTopTileType || leftBottomTileType) {
      player.dx = 0;
      player.x = Math.floor(x / 8) * 8 + 8;
    }
  }
};

const collideFloor = (player, map) => {
  const { x, y, dy, size } = player;

  if (dy < 0) return false;

  const leftBottomTileType = map.getTile(x, y + size);
  const rightBottomTileType = map.getTile(x + size - offset, y + size);

  if (leftBottomTileType || rightBottomTileType) {
    player.dy = 0;
    player.y = Math.floor(y / 8) * 8;
    player.grounded = true;
    player.airtime = 0;
    return true;
  } else {
    return false;
  }
};

const collideRoof = (player, map) => {
  const { x, y, size } = player;
  const leftTopTileType = map.getTile(x, y);
  const rightTopTileType = map.getTile(x + size - offset, y);

  if (leftTopTileType || rightTopTileType) {
    player.dy = 0;
    player.y = Math.floor((y - size / 2) / 8) * 8 + 8 + size / 2;
    player.jumpHoldTime = 0;
  }
};

class Character extends GameObject {
  constructor(x, y, health, facing) {
    super({ x, y, maxDx: 1, maxDy: 2, grav: 0.15 });
    this.size = 8;
    this.acc = 0.05;
    this.dcc = 0.8;
    this.airDcc = 1;
    this.grounded = true;
    this.facing = facing || 1;
    this.lifespan = 0;

    // jumping
    this.holdJump = 0;
    this.airtime = 0;
    this.jumpHoldTime = 0;
    this.jumpSpeed = 2;
    this.maxJumpPress = 12;

    this.health = health;
    this.maxHealth = health;

    const weaponFactory = new WeaponFactory();
    this.weapon = weaponFactory.random();
  }

  static tick({ camera, map, projectiles, presses, immobile, sound }) {
    this.lifespan += 1;

    const { left, right, up, space } = presses;
    this.holdJump = up ? this.holdJump + 1 : 0;

    const weaponLocation = {
      x: this.x + (this.facing === 1 ? this.size - 1 : 1),
      y: this.y + 5,
      facing: this.facing,
    };
    const knockback = this.weapon.tick(
      space,
      projectiles,
      weaponLocation,
      camera,
      sound
    );

    // move x
    if (left) {
      this.dx -= this.acc;
      this.facing = -1;
    } else if (right) {
      this.dx += this.acc;
      this.facing = 1;
    } else {
      if (this.grounded) {
        this.dx *= this.dcc;
      } else {
        this.dx *= this.airDcc;
      }
    }
    if (Math.abs(this.dx) < 0.01) this.dx = 0;
    this.dx = clamp(this.dx, -this.maxDx, this.maxDx);
    this.dx += knockback * -this.facing;
    this.x += immobile ? 0 : this.dx;

    // hit walls
    collideSide(this, map);

    // jumping
    if (up) {
      const onGround = this.grounded || this.airtime < 5;
      const newJump = this.holdJump < 10;
      if (this.jumpHoldTime > 0 || (onGround && newJump)) {
        if (this.grounded) sound.jump();
        this.jumpHoldTime += 1;
        if (this.jumpHoldTime < this.maxJumpPress) {
          this.dy = -this.jumpSpeed;
        }
      }
    } else {
      this.jumpHoldTime = 0;
    }

    // move y
    this.dy += this.grav;
    this.dy = clamp(this.dy, -this.maxDy, this.maxDy);
    this.y += this.dy;

    if (!collideFloor(this, map)) {
      this.grounded = false;
      this.airtime += 1;
    }

    collideRoof(this, map);
  }

  static takeDamage(damage) {
    this.health -= damage;
  }
}

export default Character;
