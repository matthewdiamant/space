class Projectile {
  constructor(
    { x, y, facing },
    {
      color,
      speed,
      spreadX = 0,
      spreadY = 0,
      lift = 0,
      grav = 0,
      damage,
      damageMod,
      explosion,
      blood,
      size,
      emoji,
    },
    owner
  ) {
    this.size = size || 1;
    this.x = x - this.size / 2;
    this.y = y;
    this.dx = facing * speed + (Math.random() - spreadX / 2) * spreadX;
    this.dy = (Math.random() - spreadY / 2) * spreadY - lift;
    this.grav = grav;
    this.color = color;
    this.explosion = explosion || 1;
    this.lifespan = 0;
    this.shouldDie = false;
    this.exploding = false;
    this.lifeleft = null;
    this.damage = damage;
    this.damageMod = damageMod || 1;
    this.blood = blood;
    this.facing = facing;
    this.emoji = emoji;
    this.owner = owner;
  }

  destroy() {
    this.exploding = true;
    this.lifeleft = 2;
  }

  tick() {
    this.lifespan += 1;
    if (this.lifeleft) {
      this.lifeleft -= 1;
      if (this.lifeleft === 0) this.shouldDie = true;
    }
    if (this.exploding) return;

    this.x += this.dx;
    this.dy += this.grav;
    this.y += this.dy;
  }

  draw(drawer) {
    if (this.exploding) {
      drawer.arc({
        arc: [
          this.x,
          this.y,
          (2 / this.lifeleft) * this.explosion,
          0,
          2 * Math.PI,
        ],
        fillColor: "#ff8",
        shadowBlur: 10,
        shadowColor: "#ff0",
      });
    } else {
      if (this.emoji) {
        drawer.emoji({
          x: this.x,
          y: this.y,
          emoji: this.emoji,
          flipped: this.facing === -1,
        });
      } else if (this.size === 1) {
        drawer.rect({
          fillColor: this.color(),
          rect: [this.x, this.y, this.size, this.size],
        });
      } else {
        drawer.arc({
          arc: [this.x, this.y, this.size, 0, 2 * Math.PI],
          fillColor: this.color(),
          shadowBlur: this.size,
          shadowColor: "#ff0",
        });
      }
    }
  }
}

export default Projectile;
