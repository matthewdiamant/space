class HUD {
  constructor() {}

  tick(player) {
    this.weapon = player.weapon.name;
    this.health = player.health;
    this.maxHealth = player.maxHealth;
  }

  draw(drawer) {
    drawer.text({
      text: this.weapon,
      size: 1,
      x: 2,
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
