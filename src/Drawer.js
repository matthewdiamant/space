import Camera from "./Camera";
import { canvasWidth, canvasHeight } from "./constants";

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

  drawBackground(start, end) {
    cx.save();
    var gradient = cx.createLinearGradient(20, 0, 220, 0);

    gradient.addColorStop(0, start);
    gradient.addColorStop(1, end);

    cx.rotate(Math.PI / 2);
    cx.translate(0, -this.canvas.height);

    cx.fillStyle = gradient;

    cx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    cx.restore();
  }

  rect({
    rect,
    fillColor,
    strokeColor,
    shadowBlur = 0,
    shadowColor = "none",
    opacity,
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
    if (opacity) {
      cx.globalAlpha = opacity;
    }
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
    cx.globalAlpha = 1;
  }

  arc({
    arc,
    adjusted = true,
    fillColor,
    strokeColor,
    shadowBlur,
    shadowColor,
  }) {
    if (adjusted) {
      arc[0] = this.camera.adjustX(arc[0], this.canvas.width);
      arc[1] = this.camera.adjustY(arc[1], this.canvas.height);
    }
    cx.beginPath();
    cx.arc(...arc);
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
      .map((c) => {
        if (!letters[c]) console.log(c);
        return letters[c];
      })
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

  lines({ lines, shadowBlur = 0, shadowColor, fillColor, strokeColor }) {
    cx.beginPath();
    cx.moveTo(lines[0][0], lines[0][1]);
    lines.slice(1).map((line) => cx.lineTo(line[0], line[1]));
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

  emoji({ emoji, x, y, flipped, adjusted = true }) {
    this.draw(() => {
      if (adjusted) {
        x = this.camera.adjustX(x, this.canvas.width);
        y = this.camera.adjustY(y, this.canvas.height);
      }
      if (flipped) {
        // cx.scale(-1, 1);
        // cx.translate(canvasWidth.width / 2, canvasHeight.height / 2);
      }

      cx.font = "6px serif";
      cx.fillText(emoji, x, y + 2);
    });
  }

  hitbox({ x, y, size }) {
    this.rect({
      rect: [x - size / 2, y - size / 2, size, size],
      color: "#f00",
    });
  }
}

const letters = {};
letters["A"] = [
  [, 1],
  [1, , 1],
  [1, , 1],
  [1, 1, 1],
  [1, , 1],
];
letters["B"] = [
  [1, 1],
  [1, , 1],
  [1, 1, 1],
  [1, , 1],
  [1, 1],
];
letters["C"] = [[1, 1, 1], [1], [1], [1], [1, 1, 1]];
letters["D"] = [
  [1, 1],
  [1, , 1],
  [1, , 1],
  [1, , 1],
  [1, 1],
];
letters["E"] = [[1, 1, 1], [1], [1, 1, 1], [1], [1, 1, 1]];
letters["F"] = [[1, 1, 1], [1], [1, 1], [1], [1]];
letters["G"] = [[, 1, 1], [1], [1, , 1, 1], [1, , , 1], [, 1, 1]];
letters["H"] = [
  [1, , 1],
  [1, , 1],
  [1, 1, 1],
  [1, , 1],
  [1, , 1],
];
letters["I"] = [
  [1, 1, 1],
  [, 1],
  [, 1],
  [, 1],
  [1, 1, 1],
];
letters["J"] = [
  [1, 1, 1],
  [, , 1],
  [, , 1],
  [1, , 1],
  [1, 1, 1],
];
letters["K"] = [
  [1, , , 1],
  [1, , 1],
  [1, 1],
  [1, , 1],
  [1, , , 1],
];
letters["L"] = [[1], [1], [1], [1], [1, 1, 1]];
letters["M"] = [
  [1, 1, 1, 1, 1],
  [1, , 1, , 1],
  [1, , 1, , 1],
  [1, , , , 1],
  [1, , , , 1],
];
letters["N"] = [
  [1, , , 1],
  [1, 1, , 1],
  [1, , 1, 1],
  [1, , , 1],
  [1, , , 1],
];
letters["O"] = [
  [1, 1, 1],
  [1, , 1],
  [1, , 1],
  [1, , 1],
  [1, 1, 1],
];
letters["P"] = [[1, 1, 1], [1, , 1], [1, 1, 1], [1], [1]];
letters["Q"] = [
  [0, 1, 1],
  [1, , , 1],
  [1, , , 1],
  [1, , 1, 1],
  [1, 1, 1, 1],
];
letters["R"] = [
  [1, 1],
  [1, , 1],
  [1, , 1],
  [1, 1],
  [1, , 1],
];
letters["S"] = [[1, 1, 1], [1], [1, 1, 1], [, , 1], [1, 1, 1]];
letters["T"] = [
  [1, 1, 1],
  [, 1],
  [, 1],
  [, 1],
  [, 1],
];
letters["U"] = [
  [1, , 1],
  [1, , 1],
  [1, , 1],
  [1, , 1],
  [1, 1, 1],
];
letters["V"] = [
  [1, , , , 1],
  [1, , , , 1],
  [, 1, , 1],
  [, 1, , 1],
  [, , 1],
];
letters["W"] = [
  [1, , , , 1],
  [1, , , , 1],
  [1, , , , 1],
  [1, , 1, , 1],
  [1, 1, 1, 1, 1],
];
letters["X"] = [
  [1, , , , 1],
  [, 1, , 1],
  [, , 1],
  [, 1, , 1],
  [1, , , , 1],
];
letters["Y"] = [
  [1, , 1],
  [1, , 1],
  [, 1],
  [, 1],
  [, 1],
];
letters["Z"] = [
  [1, 1, 1, 1, 1],
  [, , , 1],
  [, , 1],
  [, 1],
  [1, 1, 1, 1, 1],
];
letters[" "] = [
  [, ,],
  [, ,],
  [, ,],
  [, ,],
  [, ,],
];
letters["0"] = [
  [1, 1, 1],
  [1, , 1],
  [1, , 1],
  [1, , 1],
  [1, 1, 1],
];
letters["1"] = [
  [, 1],
  [, 1],
  [, 1],
  [, 1],
  [, 1],
];
letters["2"] = [
  [1, 1, 1],
  [0, 0, 1],
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1],
];
letters["3"] = [
  [1, 1, 1],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 1],
  [1, 1, 1],
];
letters["4"] = [
  [1, 0, 1],
  [1, 0, 1],
  [1, 1, 1],
  [0, 0, 1],
  [0, 0, 1],
];
letters["5"] = [
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1],
  [0, 0, 1],
  [1, 1, 1],
];
letters["6"] = [
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
letters["7"] = [
  [1, 1, 1],
  [0, 0, 1],
  [0, 0, 1],
  [0, 0, 1],
  [0, 0, 1],
];
letters["8"] = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
letters["9"] = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
  [0, 0, 1],
  [1, 1, 1],
];
