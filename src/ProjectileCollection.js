class ProjectileCollection {
  constructor() {
    this.projectiles = [];
  }

  add(p) {
    this.projectiles.push(p);
  }

  tick() {
    this.projectiles.map((p) => p.tick());
    this.projectiles = this.projectiles.filter((p) => !p.shouldDie);
  }

  draw(drawer) {
    this.projectiles.map((p) => p.draw(drawer));
  }
}

export default ProjectileCollection;
