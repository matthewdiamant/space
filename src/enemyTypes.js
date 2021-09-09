import WeaponFactory, { assaultRifle } from "./WeaponFactory";

import { aggro, runAndGun, idiot, pacifist, sentinel } from "./EnemyPersonas";

export const pacifistColors = ["beige", "beige", "red", "red"];
export const defaultColors = ["red", "red", "yellow", "orange"];
export const sentinelColors = ["#50c878", "#50c878", "#a00", "#a00"];

export const makeColors = ([skin, horns, eyes, body]) => ({
  skin,
  horns,
  eyes,
  body,
});

export default {
  aggro: { type: "aggro", health: 25, persona: aggro, colors: defaultColors },
  runAndGun: {
    type: "runAndGun",
    health: 25,
    persona: runAndGun,
    colors: defaultColors,
  },
  idiot: { type: "idiot", health: 25, persona: idiot, colors: defaultColors },
  pacifist: {
    type: "pacifist",
    health: 25,
    persona: pacifist,
    colors: pacifistColors,
  },
  sentinel: {
    type: "sentinel",
    health: 25,
    persona: sentinel,
    colors: sentinelColors,
    weapon: new WeaponFactory().create(assaultRifle),
  },
  boss: {
    type: "boss",
    health: 250,
    persona: sentinel,
    colors: pacifistColors,
  },
};
