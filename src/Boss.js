import Character from "./Character";
import { collideSide, collideFloor, collideRoof } from "./collisions";
import { humanoid } from "./Sprites";

const clamp = (num, min, max) => Math.min(Math.max(min, num), max);

class Boss extends Character {
  constructor(x, y, health, facing, weapon) {
    super(x, y, health, facing, weapon);
    this.bloodColor = "#32CD32";
    this.size = 80;
  }

  tick({ map }) {
    // move y
    this.dy += this.grav;
    this.dy = clamp(this.dy, -this.maxDy, this.maxDy);
    this.y += this.dy;

    if (!collideFloor(this, map)) {
      this.grounded = false;
      this.airtime += 1;
    }
  }

  draw(drawer) {
    if (this.health < this.maxHealth) {
      drawer.rect({
        fillColor: "white",
        rect: [this.x, this.y - 1, 8 * (this.health / this.maxHealth), 1],
      });
    }

    drawer.rect({
      fillColor: "red",
      rect: [this.x, this.y, 80, 80],
    });
  }
}

export default Boss;
