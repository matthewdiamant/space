import WeaponFactory, { assaultRifle } from "./WeaponFactory";

import { aggro, runAndGun, idiot, pacifist, sentinel } from "./EnemyPersonas";

export const sentinelColors = ["#50c878", "#50c878", "#c00", "#a00"];
export const pacifistColors = ["beige", "beige", "red", "red"];
export const idiotColors = ["#c77dff", "#c77dff", "#a1ff0a", "#ff5d8f"];
export const runAndGunColors = ["#4cc9f0", "#4cc9f0", "#f72585", "#4361ee"];
export const aggroColors = ["#dd0", "#dd0", "#09f", "#a30"];
export const bossColors = ["red", "red", "yellow", "orange"];

export const makeColors = ([skin, horns, eyes, body]) => ({
  skin,
  horns,
  eyes,
  body,
});

export default {
  sentinel: {
    type: "sentinel",
    health: 25,
    persona: sentinel,
    colors: sentinelColors,
    weapon: new WeaponFactory().create(assaultRifle),
  },
  pacifist: {
    type: "pacifist",
    health: 25,
    persona: pacifist,
    colors: pacifistColors,
  },
  idiot: { type: "idiot", health: 25, persona: idiot, colors: idiotColors },
  runAndGun: {
    type: "runAndGun",
    health: 25,
    persona: runAndGun,
    colors: runAndGunColors,
  },
  aggro: { type: "aggro", health: 25, persona: aggro, colors: aggroColors },
  boss: {
    type: "boss",
    health: 250,
    persona: sentinel,
    colors: bossColors,
  },
};
