import Blood from "./Blood";
import BloodChunk from "./BloodChunk";
import Character from "./Character";
import { humanoid } from "./Sprites";

class Enemy extends Character {
  constructor(x, y, health, facing, colors, persona, weapon) {
    super(x, y, health, facing, weapon);
    this.maxDx = 0.8;
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

  tick({ camera, map, projectiles, player, sound }) {
    const [presses, immobile] = this.persona({ enemy: this, map, player });
    if (presses) this.presses = presses;
    Character.tick.call(this, {
      camera,
      map,
      projectiles,
      presses: this.presses,
      sound,
      immobile,
      volume: 0.7,
    });
  }

  explode({ spurts, chunks, sound }) {
    sound.play("death");
    for (let i = 0; i < 100; i++) {
      spurts.add(
        new Blood(
          this.x,
          this.y,
          Math.random() * 5 - 2.5,
          Math.random() * 5 - 5,
          this.bloodColor
        )
      );
    }
    for (let i = 0; i < 5; i++) {
      chunks.chunks.push(
        new BloodChunk(
          this.x,
          this.y - 2,
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
        rect: [this.x, this.y - 1, 8 * (this.health / this.maxHealth), 1],
      });
    }

    humanoid(this.x, this.y, this.facing, this.colors).forEach(({ c, r }) =>
      drawer.rect({
        fillColor: c,
        rect: r,
        opacity: Math.min(this.lifespan / 120, 1),
      })
    );

    this.weapon &&
      this.weapon.draw(drawer, { x: this.x, y: this.y, facing: this.facing });
  }
}

export default Enemy;
