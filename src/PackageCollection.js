import Package from "./Package";

class PackageCollection {
  constructor() {
    this.packages = [new Package(138, 20)];
    this.lifespan = 0;
  }

  tick(map, level) {
    if (level === 1) return;
    this.lifespan += 1;
    if (!(this.lifespan % 500)) {
      let x = Math.random() * map.mapWidthPixels;
      let y = Math.random() * map.mapHeightPixels;
      while (map.getTile(x, y)) {
        x = Math.random() * map.mapWidthPixels;
        y = Math.random() * map.mapHeightPixels;
      }
      this.packages.push(new Package(x, y));
    }
    this.packages.forEach((p) => p.tick());
  }

  draw(drawer) {
    this.packages.forEach((p) => p.draw(drawer));
  }
}

export default PackageCollection;
