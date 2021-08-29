import jsfxr from "jsfxr";

export default class Sound {
  constructor() {
    this.state = {
      engine: false
    };
  }

  engineOn() { }

  engineOff() { }

  playSound(url) {
    let soundUrl = jsfxr(url);

    let player = new Audio();
    player.src = soundUrl;
    player.play();
  }

  mainLaser() {
    this.playSound(
      [2,,0.1749,,0.3063,0.713,0.2,-0.2645,,,,,,0.0543,0.1546,,,,1,,,,,0.5]
    );
  }

  secondaryLaser() {
    this.playSound(
      [2,,0.1426,,0.2251,0.7799,0.2555,-0.2285,,,,,,0.7631,-0.4501,,,,1,,,0.0846,,0.5]
    );
  }

  missile() {
    this.playSound([3,,0.0937,0.571,0.3803,0.7495,,,,,,,,,,,,,1,,,,,0.5]);
  }

  projectileHit() {
    this.playSound([3,,0.0867,,0.2283,0.2711,,-0.6853,,,,,,,,,,,1,,,,,0.5]);
  }

  enemyLaser() {
    this.playSound(
      [0,,0.2934,0.1381,0.2143,0.6919,0.3422,-0.2379,,,,,,0.4281,-0.6711,,,,1,,,0.194,,0.5]
    );
  }
}

