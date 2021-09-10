import WeaponFactory, { assaultRifle } from "./WeaponFactory";

import { aggro, runAndGun, idiot, pacifist, sentinel } from "./EnemyPersonas";

export const makeColors = ([skin, horns, eyes, body]) => ({
  skin,
  horns,
  eyes,
  body,
});

// prettier-ignore
export const sentinelColors = makeColors(["#50c878", "#50c878", "#c00", "#a00"]);
export const pacifistColors = makeColors(["beige", "beige", "red", "red"]);
// prettier-ignore
export const idiotColors = makeColors(["#919", "#919", "#be0", "#f58"]);
// prettier-ignore
export const runAndGunColors = makeColors(["#4cc9f0", "#4cc9f0", "#f72585", "#4361ee"]);
export const aggroColors = makeColors(["#dd0", "#dd0", "#09f", "#a30"]);
export const bossColors = makeColors(["#a00", "#a00", "yellow", "#a60"]);

export default {
  sentinel: {
    type: "sentinel",
    health: 22,
    persona: sentinel,
    colors: sentinelColors,
    weapon: new WeaponFactory().create(assaultRifle),
  },
  pacifist: {
    type: "pacifist",
    health: 22,
    persona: pacifist,
    colors: pacifistColors,
  },
  idiot: { type: "idiot", health: 22, persona: idiot, colors: idiotColors },
  runAndGun: {
    type: "runAndGun",
    health: 22,
    persona: runAndGun,
    colors: runAndGunColors,
  },
  aggro: { type: "aggro", health: 22, persona: aggro, colors: aggroColors },
  boss: {
    type: "boss",
    health: 400,
    persona: sentinel,
    colors: bossColors,
  },
};
