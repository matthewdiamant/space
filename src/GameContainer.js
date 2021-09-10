let canvas = document.getElementById("c");
export default class GameContainer {
  constructor() {
    this.canvas = canvas;
  }

  initialize() {
    let container = document.querySelector("body");
    let resize = (e) => {
      container.clientWidth / container.clientHeight > 1
        ? (canvas.style.height = "100vh") && (canvas.style.width = "auto")
        : (canvas.style.height = "auto") && (canvas.style.width = "100vw");
    };
    resize();
    container.onresize = resize;
  }
}
