import Character from "./Character";
import { humanoid } from "./Sprites.js";

export default class Player extends Character {
  constructor(x, y, health) {
    super(x, y, health);
    this.bloodColor = "red";
  }

  tick({ camera, keyboard, map, projectiles }) {
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
    });
  }

  draw(drawer) {
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
  }
}
