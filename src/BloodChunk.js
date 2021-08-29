import GameObject from "./GameObject";

class BloodChunk extends GameObject {
  constructor(x, y, dx, dy, color) {
    super({ x, y });
    this.dx = dx;
    this.dy = dy;
    this.grav = 0.1;
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
      rect: [this.x, this.y - 2, 2, 3],
    });

    [
      [1, 2],
      [2, 3],
    ].forEach(([x, y]) => {
      drawer.rect({
        fillColor: this.color,
        rect: [this.x + x - 2, this.y + y - 2, 1, 1],
      });
    });

    [
      [2, 0],
      [1, 1],
      [0, 2],
      [1, 3],
    ].forEach(([x, y]) => {
      drawer.rect({
        fillColor: "#FF77A8",
        rect: [this.x + x - 2, this.y + y - 2, 1, 1],
      });
    });
  }
}

export default BloodChunk;
