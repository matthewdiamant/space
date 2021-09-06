import Projectile from "./Projectile";

class Weapon {
  constructor({
    name,
    cooldown,
    cooldownMod = 1,
    payloadCount,
    knockback,
    shake,
    projectileConfig,
  }) {
    this.name = name;
    this.cooldown = cooldown;
    this.cooldownMod = cooldownMod;
    this.payloadCount = payloadCount;
    this.knockback = knockback;
    this.shake = shake;
    this.projectileConfig = projectileConfig;

    this.ticksSinceLastFired = cooldown;
  }

  tick(pressSpace, projectiles, location, camera, sound) {
    this.ticksSinceLastFired += 1;
    if (
      this.cooldown * this.cooldownMod < this.ticksSinceLastFired &&
      pressSpace
    ) {
      this.fire(projectiles, location);
      sound.gun();
      if (this.shake) camera.shake(this.shake.force, this.shake.duration);
      return this.knockback;
    }
    return 0;
  }

  fire(projectiles, location) {
    this.ticksSinceLastFired = 0;
    for (let i = 0; i < this.payloadCount; i++) {
      const p = new Projectile(location, this.projectileConfig);
      projectiles.add(p);
    }
  }
}

export default Weapon;
