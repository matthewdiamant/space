class Keyboard {
  constructor() {
    document.addEventListener("keyup", (event) => this.onKeyup(event));
    document.addEventListener("keydown", (event) => this.onKeydown(event));

    this._pressed = {};

    this.SPACE = { keyboard: [32], controller: [0, 1, 5, 7] };
    this.LEFT = { keyboard: [37, 65], controller: [14], dir: "l" };
    this.UP = { keyboard: [38, 87, 16, 17], controller: [12, 2, 3] };
    this.RIGHT = { keyboard: [39, 68], controller: [15], dir: "r" };
    this.DOWN = { keyboard: [40, 83], controller: [13] };
  }

  isDownControllerStick(dir) {
    if (!navigator.getGamepads()[0]) return false;
    const axes = navigator.getGamepads()[0].axes;

    return {
      l: axes[0] < 0,
      r: axes[0] > 0,
    }[dir];
  }

  isDownController(keyCode) {
    if (!navigator.getGamepads()[0]) return false;

    return navigator
      .getGamepads()[0]
      .buttons.reduce((acc, b, i) => (b.pressed ? acc.concat([i]) : acc), [])
      .some((b) => keyCode.includes(b));
  }

  isDownKeyboard(keyCode) {
    return keyCode.some((key) => this._pressed[key]);
  }

  isDown(keyCode) {
    return (
      this.isDownControllerStick(keyCode.dir) ||
      this.isDownKeyboard(keyCode.keyboard) ||
      this.isDownController(keyCode.controller) ||
      false
    );
  }

  onKeydown(event) {
    this._pressed[event.keyCode] = true;
  }

  onKeyup(event) {
    delete this._pressed[event.keyCode];
  }
}

export default Keyboard;
