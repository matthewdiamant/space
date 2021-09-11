import Weapon from "./Weapon";

// base weapons
export const debugPistol = {
  name: "Debug Pistol",
  cooldown: 2,
  payloadCount: 1,
  knockback: 0,
  shake: { force: 1, duration: 2 },
  sound: "minigun",
  projectileConfig: {
    color: () => "#eee",
    speed: 3,
    spreadX: 1,
    spreadY: 0.3,
    damage: 100,
    blood: 5,
  },
};

export const pistol = {
  name: "Pistol",
  cooldown: 10,
  payloadCount: 1,
  knockback: 0,
  sound: "gun",
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
  knockback: 0.2,
  shake: { force: 1, duration: 2 },
  sound: "minigun",
  projectileConfig: {
    color: () => "#fff",
    speed: 4,
    spreadX: 1,
    spreadY: 0.3,
    damage: 2,
    blood: 5,
  },
};

export const assaultRifle = {
  name: "Assault Rifle",
  cooldown: 8,
  payloadCount: 1,
  knockback: 0.1,
  sound: "gun",
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
  cooldown: 30,
  payloadCount: 12,
  knockback: 1,
  shake: { force: 2, duration: 8 },
  sound: "shotgun",
  projectileConfig: {
    color: () => "yellow",
    speed: 4,
    spreadX: 0.7,
    spreadY: 1,
    damage: 1,
    blood: 5,
  },
};

const superShotgun = {
  name: "Super Shotgun",
  cooldown: 60,
  payloadCount: 24,
  knockback: 2,
  shake: { force: 3, duration: 8 },
  sound: "shotgun",
  projectileConfig: {
    color: () => "yellow",
    speed: 4,
    spreadX: 1,
    spreadY: 1.5,
    damage: 1,
    blood: 5,
  },
};

export const sniperRifle = {
  name: "sniper rifle",
  cooldown: 60,
  payloadCount: 1,
  knockback: 2,
  shake: { force: 3, duration: 8 },
  sound: "sniper",
  projectileConfig: {
    color: () => "#eee",
    speed: 6,
    spreadX: 0,
    spreadY: 0,
    damage: 22,
    blood: 50,
  },
};

const flameThrower = {};

export const grenade = {
  name: "Grenade",
  cooldown: 40,
  payloadCount: 1,
  knockback: 0,
  sound: "thrown",
  projectileConfig: {
    emoji: "💣",
    speed: 3,
    lift: 1.5,
    grav: 0.1,
    explosion: 3,
    size: 3,
    damage: 12,
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

  create(base) {
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

  random() {
    const guns = [
      pistol,
      assaultRifle,
      minigun,
      shotgun,
      superShotgun,
      sniperRifle,
      grenade,
    ];
    // const guns = [sniperRifle];
    const base = guns[Math.floor(Math.random() * guns.length)];
    return this.create(base);
  }
}

export default WeaponFactory;
