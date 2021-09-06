import { humanoid } from "./Sprites";

class HUD {
  constructor() {}

  tick(player, enemies) {
    if (player.weapon) this.weapon = player.weapon.name;
    this.health = player.health;
    this.maxHealth = player.maxHealth;
    this.enemyCount = enemies.enemyCount + enemies.enemies.length;
  }

  draw(drawer) {
    if (this.weapon) {
      drawer.text({
        text: this.weapon,
        size: 1,
        x: 2,
        y: 117,
      });
    }

    const colors = {
      skin: "red",
      horns: "red",
      eyes: "yellow",
      body: "orange",
    };

    humanoid(113, 115, 1, colors, { bodyless: true }).forEach(({ c, r }) =>
      drawer.rect({ adjusted: false, fillColor: c, rect: r })
    );

    drawer.text({
      text: `${this.enemyCount}`,
      size: 1,
      x: 120,
      y: 117,
    });

    drawer.rect({
      adjusted: false,
      fillColor: `rgb(${255 * (1 - this.health / this.maxHealth)}, ${
        255 * (this.health / this.maxHealth)
      }, 0)`,
      rect: [2, 124, 124 * (this.health / this.maxHealth), 2],
    });
  }
}

export default HUD;
