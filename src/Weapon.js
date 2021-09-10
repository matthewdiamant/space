import Projectile from "./Projectile";

class Weapon {
  constructor({
    name,
    cooldown,
    cooldownMod = 1,
    payloadCount,
    knockback,
    shake,
    sound,
    projectileConfig,
  }) {
    this.name = name;
    this.cooldown = cooldown;
    this.cooldownMod = cooldownMod;
    this.payloadCount = payloadCount;
    this.knockback = knockback;
    this.shake = shake;
    this.sound = sound;
    this.projectileConfig = projectileConfig;

    this.ticksSinceLastFired = cooldown;
    this.shooting = false;
  }

  tick(pressSpace, projectiles, location, camera, sound, volume, owner) {
    this.ticksSinceLastFired += 1;
    this.shooting = false;
    if (
      this.cooldown * this.cooldownMod < this.ticksSinceLastFired &&
      pressSpace
    ) {
      this.fire(projectiles, location, owner);
      sound.play(this.sound, volume);
      if (this.shake) camera.shake(this.shake.force, this.shake.duration);
      this.shooting = true;
      return this.knockback;
    }
    return 0;
  }

  fire(projectiles, location, owner) {
    this.ticksSinceLastFired = 0;
    for (let i = 0; i < this.payloadCount; i++) {
      const p = new Projectile(location, this.projectileConfig, owner);
      projectiles.add(p);
    }
  }

  draw(drawer, character) {
    if (this.shooting) {
      // prettier-ignore
      [
        [character.x + (character.facing === 1 ? 8 : -1), character.y + 3, 1, 1],
        [character.x + (character.facing === 1 ? 7 : 0), character.y + 4, 2, 3],
      ].forEach(([x, y, dx, dy]) =>
        drawer.rect({
          fillColor: "yellow",
          rect: [x, y, dx, dy],
        })
      );

      // prettier-ignore
      [
        [character.x + (character.facing === 1 ? 8 : -1), character.y + 4, 2, 2],
        [character.x + (character.facing === 1 ? 10 : -3), character.y + 4, 1, 1],
      ].forEach(([x, y, dx, dy]) =>
        drawer.rect({
          fillColor: "white",
          rect: [x, y, dx, dy],
        })
      );
    }
  }
}

export default Weapon;
