export default class GameObject {
  constructor({ x, y, maxDx, maxDy, grav }) {
    this.x = x;
    this.y = y;
    this.dx = 0;
    this.dy = 0;
    this.maxDx = maxDx;
    this.maxDy = maxDy;
    this.grav = grav;
  }
}
