import Enemy from "./enemy";

const colors = {
  skin: "red",
  horns: "red",
  eyes: "yellow",
  body: "orange",
};

class Level {
  constructor() {
    this.level = 1;
  }

  tick({ enemies }) {
    if (enemies.enemies.length < 3) {
      enemies.enemies.push(new Enemy(249, 20, 100, -1, colors));
    }
  }
}

export default Level;
