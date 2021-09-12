import Package from "./Package";

class PackageCollection {
  constructor() {
    this.packages = [];
    this.lifespan = 0;
  }

  tick(map, level) {
    this.lifespan += 1;
    if (!(this.lifespan % 500) && level !== 1) {
      let x = Math.random() * map.mapWidthPixels;
      let y = Math.random() * map.mapHeightPixels;
      while (map.getTile(x, y + 1)) {
        x = Math.random() * map.mapWidthPixels;
        y = Math.random() * map.mapHeightPixels;
      }
      this.packages.push(new Package(x, y, null, level));
    }
    this.packages.forEach((p) => p.tick());
  }

  draw(drawer) {
    this.packages.forEach((p) => p.draw(drawer));
  }
}

export default PackageCollection;
