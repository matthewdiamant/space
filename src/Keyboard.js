class Keyboard {
  constructor() {
    document.addEventListener("keyup", (event) => this.onKeyup(event));
    document.addEventListener("keydown", (event) => this.onKeydown(event));

    this._pressed = {};
    this._ticks = {};

    this.ENTER = [13];
    this.SPACE = [32];
    this.LEFT = [37, 65];
    this.UP = [38, 87];
    this.RIGHT = [39, 68];
    this.DOWN = [40, 83];
  }

  isDown(keyCode) {
    return keyCode.some((key) => this._pressed[key]) || false;
  }

  ticksDown(keyCode) {
    return keyCode.reduce(
      (acc, key) => Math.max(acc, this._ticks[key] || 0),
      0
    );
  }

  onKeydown(event) {
    this._pressed[event.keyCode] = true;
    this._ticks[event.keyCode] = this._ticks[event.keyCode] || 0;
  }

  onKeyup(event) {
    delete this._pressed[event.keyCode];
    delete this._ticks[event.keyCode];
  }

  tick() {
    Object.keys(this._ticks).forEach((key) => {
      this._ticks[key] += 1;
    });
  }
}

export default Keyboard;
