import { canvasWidth, canvasHeight } from "./constants";
const pullThreshold = 10;
const HUDSize = 15;

class Camera {
  constructor() {
    this.x = 0;
    this.y = 128;
    this.position_x = 0;
    this.position_y = 128;
    this.shakeRemaining = 0;
    this.shakeForce = 0;
  }

  adjustX(x, width) {
    return x - this.x + width / 2;
  }

  adjustY(y, height) {
    return y - this.y + height / 2;
  }

  clampX(map) {
    this.position_x = Math.round(
      Math.min(
        Math.max((canvasWidth / 8 / 2) * map.tileSize, this.position_x),
        (map.mapLength - canvasWidth / 8 / 2) * map.tileSize
      )
    );
  }

  clampY(map) {
    this.position_y = Math.round(
      Math.min(
        Math.max((canvasHeight / 8 / 2) * map.tileSize, this.position_y),
        (map.mapHeight - canvasHeight / 8 / 2) * map.tileSize + HUDSize
      )
    );
  }

  followSubject(subject) {
    if (subject.x - this.position_x > pullThreshold) {
      this.position_x = subject.x - pullThreshold;
    }
    if (subject.x - this.position_x < -pullThreshold) {
      this.position_x = subject.x + pullThreshold;
    }
    if (subject.y - this.position_y > pullThreshold) {
      this.position_y = subject.y - pullThreshold;
    }
    if (subject.y - this.position_y < -pullThreshold) {
      this.position_y = subject.y + pullThreshold;
    }
  }

  shake(force, duration) {
    if (force >= this.shakeForce || this.shakeRemaining === 0) {
      this.shakeRemaining = duration;
      this.shakeForce = force;
    }
  }

  applyShake() {
    this.shakeRemaining = Math.max(0, this.shakeRemaining - 1);
    if (!this.shakeRemaining) return;
    const shakeX = Math.random() * this.shakeForce * 2 - this.shakeForce;
    const shakeY = Math.random() * this.shakeForce * 2 - this.shakeForce;
    this.x += shakeX;
    this.y += shakeY;
  }

  tick({ player, map }) {
    this.followSubject(player, map);
    this.clampX(map);
    this.clampY(map);
    this.x = this.position_x;
    this.y = this.position_y;
    this.applyShake();
  }
}

export default Camera;
