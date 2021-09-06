import { zzfx } from "zzfx";

// prettier-ignore
let sounds = {
  "gun": [,,131,.02,.02,.08,,1.49,2.3,,,,,,,,,.9,.1],
  "jump": [,,131,.02,.02,.08,,1.49,2.3,,,,,,,,,.9,.1],
  "minigun": [,0,0,,,0,4,0,1e8,,,,,,,.04,,0,.08],
  "shotgun": [,0,0,,,0,4,0,1e8,,,,,,,.055,,0,.3],
  "thrown": [,0,0,,,0,4,0,1e8,,,,,,,.055,,0,.3],
};

export default class Sound {
  play(sound) {
    zzfx(...sounds[sound]);
  }
}
