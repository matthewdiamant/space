import Camera from "./Camera";

let cx = null;

export default class Drawer {
  constructor(canvas) {
    this.canvas = canvas;
    cx = this.canvas.getContext("2d");
    this.camera = new Camera();
  }

  draw(d) {
    cx.save();
    d();
    cx.restore();
  }

  clearBackground() {
    cx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawBackground(color) {
    cx.fillStyle = color;
    cx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  rect({
    rect,
    fillColor,
    strokeColor,
    shadowBlur = 0,
    shadowColor = "none",
    lineWidth = 1,
    adjusted = true,
    rotation,
    size,
    crisp = true,
  }) {
    if (crisp) {
      rect[0] = Math.floor(rect[0]);
      rect[1] = Math.floor(rect[1]);
    }
    if (adjusted) {
      rect[0] = this.camera.adjustX(rect[0], this.canvas.width);
      rect[1] = this.camera.adjustY(rect[1], this.canvas.height);
    }
    if (rotation) {
      cx.translate(rect[0] + size / 2, rect[1] + size / 2);
      cx.rotate(rotation);
      cx.translate(-1 * rect[0] - size / 2, -1 * rect[1] - size / 2);
    }
    cx.shadowBlur = shadowBlur;
    cx.shadowColor = shadowColor;
    if (fillColor) {
      cx.fillStyle = fillColor;
      cx.fillRect(...[rect[0], rect[1], ...rect.slice(2)]);
    }
    if (strokeColor) {
      cx.strokeStyle = strokeColor;
      cx.lineWidth = lineWidth;
      cx.strokeRect(...[rect[0], rect[1], ...rect.slice(2)]);
    }
    cx.shadowBlur = 0;
  }

  arc({ arc, fillColor, strokeColor, shadowBlur, shadowColor }) {
    cx.beginPath();
    cx.arc(
      this.camera.adjustX(arc[0], this.canvas.width),
      this.camera.adjustY(arc[1], this.canvas.height),
      ...arc.slice(2)
    );
    cx.shadowBlur = shadowBlur;
    cx.shadowColor = shadowColor;
    if (fillColor) {
      cx.fillStyle = fillColor;
      cx.fill();
    }
    if (strokeColor) {
      cx.strokeStyle = strokeColor;
      cx.stroke();
    }
    cx.shadowBlur = 0;
  }

  text({ text, x, y, fillColor = "#fff", size = 1 }) {
    cx.fillStyle = fillColor;

    let currX = 0;

    text
      .toUpperCase()
      .split("")
      .map((c) => letters[c])
      .forEach((letter) => {
        let currY = 0;
        let addX = 0;
        letter.forEach((row) => {
          row.forEach((bit, i) => {
            bit && cx.fillRect(currX + i * size + x, currY + y, size, size);
          });
          addX = Math.max(addX, row.length * size);
          currY += size;
        });
        currX += size + addX;
      });
  }

  lines({
    lines,
    shadowBlur = 0,
    shadowColor,
    rotation,
    x,
    y,
    fillColor,
    strokeColor,
  }) {
    if (rotation) {
      cx.translate(
        this.camera.adjustX(x, this.canvas.width),
        this.camera.adjustY(y, this.canvas.height)
      );
      cx.rotate(rotation);
      cx.translate(
        -1 * this.camera.adjustX(x, this.canvas.width),
        -1 * this.camera.adjustY(y, this.canvas.height)
      );
    }
    cx.beginPath();
    cx.moveTo(
      this.camera.adjustX(lines[0][0], this.canvas.width),
      this.camera.adjustY(lines[0][1], this.canvas.height)
    );
    lines
      .slice(1)
      .map((line) =>
        cx.lineTo(
          this.camera.adjustX(line[0], this.canvas.width),
          this.camera.adjustY(line[1], this.canvas.height)
        )
      );
    cx.closePath();
    cx.shadowBlur = shadowBlur;
    cx.shadowColor = shadowColor;
    if (strokeColor) {
      cx.strokeStyle = strokeColor;
      cx.stroke();
    }
    if (fillColor) {
      cx.fillStyle = fillColor;
      cx.fill();
    }
  }

  fill({
    path,
    x,
    y,
    fillColor,
    strokeColor,
    rotation,
    adjusted = true,
    centered = true,
    size,
  }) {
    if (adjusted) {
      x = this.camera.adjustX(x, this.canvas.width);
      y = this.camera.adjustY(y, this.canvas.height);
    }
    if (rotation) {
      cx.translate(x, y);
      cx.rotate(rotation);
      cx.translate(-1 * x, -1 * y);
    }
    cx.translate(x, y);
    if (!centered) {
      cx.translate(-size / 2, -size / 2 + 0.5);
    }
    if (fillColor) {
      cx.fillStyle = fillColor;
      cx.fill(path);
    }
    if (strokeColor) {
      cx.strokeStyle = strokeColor;
      cx.fillStyle = fillColor || "#131";
      cx.fill(path);
      cx.stroke(path);
    }
  }

  emoji({ emoji, x, y, adjusted = true }) {
    if (adjusted) {
      x = this.camera.adjustX(x, this.canvas.width);
      y = this.camera.adjustY(y, this.canvas.height);
    }
    cx.font = "4px serif";
    cx.fillText(emoji, x, y);
  }

  hitbox({ x, y, size }) {
    this.rect({
      rect: [x - size / 2, y - size / 2, size, size],
      color: "#f00",
    });
  }
}

const letters = {
  A: [
    [, 1],
    [1, , 1],
    [1, , 1],
    [1, 1, 1],
    [1, , 1],
  ],
  B: [
    [1, 1],
    [1, , 1],
    [1, 1, 1],
    [1, , 1],
    [1, 1],
  ],
  C: [[1, 1, 1], [1], [1], [1], [1, 1, 1]],
  D: [
    [1, 1],
    [1, , 1],
    [1, , 1],
    [1, , 1],
    [1, 1],
  ],
  E: [[1, 1, 1], [1], [1, 1, 1], [1], [1, 1, 1]],
  F: [[1, 1, 1], [1], [1, 1], [1], [1]],
  G: [[, 1, 1], [1], [1, , 1, 1], [1, , , 1], [, 1, 1]],
  H: [
    [1, , 1],
    [1, , 1],
    [1, 1, 1],
    [1, , 1],
    [1, , 1],
  ],
  I: [
    [1, 1, 1],
    [, 1],
    [, 1],
    [, 1],
    [1, 1, 1],
  ],
  J: [
    [1, 1, 1],
    [, , 1],
    [, , 1],
    [1, , 1],
    [1, 1, 1],
  ],
  K: [
    [1, , , 1],
    [1, , 1],
    [1, 1],
    [1, , 1],
    [1, , , 1],
  ],
  L: [[1], [1], [1], [1], [1, 1, 1]],
  M: [
    [1, 1, 1, 1, 1],
    [1, , 1, , 1],
    [1, , 1, , 1],
    [1, , , , 1],
    [1, , , , 1],
  ],
  N: [
    [1, , , 1],
    [1, 1, , 1],
    [1, , 1, 1],
    [1, , , 1],
    [1, , , 1],
  ],
  O: [
    [1, 1, 1],
    [1, , 1],
    [1, , 1],
    [1, , 1],
    [1, 1, 1],
  ],
  P: [[1, 1, 1], [1, , 1], [1, 1, 1], [1], [1]],
  Q: [
    [0, 1, 1],
    [1, , , 1],
    [1, , , 1],
    [1, , 1, 1],
    [1, 1, 1, 1],
  ],
  R: [
    [1, 1],
    [1, , 1],
    [1, , 1],
    [1, 1],
    [1, , 1],
  ],
  S: [[1, 1, 1], [1], [1, 1, 1], [, , 1], [1, 1, 1]],
  T: [
    [1, 1, 1],
    [, 1],
    [, 1],
    [, 1],
    [, 1],
  ],
  U: [
    [1, , 1],
    [1, , 1],
    [1, , 1],
    [1, , 1],
    [1, 1, 1],
  ],
  V: [
    [1, , , , 1],
    [1, , , , 1],
    [, 1, , 1],
    [, 1, , 1],
    [, , 1],
  ],
  W: [
    [1, , , , 1],
    [1, , , , 1],
    [1, , , , 1],
    [1, , 1, , 1],
    [1, 1, 1, 1, 1],
  ],
  X: [
    [1, , , , 1],
    [, 1, , 1],
    [, , 1],
    [, 1, , 1],
    [1, , , , 1],
  ],
  Y: [
    [1, , 1],
    [1, , 1],
    [, 1],
    [, 1],
    [, 1],
  ],
  Z: [
    [1, 1, 1, 1, 1],
    [, , , 1],
    [, , 1],
    [, 1],
    [1, 1, 1, 1, 1],
  ],
  " ": [
    [, ,],
    [, ,],
    [, ,],
    [, ,],
    [, ,],
  ],
};
