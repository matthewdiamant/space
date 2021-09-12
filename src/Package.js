import GameObject from "./GameObject";
import WeaponFactory from "./WeaponFactory";

class Package extends GameObject {
  constructor(x, y, weapon, level) {
    super({ x, y });

    this.weapon = weapon || new WeaponFactory().random(level);
    this.size = 5;
    this.grav = 0.04;
    this.dy = 0.4;
    this.landed = false;
    this.type = weapon || Math.random() < 0.66 ? "weapon" : "health";
  }

  tick() {
    if (this.landed) return;
    this.dy += this.grav;
    this.y += this.dy;
  }

  draw(drawer) {
    if (this.type === "weapon") {
      drawer.rect({
        fillColor: "#C3732A",
        rect: [this.x, this.y, 5, 5],
      });

      [
        [0, 1],
        [1, 0],
        [2, 0],
        [3, 0],
        [4, 1],
        [3, 2],
        [2, 2],
        [2, 4],
      ].forEach(([x, y]) =>
        drawer.rect({
          fillColor: "yellow",
          rect: [this.x + x, this.y + y, 1, 1],
        })
      );
    } else {
      drawer.rect({
        fillColor: "#FFF",
        rect: [this.x, this.y, 5, 5],
      });

      [
        [1, 2, 3, 1],
        [2, 1, 1, 3],
      ].forEach(([x, y, dx, dy]) =>
        drawer.rect({
          fillColor: "red",
          rect: [this.x + x, this.y + y, dx, dy],
        })
      );
    }
  }
}

export default Package;
