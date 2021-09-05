import Character from "./Character";
import { humanoid } from "./Sprites";

class Enemy extends Character {
  constructor(x, y, health, facing, colors, persona) {
    super(x, y, health, facing);
    this.colors = colors;
    this.bloodColor = "#32CD32";
    this.presses = {
      left: false,
      right: false,
      up: false,
      space: false,
    };
    this.persona = persona;
  }

  tick({ camera, map, projectiles }) {
    const [presses, immobile] = this.persona({ enemy: this, map });
    if (presses) this.presses = presses;
    Character.tick.call(this, {
      camera,
      map,
      projectiles,
      presses: this.presses,
      immobile,
    });
  }

  draw(drawer) {
    if (this.health < this.maxHealth) {
      drawer.rect({
        fillColor: "white",
        rect: [this.x, this.y - 1, 8 * (this.health / this.maxHealth), 1],
      });
    }

    humanoid(this.x, this.y, this.facing, this.colors).forEach(({ c, r }) =>
      drawer.rect({ fillColor: c, rect: r })
    );
  }
}

export default Enemy;
