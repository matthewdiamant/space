import Character from "./Character";
import { humanoid } from "./Sprites.js";
import Blood from "./Blood";
import BloodChunk from "./BloodChunk";
import WeaponFactory, { assaultRifle, debugPistol } from "./WeaponFactory";

class Player extends Character {
  constructor(x, y, health) {
    super(x, y, health);
    this.bloodColor = "red";
    this.weapon = null;
    // this.weapon = new WeaponFactory().create(debugPistol);
    this.dead = false;
  }

  tick({ camera, keyboard, map, projectiles, sound, spurts, chunks }) {
    if (this.health <= 0 && !this.dead) {
      for (let i = 0; i < 200; i++) {
        spurts.add(
          new Blood(
            this.x,
            this.y,
            Math.random() * 5 - 2.5,
            Math.random() * 5 - 5,
            "red"
          )
        );
      }
      for (let i = 0; i < 10; i++) {
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
      this.dead = true;
    }
    if (this.dead) return;

    Character.tick.call(this, {
      camera,
      map,
      projectiles,
      presses: {
        left: keyboard.isDown(keyboard.LEFT),
        right: keyboard.isDown(keyboard.RIGHT),
        up: keyboard.isDown(keyboard.UP),
        space: keyboard.isDown(keyboard.SPACE),
      },
      sound,
      volume: 1,
    });
  }

  draw(drawer) {
    if (this.dead) return;
    // drawer.rect({ fillColor: "green", rect: [this.x, this.y, 8, 8] }); // hitbox

    const colors = {
      skin: "#FFCCAA",
      hair: "#FFA300",
      eyes: "#008751",
      body: "#29ADFF",
    };

    humanoid(this.x, this.y, this.facing, colors).forEach(({ c, r }) =>
      drawer.rect({ fillColor: c, rect: r })
    );

    this.weapon &&
      this.weapon.draw(drawer, { x: this.x, y: this.y, facing: this.facing });
  }
}

export default Player;
