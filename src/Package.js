import GameObject from "./GameObject";
import WeaponFactory from "./WeaponFactory";

class Package extends GameObject {
  constructor(x, y, weapon) {
    super({ x, y });

    this.weapon = weapon || new WeaponFactory().random();
    this.size = 5;
    this.grav = 0.04;
    this.dy = 0.4;
    this.landed = false;
  }

  tick() {
    if (this.landed) return;
    this.dy += this.grav;
    this.y += this.dy;
  }

  draw(drawer) {
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
  }
}

export default Package;
