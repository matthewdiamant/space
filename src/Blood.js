import GameObject from "./GameObject";

class Blood extends GameObject {
  constructor(x, y, dx, dy, color) {
    super({ x, y, grav: 0.1 });
    this.dx = dx;
    this.dy = dy;
    this.color = color;
    this.stuck = false;
  }

  stick() {
    this.stuck = true;
  }

  tick() {
    if (this.stuck) return;
    this.x += this.dx;
    this.dy += this.grav;
    this.y += this.dy;
  }

  draw(drawer) {
    drawer.rect({
      fillColor: this.color,
      rect: [this.x, this.y, 1, 1],
    });
  }
}

export default Blood;
