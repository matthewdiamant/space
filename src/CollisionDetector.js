import Blood from "./Blood";
import Character from "./Character";

const collision = (a, b) => {
  return (
    a.x < b.x + b.size &&
    a.x + a.size > b.x &&
    a.y < b.y + b.size &&
    a.y + a.size > b.y
  );
};
export default class CollisionDetector {
  handleProjectile(projectile, object, spurts) {
    if (
      !(projectile.exploding || object.exploding) &&
      object.health > 0 &&
      projectile.owner !== object &&
      collision(projectile, object)
    ) {
      projectile.destroy();
      Character.takeDamage.call(
        object,
        projectile.damage * projectile.damageMod
      );
      for (let i = 0; i < projectile.blood; i++) {
        spurts.add(
          new Blood(
            projectile.x,
            projectile.y,
            (projectile.dx / 3) * Math.random() * 2,
            -1.5 * Math.random(),
            object.bloodColor
          )
        );
      }
      return true;
    } else {
      return false;
    }
  }

  handlePackage(packge, object, packages) {
    if (collision(packge, object)) {
      if (packge.type === "weapon") {
        object.weapon = packge.weapon;
      } else {
        object.health += 200;
        object.health = Math.min(object.maxHealth, object.health);
      }
      packages.packages = packages.packages.filter((p) => p !== packge);
    }
  }
}
