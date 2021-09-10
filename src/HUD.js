import { canvasWidth, canvasHeight } from "./constants";
import { humanoid } from "./Sprites";

class HUD {
  constructor() {}

  tick(player, enemies, enemyColor) {
    if (player.weapon) this.weapon = player.weapon.name;
    this.health = player.health;
    this.maxHealth = player.maxHealth;
    this.dead = player.dead;
    this.enemyCount = enemies.enemyCount + enemies.enemies.length;
    this.enemyColor = enemyColor;
  }

  draw(drawer) {
    if (this.dead) return;

    if (this.weapon) {
      drawer.text({
        text: this.weapon,
        size: 1,
        x: 2,
        y: canvasHeight - 11,
      });
    }

    humanoid(canvasWidth - 15, canvasHeight - 13, 1, this.enemyColor, {
      bodyless: true,
    }).forEach(({ c, r }) =>
      drawer.rect({ adjusted: false, fillColor: c, rect: r })
    );

    drawer.text({
      text: `${this.enemyCount}`,
      size: 1,
      x: canvasWidth - 8,
      y: canvasHeight - 11,
    });

    drawer.rect({
      adjusted: false,
      fillColor: `rgb(${255 * (1 - this.health / this.maxHealth)}, ${
        255 * (this.health / this.maxHealth)
      }, 0)`,
      rect: [
        2,
        canvasHeight - 4,
        canvasWidth * (this.health / this.maxHealth) - 4,
        2,
      ],
    });
  }
}

export default HUD;
