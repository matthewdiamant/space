import GameObject from "./GameObject";
import WeaponFactory from "./WeaponFactory";
import { collideSide, collideFloor, collideRoof } from "./collisions";

const clamp = (num, min, max) => Math.min(Math.max(min, num), max);

class Character extends GameObject {
  constructor(x, y, health, facing, weapon) {
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

    this.weapon = weapon || new WeaponFactory().random();
  }

  static tick({ camera, map, projectiles, presses, immobile, sound, volume }) {
    this.lifespan += 1;

    const { left, right, up, space } = presses;
    this.holdJump = up ? this.holdJump + 1 : 0;

    const weaponLocation = {
      x: this.x + (this.facing === 1 ? this.size - 1 : 1),
      y: this.y + 5,
      facing: this.facing,
    };

    let knockback = 0;
    if (this.weapon) {
      knockback = this.weapon.tick(
        space,
        projectiles,
        weaponLocation,
        camera,
        sound,
        volume,
        this
      );
    }

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
        if (this.jumpHoldTime === 0) sound.play("jump");
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
