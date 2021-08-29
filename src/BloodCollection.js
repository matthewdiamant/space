class BloodCollection {
  constructor() {
    this.spurts = [];
  }

  add(blood) {
    this.spurts.push(blood);
  }

  tick() {
    if (this.spurts.length > 1000) {
      this.spurts = this.spurts.slice(this.spurts.length - 1000);
    }
    this.spurts.forEach((s) => s.tick());
  }

  draw(drawer) {
    this.spurts.forEach((s) => s.draw(drawer));
  }
}

export default BloodCollection;
