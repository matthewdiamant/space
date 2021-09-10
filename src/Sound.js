import { zzfx } from "zzfx";

// prettier-ignore
let sounds = {
  "death": [2.45,,608,.02,.09,.38,2,1.24,.6,,,,,.3,,.4,.03,.51,.05],
  "gun": [,0,0,,,0,4,0,500,,,,,,,.1,,0,.15],
  "jump": [,,131,.02,.02,.08,,1.49,2.3,,,,,,,,,.9,.1],
  "message": [,0,1740,,.06,.29,,.77,,,,,,,,,,.76,.07,.06],
  "minigun": [,0,0,,,0,4,0,1e8,,,,,,,.04,,0,.08],
  "pickup": [,,548,.08,.36,.47,1,1.79,,,236,.03,.08,,,,,.83],
  "shotgun": [,,300,,,.9,4,.5,,,,,,10,74,.2,,2],
  "sniper": [,,300,,,1.2,4,.5,,,,,,10,74,.1,,2],
  "thrown": [,0,0,,,0,4,0,1e8,,,,,,,.055,,0,.3],
};

export default class Sound {
  play(sound) {
    zzfx(...sounds[sound]);
  }
}
