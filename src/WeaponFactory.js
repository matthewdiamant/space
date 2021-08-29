import Weapon from "./Weapon";

// base weapons
export const pistol = {
  name: "Pistol",
  cooldown: 10,
  payloadCount: 1,
  knockback: 0,
  projectileConfig: {
    color: () => "#eee",
    speed: 3,
    spreadX: 0,
    spreadY: 0.15,
    damage: 10,
    blood: 5,
  },
};

export const minigun = {
  name: "Minigun",
  cooldown: 2,
  payloadCount: 1,
  knockback: 0.5,
  shake: { force: 1, duration: 1 },
  projectileConfig: {
    color: () => "#fff",
    speed: 4,
    spreadX: 1,
    spreadY: 0.3,
    damage: 2,
    blood: 5,
  },
};

const assaultRifle = {
  name: "Assault Rifle",
  cooldown: 8,
  payloadCount: 1,
  knockback: 0.1,
  projectileConfig: {
    color: () => "#fff",
    speed: 3,
    spreadX: 0,
    spreadY: 0.3,
    damage: 4,
    blood: 5,
  },
};

export const shotgun = {
  name: "Shotgun",
  cooldown: 40,
  payloadCount: 12,
  knockback: 2,
  shake: { force: 2, duration: 8 },
  projectileConfig: {
    color: () => "yellow",
    speed: 4,
    spreadX: 0.7,
    spreadY: 1,
    damage: 1,
    blood: 5,
  },
};

const superShotgun = {};
const sniperRifle = {};
const flameThrower = {};

const grenade = {
  name: "Grenade",
  cooldown: 40,
  payloadCount: 1,
  knockback: 0,
  projectileConfig: {
    emoji: "💣",
    speed: 2,
    lift: 4,
    grav: 0.3,
    explosion: 3,
    size: 3,
    damage: 20,
    blood: 5,
  },
};

// cooldown
const slowCooldown = { cooldown: 2, damage: 2 };
const fastCooldown = { cooldown: 0.5, damage: 0.5 };

const knockback = { knockback: 1 };

const sniper = { cooldown: 3, damage: 5, speed: 2 };

// attributes
const rainbow = {
  prefix: "Rainbow",
  projectileConfig: {
    color: () =>
      ["#FF0000", "#FFAC00", "#FFF100", "#0BFF00", "#00F6FF"][
        Math.floor(Math.random() * 6)
      ],
  },
};

const collosal = {
  prefix: "Collosal",
  cooldownMod: 3,
  projectileConfig: {
    color: () => "yellow",
    damageMod: 3,
    explosion: 5,
    size: 5,
  },
};

const shrimp = {
  prefix: "Shrimp",
  projectileConfig: { emoji: "🍤", explosion: 3, size: 3 },
};
const bomb = {
  prefix: "Bomb",
  projectileConfig: { emoji: "💣", explosion: 3, size: 3 },
};

const attributes = [rainbow, collosal, shrimp, bomb];
const randomAttribute = () =>
  attributes[Math.floor(Math.random() * attributes.length)];

class WeaponFactory {
  constructor() {}

  random() {
    const guns = [pistol, assaultRifle, minigun, shotgun, grenade];
    const base = guns[Math.floor(Math.random() * guns.length)];
    const attribute =
      Math.random() > 0.9 ? randomAttribute() : { projectileConfig: {} };
    const projectileConfig = {
      ...base.projectileConfig,
      ...attribute.projectileConfig,
    };
    const final = {
      ...base,
      ...attribute,
      projectileConfig,
      name: `${attribute.prefix ? `${attribute.prefix} ` : ""}${base.name}`,
    };
    return new Weapon(final);
  }
}

export default WeaponFactory;
