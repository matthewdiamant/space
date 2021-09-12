class Keyboard {
  constructor() {
    document.addEventListener("keyup", (event) => this.onKeyup(event));
    document.addEventListener("keydown", (event) => this.onKeydown(event));

    this._pressed = {};

    this.ENTER = [13];
    this.SPACE = [32];
    this.LEFT = [37, 65];
    this.UP = [38, 87, 16, 17];
    this.RIGHT = [39, 68];
    this.DOWN = [40, 83];
  }

  isDown(keyCode) {
    return keyCode.some((key) => this._pressed[key]) || false;
  }

  onKeydown(event) {
    this._pressed[event.keyCode] = true;
  }

  onKeyup(event) {
    delete this._pressed[event.keyCode];
  }
}

export default Keyboard;
