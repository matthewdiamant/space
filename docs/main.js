/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/worker-loader/dist/workers/InlineWorker.js":
/*!*****************************************************************!*\
  !*** ./node_modules/worker-loader/dist/workers/InlineWorker.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://stackoverflow.com/questions/10343913/how-to-create-a-web-worker-from-a-string

var URL = window.URL || window.webkitURL;

module.exports = function (content, url) {
  try {
    try {
      var blob;

      try {
        // BlobBuilder = Deprecated, but widely implemented
        var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;

        blob = new BlobBuilder();

        blob.append(content);

        blob = blob.getBlob();
      } catch (e) {
        // The proposed API
        blob = new Blob([content]);
      }

      return new Worker(URL.createObjectURL(blob));
    } catch (e) {
      return new Worker('data:application/javascript,' + encodeURIComponent(content));
    }
  } catch (e) {
    if (!url) {
      throw Error('Inline worker is not supported');
    }

    return new Worker(url);
  }
};

/***/ }),

/***/ "./node_modules/zzfx/ZzFX.js":
/*!***********************************!*\
  !*** ./node_modules/zzfx/ZzFX.js ***!
  \***********************************/
/*! exports provided: zzfx, ZZFX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zzfx", function() { return zzfx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZZFX", function() { return ZZFX; });
/*

ZzFX - Zuper Zmall Zound Zynth v1.1.8
By Frank Force 2019
https://github.com/KilledByAPixel/ZzFX

ZzFX Features

- Tiny synth engine with 20 controllable parameters.
- Play sounds via code, no need for sound assed files!
- Compatible with most modern web browsers.
- Small code footprint, the micro version is under 1 kilobyte.
- Can produce a huge variety of sound effect types.
- Sounds can be played with a short call. zzfx(...[,,,,.1,,,,9])
- A small bit of randomness appied to sounds when played.
- Use ZZFX.GetNote to get frequencies on a standard diatonic scale.
- Sounds can be saved out as wav files for offline playback.
- No additional libraries or dependencies are required.

*/
/*

  ZzFX MIT License
  
  Copyright (c) 2019 - Frank Force
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
  
*/



// play a zzfx sound
function zzfx(...parameters) { return ZZFX.play(...parameters) }

// zzfx object with some extra functionalty
const ZZFX =
{
    // master volume scale
    volume: .3,
    
    // sample rate for audio
    sampleRate: 44100,
    
    // create shared audio context
    x: new (window.AudioContext || webkitAudioContext),

    // play a sound from zzfx paramerters
    play: function(...parameters)
    {
        // build samples and start sound
        return this.playSamples(this.buildSamples(...parameters));
    },

    // play an array of samples
    playSamples: function(...samples)
    {
        // create buffer and source
        const buffer = this.x.createBuffer(samples.length, samples[0].length, this.sampleRate);
        const source = this.x.createBufferSource();

        samples.map((d,i)=> buffer.getChannelData(i).set(d));
        source.buffer = buffer;
        source.connect(this.x.destination);
        source.start();
        return source;
    },

    // build an array of samples
    buildSamples: function
    (
        volume = 1, 
        randomness = .05,
        frequency = 220,
        attack = 0,
        sustain = 0,
        release = .1,
        shape = 0,
        shapeCurve = 1,
        slide = 0, 
        deltaSlide = 0, 
        pitchJump = 0, 
        pitchJumpTime = 0, 
        repeatTime = 0, 
        noise = 0,
        modulation = 0,
        bitCrush = 0,
        delay = 0,
        sustainVolume = 1,
        decay = 0,
        tremolo = 0
    )
    {
        // init parameters
        const PI2 = Math.PI*2;
        let sampleRate = this.sampleRate,
        sign = v => v>0?1:-1,
        startSlide = slide *= 500 * PI2 / sampleRate / sampleRate,
        startFrequency = 
            frequency *= (1 + randomness*2*Math.random() - randomness) * PI2 / sampleRate,
        b=[], t=0, tm=0, i=0, j=1, r=0, c=0, s=0, f, length;

        // scale by sample rate
        attack = attack * sampleRate + 9; // minimum attack to prevent pop
        decay *= sampleRate;
        sustain *= sampleRate;
        release *= sampleRate;
        delay *= sampleRate;
        deltaSlide *= 500 * PI2 / sampleRate**3;
        modulation *= PI2 / sampleRate;
        pitchJump *= PI2 / sampleRate;
        pitchJumpTime *= sampleRate;
        repeatTime = repeatTime * sampleRate | 0;

        // generate waveform
        for(length = attack + decay + sustain + release + delay | 0;
            i < length; b[i++] = s)
        {
            if (!(++c%(bitCrush*100|0)))                      // bit crush
            { 
                s = shape? shape>1? shape>2? shape>3?         // wave shape
                    Math.sin((t%PI2)**3) :                    // 4 noise
                    Math.max(Math.min(Math.tan(t),1),-1):     // 3 tan
                    1-(2*t/PI2%2+2)%2:                        // 2 saw
                    1-4*Math.abs(Math.round(t/PI2)-t/PI2):    // 1 triangle
                    Math.sin(t);                              // 0 sin

                s = (repeatTime ?
                        1 - tremolo + tremolo*Math.sin(PI2*i/repeatTime) // tremolo
                        : 1) *
                    sign(s)*(Math.abs(s)**shapeCurve) *       // curve 0=square, 2=pointy
                    volume * this.volume * (                  // envelope
                    i < attack ? i/attack :                   // attack
                    i < attack + decay ?                      // decay
                    1-((i-attack)/decay)*(1-sustainVolume) :  // decay falloff
                    i < attack  + decay + sustain ?           // sustain
                    sustainVolume :                           // sustain volume
                    i < length - delay ?                      // release
                    (length - i - delay)/release *            // release falloff
                    sustainVolume :                           // release volume
                    0);                                       // post release

                s = delay ? s/2 + (delay > i ? 0 :            // delay
                    (i<length-delay? 1 : (length-i)/delay) *  // release delay 
                    b[i-delay|0]/2) : s;                      // sample delay
            }

            f = (frequency += slide += deltaSlide) *          // frequency
                Math.cos(modulation*tm++);                    // modulation
            t += f - f*noise*(1 - (Math.sin(i)+1)*1e9%2);     // noise

            if (j && ++j > pitchJumpTime)       // pitch jump
            {
                frequency += pitchJump;         // apply pitch jump
                startFrequency += pitchJump;    // also apply to start
                j = 0;                          // stop pitch jump time
            }

            if (repeatTime && !(++r % repeatTime)) // repeat
            {
                frequency = startFrequency;     // reset frequency
                slide = startSlide;             // reset slide
                j = j || 1;                     // reset pitch jump time
            }
        }

        return b;
    },
    
    // get frequency of a musical note on a diatonic scale
    getNote: function(semitoneOffset=0, rootNoteFrequency=440)
    {
        return rootNoteFrequency * 2**(semitoneOffset/12);
    }

} // ZZFX

/***/ }),

/***/ "./src/Background.js":
/*!***************************!*\
  !*** ./src/Background.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Background; });
let nearStars = [];
let farStars = [];

function mod(n, m) {
  return ((n % m) + m) % m;
}

class Background {
  constructor({ cw, ch }) {
    for (let i = 0; i < 10; i++)
      nearStars.push([Math.random() * cw, Math.random() * ch, Math.random()]);
    for (let i = 0; i < 10; i++)
      farStars.push([Math.random() * cw, Math.random() * ch, Math.random()]);
  }

  draw(drawer) {
    const [top, bottom] = this.colors;
    drawer.draw(() => {
      drawer.drawBackground(top, bottom);
      nearStars.map((star) =>
        drawer.rect({
          rect: [
            mod(
              star[0] - drawer.camera.x / (3 + 3 * star[2]),
              drawer.canvas.width
            ),
            mod(
              star[1] - drawer.camera.y / (3 + 3 * star[2]),
              drawer.canvas.height
            ),
            1,
            1,
          ],
          fillColor: "rgba(255, 255, 255, 0.6)",
          adjusted: false,
        })
      );
      farStars.map((star) =>
        drawer.rect({
          rect: [
            mod(
              star[0] - drawer.camera.x / (7 + 3 * star[2]),
              drawer.canvas.width
            ),
            mod(
              star[1] - drawer.camera.y / (7 + 3 * star[2]),
              drawer.canvas.height
            ),
            1,
            1,
          ],
          fillColor: "rgba(255, 255, 255, 0.3)",
          adjusted: false,
        })
      );

      const planets = [
        [100, 30, 1, 10, "#440"],
        [30, 50, 1, 4, "#311"],
      ];
      planets.forEach((planet) => {
        drawer.arc({
          adjusted: false,
          arc: [
            mod(
              planet[0] - drawer.camera.x / (7 + 3 * planet[2]),
              drawer.canvas.width
            ),
            mod(
              planet[1] - drawer.camera.y / (7 + 3 * planet[2]),
              drawer.canvas.height
            ),
            planet[3],
            0,
            2 * Math.PI,
          ],
          fillColor: planet[4],
        });
      });
    });
  }
}


/***/ }),

/***/ "./src/Blood.js":
/*!**********************!*\
  !*** ./src/Blood.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject */ "./src/GameObject.js");


class Blood extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(x, y, dx, dy, color) {
    super({ x, y, grav: 0.1 });
    this.dx = dx;
    this.dy = dy;
    this.color = color;
    this.stuck = false;
  }

  stick() {
    this.stuck = true;
  }

  tick() {
    if (this.stuck) return;
    this.x += this.dx;
    this.dy += this.grav;
    this.y += this.dy;
  }

  draw(drawer) {
    drawer.rect({
      fillColor: this.color,
      rect: [this.x, this.y, 1, 1],
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Blood);


/***/ }),

/***/ "./src/BloodChunk.js":
/*!***************************!*\
  !*** ./src/BloodChunk.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject */ "./src/GameObject.js");


class BloodChunk extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(x, y, dx, dy, color) {
    super({ x, y });
    this.dx = dx;
    this.dy = dy;
    this.grav = 0.1;
    this.color = color;
    this.stuck = false;
  }

  stick() {
    this.stuck = true;
  }

  tick() {
    if (this.stuck) return;
    this.x += this.dx;
    this.dy += this.grav;
    this.y += this.dy;
  }

  draw(drawer) {
    drawer.rect({
      fillColor: this.color,
      rect: [this.x, this.y - 2, 2, 3],
    });

    [
      [1, 2],
      [2, 3],
    ].forEach(([x, y]) => {
      drawer.rect({
        fillColor: this.color,
        rect: [this.x + x - 2, this.y + y - 2, 1, 1],
      });
    });

    [
      [2, 0],
      [1, 1],
      [0, 2],
      [1, 3],
    ].forEach(([x, y]) => {
      drawer.rect({
        fillColor: "#FF77A8",
        rect: [this.x + x - 2, this.y + y - 2, 1, 1],
      });
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (BloodChunk);


/***/ }),

/***/ "./src/BloodCollection.js":
/*!********************************!*\
  !*** ./src/BloodCollection.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class BloodCollection {
  constructor() {
    this.spurts = [];
  }

  add(blood) {
    this.spurts.push(blood);
  }

  tick() {
    if (this.spurts.length > 1000) {
      this.spurts = this.spurts.slice(this.spurts.length - 1000);
    }
    this.spurts.forEach((s) => s.tick());
  }

  draw(drawer) {
    this.spurts.forEach((s) => s.draw(drawer));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (BloodCollection);


/***/ }),

/***/ "./src/Camera.js":
/*!***********************!*\
  !*** ./src/Camera.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const pullThreshold = 16;
const HUDSize = 15;

class Camera {
  constructor() {
    this.x = 0;
    this.y = 128;
    this.position_x = 0;
    this.position_y = 128;
    this.shakeRemaining = 0;
    this.shakeForce = 0;
  }

  adjustX(x, width) {
    return x - this.x + width / 2;
  }

  adjustY(y, height) {
    return y - this.y + height / 2;
  }

  clampX(map) {
    this.position_x = Math.round(
      Math.min(
        Math.max(8 * map.tileSize, this.position_x),
        (map.mapLength - 8) * map.tileSize
      )
    );
  }

  clampY(map) {
    this.position_y = Math.round(
      Math.min(
        Math.max(8 * map.tileSize, this.position_y),
        (map.mapHeight - 8) * map.tileSize + HUDSize
      )
    );
  }

  followSubject(subject) {
    if (subject.x - this.position_x > pullThreshold) {
      this.position_x = subject.x - pullThreshold;
    }
    if (subject.x - this.position_x < -pullThreshold) {
      this.position_x = subject.x + pullThreshold;
    }
    if (subject.y - this.position_y > pullThreshold) {
      this.position_y = subject.y - pullThreshold;
    }
    if (subject.y - this.position_y < -pullThreshold) {
      this.position_y = subject.y + pullThreshold;
    }
  }

  shake(force, duration) {
    this.shakeRemaining = duration;
    this.shakeForce = force;
  }

  applyShake() {
    this.shakeRemaining = Math.max(0, this.shakeRemaining - 1);
    if (!this.shakeRemaining) return;
    const shakeX = Math.random() * this.shakeForce * 2 - this.shakeForce;
    const shakeY = Math.random() * this.shakeForce * 2 - this.shakeForce;
    this.x += shakeX;
    this.y += shakeY;
  }

  tick({ player, map }) {
    this.followSubject(player, map);
    this.clampX(map);
    this.clampY(map);
    this.x = this.position_x;
    this.y = this.position_y;
    this.applyShake();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Camera);


/***/ }),

/***/ "./src/Character.js":
/*!**************************!*\
  !*** ./src/Character.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject */ "./src/GameObject.js");
/* harmony import */ var _WeaponFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WeaponFactory */ "./src/WeaponFactory.js");



const clamp = (num, min, max) => Math.min(Math.max(min, num), max);

const offset = 1;

const collideSide = (player, map) => {
  let { x, y, dx, size } = player;

  if (dx > 0) {
    const rightTopTileType = map.getTile(x + size, y);
    const rightBottomTileType = map.getTile(x + size, y + size - offset);
    if (rightTopTileType || rightBottomTileType) {
      player.dx = 0;
      player.x = Math.floor(x / 8) * 8;
    }
  } else if (dx < 0) {
    const leftTopTileType = map.getTile(x, y);
    const leftBottomTileType = map.getTile(x, y + size - offset);
    if (leftTopTileType || leftBottomTileType) {
      player.dx = 0;
      player.x = Math.floor(x / 8) * 8 + 8;
    }
  }
};

const collideFloor = (player, map) => {
  const { x, y, dy, size } = player;

  if (dy < 0) return false;

  const leftBottomTileType = map.getTile(x, y + size);
  const rightBottomTileType = map.getTile(x + size - offset, y + size);

  if (leftBottomTileType || rightBottomTileType) {
    player.dy = 0;
    player.y = Math.floor(y / 8) * 8;
    player.grounded = true;
    player.airtime = 0;
    return true;
  } else {
    return false;
  }
};

const collideRoof = (player, map) => {
  const { x, y, size } = player;
  const leftTopTileType = map.getTile(x, y);
  const rightTopTileType = map.getTile(x + size - offset, y);

  if (leftTopTileType || rightTopTileType) {
    player.dy = 0;
    player.y = Math.floor((y - size / 2) / 8) * 8 + 8 + size / 2;
    player.jumpHoldTime = 0;
  }
};

class Character extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(x, y, health, facing, weapon) {
    super({ x, y, maxDx: 1, maxDy: 2, grav: 0.15 });
    this.size = 8;
    this.acc = 0.05;
    this.dcc = 0.8;
    this.airDcc = 1;
    this.grounded = true;
    this.facing = facing || 1;
    this.lifespan = 0;

    // jumping
    this.holdJump = 0;
    this.airtime = 0;
    this.jumpHoldTime = 0;
    this.jumpSpeed = 2;
    this.maxJumpPress = 12;

    this.health = health;
    this.maxHealth = health;

    this.weapon = weapon || new _WeaponFactory__WEBPACK_IMPORTED_MODULE_1__["default"]().random();
  }

  static tick({ camera, map, projectiles, presses, immobile, sound }) {
    this.lifespan += 1;

    const { left, right, up, space } = presses;
    this.holdJump = up ? this.holdJump + 1 : 0;

    const weaponLocation = {
      x: this.x + (this.facing === 1 ? this.size - 1 : 1),
      y: this.y + 5,
      facing: this.facing,
    };

    let knockback = 0;
    if (this.weapon) {
      knockback = this.weapon.tick(
        space,
        projectiles,
        weaponLocation,
        camera,
        sound
      );
    }

    // move x
    if (left) {
      this.dx -= this.acc;
      this.facing = -1;
    } else if (right) {
      this.dx += this.acc;
      this.facing = 1;
    } else {
      if (this.grounded) {
        this.dx *= this.dcc;
      } else {
        this.dx *= this.airDcc;
      }
    }
    if (Math.abs(this.dx) < 0.01) this.dx = 0;
    this.dx = clamp(this.dx, -this.maxDx, this.maxDx);
    this.dx += knockback * -this.facing;
    this.x += immobile ? 0 : this.dx;

    // hit walls
    collideSide(this, map);

    // jumping
    if (up) {
      const onGround = this.grounded || this.airtime < 5;
      const newJump = this.holdJump < 10;
      if (this.jumpHoldTime > 0 || (onGround && newJump)) {
        if (this.grounded) sound.play("jump");
        this.jumpHoldTime += 1;
        if (this.jumpHoldTime < this.maxJumpPress) {
          this.dy = -this.jumpSpeed;
        }
      }
    } else {
      this.jumpHoldTime = 0;
    }

    // move y
    this.dy += this.grav;
    this.dy = clamp(this.dy, -this.maxDy, this.maxDy);
    this.y += this.dy;

    if (!collideFloor(this, map)) {
      this.grounded = false;
      this.airtime += 1;
    }

    collideRoof(this, map);
  }

  static takeDamage(damage) {
    this.health -= damage;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Character);


/***/ }),

/***/ "./src/CollisionDetector.js":
/*!**********************************!*\
  !*** ./src/CollisionDetector.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CollisionDetector; });
/* harmony import */ var _Blood__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blood */ "./src/Blood.js");
/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Character */ "./src/Character.js");



const collision = (a, b) => {
  return (
    a.x < b.x + b.size &&
    a.x + a.size > b.x &&
    a.y < b.y + b.size &&
    a.y + a.size > b.y
  );
};
class CollisionDetector {
  handleProjectile(projectile, object, spurts) {
    if (
      !(projectile.exploding || object.exploding) &&
      object.health > 0 &&
      collision(projectile, object)
    ) {
      projectile.destroy();
      _Character__WEBPACK_IMPORTED_MODULE_1__["default"].takeDamage.call(
        object,
        projectile.damage * projectile.damageMod
      );
      for (let i = 0; i < projectile.blood; i++) {
        spurts.add(
          new _Blood__WEBPACK_IMPORTED_MODULE_0__["default"](
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


/***/ }),

/***/ "./src/Drawer.js":
/*!***********************!*\
  !*** ./src/Drawer.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Drawer; });
/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Camera */ "./src/Camera.js");


let cx = null;

class Drawer {
  constructor(canvas) {
    this.canvas = canvas;
    cx = this.canvas.getContext("2d");
    this.camera = new _Camera__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  draw(d) {
    cx.save();
    d();
    cx.restore();
  }

  clearBackground() {
    cx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawBackground(start, end) {
    cx.save();
    var gradient = cx.createLinearGradient(20, 0, 220, 0);

    gradient.addColorStop(0, start);
    gradient.addColorStop(1, end);

    cx.rotate(Math.PI / 2);
    cx.translate(0, -this.canvas.height);

    cx.fillStyle = gradient;

    cx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    cx.restore();
  }

  rect({
    rect,
    fillColor,
    strokeColor,
    shadowBlur = 0,
    shadowColor = "none",
    lineWidth = 1,
    adjusted = true,
    rotation,
    size,
    crisp = true,
  }) {
    if (crisp) {
      rect[0] = Math.floor(rect[0]);
      rect[1] = Math.floor(rect[1]);
    }
    if (adjusted) {
      rect[0] = this.camera.adjustX(rect[0], this.canvas.width);
      rect[1] = this.camera.adjustY(rect[1], this.canvas.height);
    }
    if (rotation) {
      cx.translate(rect[0] + size / 2, rect[1] + size / 2);
      cx.rotate(rotation);
      cx.translate(-1 * rect[0] - size / 2, -1 * rect[1] - size / 2);
    }
    cx.shadowBlur = shadowBlur;
    cx.shadowColor = shadowColor;
    if (fillColor) {
      cx.fillStyle = fillColor;
      cx.fillRect(...[rect[0], rect[1], ...rect.slice(2)]);
    }
    if (strokeColor) {
      cx.strokeStyle = strokeColor;
      cx.lineWidth = lineWidth;
      cx.strokeRect(...[rect[0], rect[1], ...rect.slice(2)]);
    }
    cx.shadowBlur = 0;
  }

  arc({
    arc,
    adjusted = true,
    fillColor,
    strokeColor,
    shadowBlur,
    shadowColor,
  }) {
    if (adjusted) {
      arc[0] = this.camera.adjustX(arc[0], this.canvas.width);
      arc[1] = this.camera.adjustY(arc[1], this.canvas.height);
    }
    cx.beginPath();
    cx.arc(...arc);
    cx.shadowBlur = shadowBlur;
    cx.shadowColor = shadowColor;
    if (fillColor) {
      cx.fillStyle = fillColor;
      cx.fill();
    }
    if (strokeColor) {
      cx.strokeStyle = strokeColor;
      cx.stroke();
    }
    cx.shadowBlur = 0;
  }

  text({ text, x, y, fillColor = "#fff", size = 1 }) {
    cx.fillStyle = fillColor;

    let currX = 0;

    text
      .toUpperCase()
      .split("")
      .map((c) => {
        if (!letters[c]) console.log(c);
        return letters[c];
      })
      .forEach((letter) => {
        let currY = 0;
        let addX = 0;
        letter.forEach((row) => {
          row.forEach((bit, i) => {
            bit && cx.fillRect(currX + i * size + x, currY + y, size, size);
          });
          addX = Math.max(addX, row.length * size);
          currY += size;
        });
        currX += size + addX;
      });
  }

  lines({
    lines,
    shadowBlur = 0,
    shadowColor,
    rotation,
    x,
    y,
    fillColor,
    strokeColor,
  }) {
    if (rotation) {
      cx.translate(
        this.camera.adjustX(x, this.canvas.width),
        this.camera.adjustY(y, this.canvas.height)
      );
      cx.rotate(rotation);
      cx.translate(
        -1 * this.camera.adjustX(x, this.canvas.width),
        -1 * this.camera.adjustY(y, this.canvas.height)
      );
    }
    cx.beginPath();
    cx.moveTo(
      this.camera.adjustX(lines[0][0], this.canvas.width),
      this.camera.adjustY(lines[0][1], this.canvas.height)
    );
    lines
      .slice(1)
      .map((line) =>
        cx.lineTo(
          this.camera.adjustX(line[0], this.canvas.width),
          this.camera.adjustY(line[1], this.canvas.height)
        )
      );
    cx.closePath();
    cx.shadowBlur = shadowBlur;
    cx.shadowColor = shadowColor;
    if (strokeColor) {
      cx.strokeStyle = strokeColor;
      cx.stroke();
    }
    if (fillColor) {
      cx.fillStyle = fillColor;
      cx.fill();
    }
  }

  emoji({ emoji, x, y, adjusted = true }) {
    if (adjusted) {
      x = this.camera.adjustX(x, this.canvas.width);
      y = this.camera.adjustY(y, this.canvas.height);
    }
    cx.font = "4px serif";
    cx.fillText(emoji, x, y);
  }

  hitbox({ x, y, size }) {
    this.rect({
      rect: [x - size / 2, y - size / 2, size, size],
      color: "#f00",
    });
  }
}

const letters = {};
letters["A"] = [
  [, 1],
  [1, , 1],
  [1, , 1],
  [1, 1, 1],
  [1, , 1],
];
letters["B"] = [
  [1, 1],
  [1, , 1],
  [1, 1, 1],
  [1, , 1],
  [1, 1],
];
letters["C"] = [[1, 1, 1], [1], [1], [1], [1, 1, 1]];
letters["D"] = [
  [1, 1],
  [1, , 1],
  [1, , 1],
  [1, , 1],
  [1, 1],
];
letters["E"] = [[1, 1, 1], [1], [1, 1, 1], [1], [1, 1, 1]];
letters["F"] = [[1, 1, 1], [1], [1, 1], [1], [1]];
letters["G"] = [[, 1, 1], [1], [1, , 1, 1], [1, , , 1], [, 1, 1]];
letters["H"] = [
  [1, , 1],
  [1, , 1],
  [1, 1, 1],
  [1, , 1],
  [1, , 1],
];
letters["I"] = [
  [1, 1, 1],
  [, 1],
  [, 1],
  [, 1],
  [1, 1, 1],
];
letters["J"] = [
  [1, 1, 1],
  [, , 1],
  [, , 1],
  [1, , 1],
  [1, 1, 1],
];
letters["K"] = [
  [1, , , 1],
  [1, , 1],
  [1, 1],
  [1, , 1],
  [1, , , 1],
];
letters["L"] = [[1], [1], [1], [1], [1, 1, 1]];
letters["M"] = [
  [1, 1, 1, 1, 1],
  [1, , 1, , 1],
  [1, , 1, , 1],
  [1, , , , 1],
  [1, , , , 1],
];
letters["N"] = [
  [1, , , 1],
  [1, 1, , 1],
  [1, , 1, 1],
  [1, , , 1],
  [1, , , 1],
];
letters["O"] = [
  [1, 1, 1],
  [1, , 1],
  [1, , 1],
  [1, , 1],
  [1, 1, 1],
];
letters["P"] = [[1, 1, 1], [1, , 1], [1, 1, 1], [1], [1]];
letters["Q"] = [
  [0, 1, 1],
  [1, , , 1],
  [1, , , 1],
  [1, , 1, 1],
  [1, 1, 1, 1],
];
letters["R"] = [
  [1, 1],
  [1, , 1],
  [1, , 1],
  [1, 1],
  [1, , 1],
];
letters["S"] = [[1, 1, 1], [1], [1, 1, 1], [, , 1], [1, 1, 1]];
letters["T"] = [
  [1, 1, 1],
  [, 1],
  [, 1],
  [, 1],
  [, 1],
];
letters["U"] = [
  [1, , 1],
  [1, , 1],
  [1, , 1],
  [1, , 1],
  [1, 1, 1],
];
letters["V"] = [
  [1, , , , 1],
  [1, , , , 1],
  [, 1, , 1],
  [, 1, , 1],
  [, , 1],
];
letters["W"] = [
  [1, , , , 1],
  [1, , , , 1],
  [1, , , , 1],
  [1, , 1, , 1],
  [1, 1, 1, 1, 1],
];
letters["X"] = [
  [1, , , , 1],
  [, 1, , 1],
  [, , 1],
  [, 1, , 1],
  [1, , , , 1],
];
letters["Y"] = [
  [1, , 1],
  [1, , 1],
  [, 1],
  [, 1],
  [, 1],
];
letters["Z"] = [
  [1, 1, 1, 1, 1],
  [, , , 1],
  [, , 1],
  [, 1],
  [1, 1, 1, 1, 1],
];
letters[" "] = [
  [, ,],
  [, ,],
  [, ,],
  [, ,],
  [, ,],
];
letters["0"] = [
  [1, 1, 1],
  [1, , 1],
  [1, , 1],
  [1, , 1],
  [1, 1, 1],
];
letters["1"] = [
  [, 1],
  [, 1],
  [, 1],
  [, 1],
  [, 1],
];
letters["2"] = [
  [1, 1, 1],
  [0, 0, 1],
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1],
];
letters["3"] = [
  [1, 1, 1],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 1],
  [1, 1, 1],
];
letters["4"] = [
  [1, 0, 1],
  [1, 0, 1],
  [1, 1, 1],
  [0, 0, 1],
  [0, 0, 1],
];
letters["5"] = [
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1],
  [0, 0, 1],
  [1, 1, 1],
];
letters["6"] = [
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
letters["7"] = [
  [1, 1, 1],
  [0, 0, 1],
  [0, 0, 1],
  [0, 0, 1],
  [0, 0, 1],
];
letters["8"] = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
letters["9"] = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
  [0, 0, 1],
  [1, 1, 1],
];


/***/ }),

/***/ "./src/Enemy.js":
/*!**********************!*\
  !*** ./src/Enemy.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Character */ "./src/Character.js");
/* harmony import */ var _Sprites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sprites */ "./src/Sprites.js");



class Enemy extends _Character__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(x, y, health, facing, colors, persona, weapon) {
    super(x, y, health, facing, weapon);
    this.colors = colors;
    this.bloodColor = "#32CD32";
    this.presses = {
      left: false,
      right: false,
      up: false,
      space: false,
    };
    this.persona = persona;
  }

  tick({ camera, map, projectiles, player, sound }) {
    const [presses, immobile] = this.persona({ enemy: this, map, player });
    if (presses) this.presses = presses;
    _Character__WEBPACK_IMPORTED_MODULE_0__["default"].tick.call(this, {
      camera,
      map,
      projectiles,
      presses: this.presses,
      sound,
      immobile,
    });
  }

  draw(drawer) {
    if (this.health < this.maxHealth) {
      drawer.rect({
        fillColor: "white",
        rect: [this.x, this.y - 1, 8 * (this.health / this.maxHealth), 1],
      });
    }

    Object(_Sprites__WEBPACK_IMPORTED_MODULE_1__["humanoid"])(this.x, this.y, this.facing, this.colors).forEach(({ c, r }) =>
      drawer.rect({ fillColor: c, rect: r })
    );

    this.weapon && this.weapon.draw(drawer, { x: this.x, y: this.y });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Enemy);


/***/ }),

/***/ "./src/EnemyCollection.js":
/*!********************************!*\
  !*** ./src/EnemyCollection.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Blood__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blood */ "./src/Blood.js");
/* harmony import */ var _BloodChunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BloodChunk */ "./src/BloodChunk.js");
/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Enemy */ "./src/Enemy.js");
/* harmony import */ var _EnemyPersonas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EnemyPersonas */ "./src/EnemyPersonas.js");
/* harmony import */ var _WeaponFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WeaponFactory */ "./src/WeaponFactory.js");






const defaultColors = ["red", "red", "yellow", "orange"];
const pacifistColors = ["beige", "beige", "red", "red"];

const makeColors = ([skin, horns, eyes, body]) => ({ skin, horns, eyes, body });

const types = {
  aggro: { health: 50, persona: _EnemyPersonas__WEBPACK_IMPORTED_MODULE_3__["aggro"], colors: defaultColors },
  runAndGun: { health: 50, persona: _EnemyPersonas__WEBPACK_IMPORTED_MODULE_3__["runAndGun"], colors: defaultColors },
  idiot: { health: 50, persona: _EnemyPersonas__WEBPACK_IMPORTED_MODULE_3__["idiot"], colors: defaultColors },
  pacifist: { health: 50, persona: _EnemyPersonas__WEBPACK_IMPORTED_MODULE_3__["pacifist"], colors: pacifistColors },
  sentinel: {
    health: 50,
    persona: _EnemyPersonas__WEBPACK_IMPORTED_MODULE_3__["sentinel"],
    colors: defaultColors,
    weapon: new _WeaponFactory__WEBPACK_IMPORTED_MODULE_4__["default"]().create(_WeaponFactory__WEBPACK_IMPORTED_MODULE_4__["assaultRifle"]),
  },
};

class EnemyCollection {
  constructor() {
    this.enemies = [];
    this.remainingEnemies = [];
    this.enemyCount = 0;
  }

  initialize({ concurrentEnemies, enemyCount, enemySpawnPoint, enemies }) {
    this.concurrentEnemies = concurrentEnemies;
    this.enemyCount = enemyCount;
    this.enemySpawnPoint = enemySpawnPoint;

    this.remainingEnemies = [];
    Object.entries(enemies).forEach(([type, count]) => {
      this.remainingEnemies = this.remainingEnemies.concat(
        Array(count).fill(type)
      );
    });

    for (let i = 0; i < concurrentEnemies; i++) {
      this.enemies.push(this.createEnemy());
    }
  }

  createEnemy() {
    this.enemyCount -= 1;
    const { health, persona, colors, weapon } = types[
      this.remainingEnemies.pop()
    ];
    const [x, y] = this.enemySpawnPoint;
    return new _Enemy__WEBPACK_IMPORTED_MODULE_2__["default"](x, y, health, -1, makeColors(colors), persona, weapon);
  }

  tick({ camera, map, projectiles, spurts, chunks, player, sound }) {
    this.enemies.forEach((enemy) => {
      enemy.tick({ camera, map, projectiles, player, sound });
    });

    this.enemies = this.enemies.reduce((enemies, enemy) => {
      if (enemy.health <= 0) {
        for (let i = 0; i < 100; i++) {
          spurts.add(
            new _Blood__WEBPACK_IMPORTED_MODULE_0__["default"](
              enemy.x,
              enemy.y,
              Math.random() * 5 - 2.5,
              Math.random() * 5 - 5,
              enemy.bloodColor
            )
          );
        }
        for (let i = 0; i < 5; i++) {
          chunks.chunks.push(
            new _BloodChunk__WEBPACK_IMPORTED_MODULE_1__["default"](
              enemy.x,
              enemy.y - 2,
              Math.random() * 3 - 1.5,
              Math.random() * 3 - 1.5,
              "red"
            )
          );
        }
        if (
          this.enemies.length <= this.concurrentEnemies &&
          this.enemyCount > 0
        ) {
          enemies.push(this.createEnemy());
        }
      } else {
        enemies.push(enemy);
      }
      return enemies;
    }, []);
  }

  draw(drawer) {
    this.enemies.forEach((e) => e.draw(drawer));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (EnemyCollection);


/***/ }),

/***/ "./src/EnemyPersonas.js":
/*!******************************!*\
  !*** ./src/EnemyPersonas.js ***!
  \******************************/
/*! exports provided: aggro, runAndGun, pacifist, idiot, sentinel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aggro", function() { return aggro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runAndGun", function() { return runAndGun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pacifist", function() { return pacifist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idiot", function() { return idiot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sentinel", function() { return sentinel; });
const runRight = (enemy) => {
  enemy.holdLeft = false;
  enemy.holdRight = true;
};

const runLeft = (enemy) => {
  enemy.holdLeft = true;
  enemy.holdRight = false;
};

const laps = (enemy) => {
  if (!enemy.holdLeft && !enemy.holdRight) enemy.holdRight = true;
  if (enemy.x < 8 * 2) runRight(enemy);
  if (enemy.x > 8 * 36) runLeft(enemy);
};

const jumpToLedges = (freq, enemy, map) => {
  if (enemy.jumpTimer > 0) {
    enemy.jumpTimer -= 1;
  } else {
    const jumpTarget = map.getTile(
      enemy.x + 3 * 8 * enemy.facing,
      enemy.y - 2 * 8
    );
    enemy.jumpTimer = jumpTarget && Math.random() < freq ? 30 : 0;
  }
};

const shootOnSight = (enemy, player) => {
  if (Math.abs(player.y - enemy.y) < 20) {
    runTowardsObject(enemy, player);
  }
  return shootInRange({ enemy, player });
};

const runTowardsObject = (enemy, object) => {
  if (object.x - enemy.x > 0) {
    runRight(enemy);
  } else {
    runLeft(enemy);
  }
};

const jumpTowardsObject = (enemy, object, map) => {
  if (object.y < enemy.y) {
    jumpToLedges(1, enemy, map);
  }
};

const shootInRange = ({ enemy, player }) => Math.abs(player.y - enemy.y) < 20;

const aggro = ({ enemy, player, map }) => {
  runTowardsObject(enemy, player);
  jumpTowardsObject(enemy, player, map);
  const space = shootInRange({ enemy, player });
  const buttons = {
    left: enemy.holdLeft,
    right: enemy.holdRight,
    up: enemy.jumpTimer > 0,
    space,
  };
  return [buttons, false];
};

const runAndGun = ({ enemy, map, player }) => {
  laps(enemy);
  jumpToLedges(0.1, enemy, map);
  const space = shootOnSight(enemy, player);
  const buttons = {
    left: enemy.holdLeft,
    right: enemy.holdRight,
    up: enemy.jumpTimer > 0,
    space,
  };
  return [buttons, false];
};

const pacifist = ({ enemy, map }) => {
  laps(enemy);
  jumpToLedges(0.1, enemy, map);

  const buttons = {
    left: enemy.holdLeft,
    right: enemy.holdRight,
    up: enemy.jumpTimer > 0,
  };

  return [buttons, false];
};

const idiot = ({ enemy }) => {
  const immobile = false;
  let buttons;
  if (enemy.lifespan % 30 === 0) {
    const left = Math.random() < 0.5;
    buttons = {
      left: left,
      right: !left,
      up: Math.random() < 0.5,
      space: Math.random() < 0.7,
    };
  } else {
    buttons = null;
  }
  return [buttons, immobile];
};

const sentinel = ({ enemy, player }) => {
  const space = enemy.x - player.x < 30 && enemy.x - player.x > 0;
  const immobile = true;
  return [
    {
      left: false,
      right: false,
      up: false,
      space,
    },
    immobile,
  ];
};


/***/ }),

/***/ "./src/GameContainer.js":
/*!******************************!*\
  !*** ./src/GameContainer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameContainer; });
let canvas = document.getElementById("c");
class GameContainer {
  constructor() {
    this.canvas = canvas;
  }

  initialize() {
    let container = document.querySelector("body");
    let resize = e => {
      container.clientWidth / container.clientHeight > 128 / 128
        ? (canvas.style.height = "100vh") && (canvas.style.width = "auto")
        : (canvas.style.height = "auto") && (canvas.style.width = "100vw");
    };
    resize();
    container.onresize = resize;
  }
}



/***/ }),

/***/ "./src/GameObject.js":
/*!***************************!*\
  !*** ./src/GameObject.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameObject; });
class GameObject {
  constructor({ x, y, maxDx, maxDy, grav }) {
    this.x = x;
    this.y = y;
    this.dx = 0;
    this.dy = 0;
    this.maxDx = maxDx;
    this.maxDy = maxDy;
    this.grav = grav;
  }
}


/***/ }),

/***/ "./src/HUD.js":
/*!********************!*\
  !*** ./src/HUD.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sprites__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprites */ "./src/Sprites.js");


class HUD {
  constructor() {}

  tick(player, enemies) {
    if (player.weapon) this.weapon = player.weapon.name;
    this.health = player.health;
    this.maxHealth = player.maxHealth;
    this.dead = player.dead;
    this.enemyCount = enemies.enemyCount + enemies.enemies.length;
  }

  draw(drawer) {
    if (this.dead) return;

    if (this.weapon) {
      drawer.text({
        text: this.weapon,
        size: 1,
        x: 2,
        y: 117,
      });
    }

    const colors = {
      skin: "red",
      horns: "red",
      eyes: "yellow",
      body: "orange",
    };

    Object(_Sprites__WEBPACK_IMPORTED_MODULE_0__["humanoid"])(113, 115, 1, colors, { bodyless: true }).forEach(({ c, r }) =>
      drawer.rect({ adjusted: false, fillColor: c, rect: r })
    );

    drawer.text({
      text: `${this.enemyCount}`,
      size: 1,
      x: 120,
      y: 117,
    });

    drawer.rect({
      adjusted: false,
      fillColor: `rgb(${255 * (1 - this.health / this.maxHealth)}, ${
        255 * (this.health / this.maxHealth)
      }, 0)`,
      rect: [2, 124, 124 * (this.health / this.maxHealth), 2],
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (HUD);


/***/ }),

/***/ "./src/Keyboard.js":
/*!*************************!*\
  !*** ./src/Keyboard.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Keyboard {
  constructor() {
    document.addEventListener("keyup", (event) => this.onKeyup(event));
    document.addEventListener("keydown", (event) => this.onKeydown(event));

    this._pressed = {};

    this.ENTER = [13];
    this.SPACE = [32];
    this.LEFT = [37, 65];
    this.UP = [38, 87];
    this.RIGHT = [39, 68];
    this.DOWN = [40, 83];
  }

  isDown(keyCode) {
    return keyCode.some((key) => this._pressed[key]) || false;
  }

  onKeydown(event) {
    this._pressed[event.keyCode] = true;
  }

  onKeyup(event) {
    delete this._pressed[event.keyCode];
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Keyboard);


/***/ }),

/***/ "./src/Level.js":
/*!**********************!*\
  !*** ./src/Level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Music__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Music */ "./src/Music.js");
/* harmony import */ var _Package__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Package */ "./src/Package.js");
/* harmony import */ var _WeaponFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WeaponFactory */ "./src/WeaponFactory.js");




const colorSchemes = [
  {
    background: ["#112", "#131"],
    tiles: ["#114", "#336", "#003"],
  },
  {
    background: ["#33f", "#1f1"],
    tiles: ["#963", "#c96", "#620"],
  },
];

const levelTemplates = [
  {
    concurrentEnemies: 1,
    enemyCount: 1,
    spawnPoint: [40, 10],
    enemySpawnPoint: [230, 100],
    enemies: {
      sentinel: 1,
    },
    colors: colorSchemes[0],
  },
  {
    concurrentEnemies: 5,
    enemyCount: 10,
    spawnPoint: [40, 10],
    enemySpawnPoint: [249, 20],
    enemies: {
      pacifist: 10,
    },
    colors: colorSchemes[0],
  },
  {
    concurrentEnemies: 5,
    enemyCount: 10,
    spawnPoint: [40, 10],
    enemySpawnPoint: [249, 20],
    enemies: {
      idiot: 10,
    },
    colors: colorSchemes[1],
  },
  {
    concurrentEnemies: 5,
    enemyCount: 10,
    spawnPoint: [40, 10],
    enemySpawnPoint: [249, 20],
    enemies: {
      runAndGun: 10,
    },
    colors: colorSchemes[0],
  },
  {
    concurrentEnemies: 5,
    enemyCount: 10,
    spawnPoint: [40, 10],
    enemySpawnPoint: [249, 20],
    enemies: {
      aggro: 10,
    },
    colors: colorSchemes[0],
  },
];

const delay = 80;

class Level {
  constructor() {
    this.music = new _Music__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.musicStarted = false;
    this.gameOver = false;
  }

  initializeLevel(
    level,
    { player, enemies, chunks, spurts, packages, map, background }
  ) {
    this.level = levelTemplates[level - 1] || levelTemplates[1];
    this.level.level = level;
    map.loadLevel(level, this.level.colors.tiles);
    background.colors = this.level.colors.background;
    player.health = player.maxHealth;
    player.x = this.level.spawnPoint[0];
    player.y = this.level.spawnPoint[1];
    chunks.chunks = [];
    spurts.spurts = [];
    packages.packages =
      level === 1
        ? [new _Package__WEBPACK_IMPORTED_MODULE_1__["default"](146, 90, new _WeaponFactory__WEBPACK_IMPORTED_MODULE_2__["default"]().create(_WeaponFactory__WEBPACK_IMPORTED_MODULE_2__["debugPistol"]))]
        : [];
    enemies.initialize(this.level);
    this.levelOverTimer = 0;
    this.levelFadeIn = 0;
    this.welcomeMessage = false;
  }

  tick({ player, enemies, chunks, spurts, packages, sound, map, background }) {
    if (player.health <= 0) {
      this.gameOver = true;
    }

    this.levelFadeIn += 1;

    if (enemies.enemies.length <= 0) {
      this.levelOverTimer += 1;
    }

    if (this.levelOverTimer > delay * (6 + (this.level.level === 1 ? 3 : 0))) {
      this.initializeLevel(this.level.level + 1, {
        player,
        enemies,
        chunks,
        spurts,
        packages,
        map,
        background,
      });
    }

    const oldWelcomeMessage = this.welcomeMessage;
    this.welcomeMessage =
      this.level.level === 1 && this.levelOverTimer > delay * 5;
    if (oldWelcomeMessage !== this.welcomeMessage) {
      this.music.startMusic();
    }

    if ([delay, delay * 2, delay * 3].includes(this.levelOverTimer)) {
      sound.play("message");
    }
  }

  draw(drawer) {
    if (this.levelOverTimer > delay) {
      drawer.rect({
        adjusted: false,
        fillColor: "rgba(0,0,0,0.9)",
        rect: [20, 20, 88, 42],
      });
    }

    if (this.levelOverTimer > delay * 2) {
      drawer.text({
        text: `level ${this.level.level} complete`,
        size: 1,
        x: 32 - (this.level.level >= 10 ? 2 : 0),
        y: 30,
      });
    }

    if (this.levelOverTimer > delay * 3) {
      drawer.text({
        text: `${this.level.enemyCount} aliens defeated`,
        size: 1,
        x: 31 - (this.level.enemyCount >= 10 ? 2 : 0),
        y: 45,
      });
    }

    if (this.welcomeMessage) {
      drawer.rect({
        adjusted: false,
        fillColor: "#000",
        rect: [14, 68, 100, 42],
      });
      drawer.text({
        text: "Welcome",
        size: 2,
        x: 32,
        y: 74,
      });
      drawer.text({
        text: "to space",
        size: 2,
        x: 33,
        y: 94,
      });
    }

    if (this.levelFadeIn < 200) {
      drawer.rect({
        adjusted: false,
        fillColor: `rgba(0,0,0,${1 - this.levelFadeIn / 200})`,
        rect: [0, 0, 128, 128],
      });
    }

    const newLevelTimer = delay * (6 + (this.level.level === 1 ? 3 : 0));
    if (this.levelOverTimer > newLevelTimer - 50) {
      drawer.rect({
        adjusted: false,
        fillColor: `rgba(0,0,0,${
          1 - (newLevelTimer - this.levelOverTimer) / 50
        })`,
        rect: [0, 0, 128, 128],
      });
    }

    if (this.gameOver) {
      drawer.rect({
        adjusted: false,
        fillColor: "#000",
        rect: [15, 26, 98, 31],
      });
      drawer.text({
        text: "Game over",
        size: 2,
        x: 25,
        y: 36,
      });
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Level);


/***/ }),

/***/ "./src/Map.js":
/*!********************!*\
  !*** ./src/Map.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Map; });
// prettier-ignore
const level1 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

// prettier-ignore
const level2 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],

  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],

  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

// prettier-ignore
const level2Hex = [
  "ffffffffff", "8000000001", "8000000001", "8000000001",
  "8000000001", "87007e00e1", "8000000001", "8000000001",
  "f03c003c0f", "8000000001", "8000000001", "8300c300c1",
  "8000000001", "8000000001", "8fc07e03f1", "8000000001",
  "8000000001", "e00f00f007", "8000000001", "8000000001",
  "ffffffffff",
];

// quads are 10x12
// prettier-ignore
const emptyQuad = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const quad1 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const mapToHex = (map) => {
  return map.map((r) => parseInt(r.join(""), 2).toString(16));
};

const hexToMap = (hex) => {
  return hex.map((h) => {
    return parseInt(h, 16).toString(2).split("").map(Number);
  });
};

const defaultMap = hexToMap(level2Hex);
const a = [level1, defaultMap];

class Map {
  constructor() {
    this.drawer = null;
    this.tileSize = 8;
    this.mapTiles = [];
    this.mapHeight = 0;
    this.mapLength = 0;
  }

  loadLevel(level, colorScheme) {
    const tiles = a[level - 1] || defaultMap;

    this.mapTiles = tiles;
    this.mapHeight = tiles.length;
    this.mapLength = tiles[0].length;

    this.mapWidthPixels = this.tileSize * this.mapLength;
    this.mapHeightPixels = this.tileSize * this.mapHeight;

    this.colorScheme = colorScheme;
  }

  getTile(x, y) {
    const row = this.mapTiles[Math.floor(y / this.tileSize)];
    if (!row) return 1;
    return row[Math.floor(x / this.tileSize)];
  }

  draw(drawer) {
    const [main, highlight, shadow] = this.colorScheme;
    this.drawer = this.drawer || drawer;
    this.mapTiles.forEach((row, y) => {
      row.forEach((tile, x) => {
        if (tile !== 1) return;
        drawer.rect({
          fillColor: main,
          rect: [
            x * this.tileSize + 1,
            y * this.tileSize + 1,
            this.tileSize - 2,
            this.tileSize - 2,
          ],
        });
        drawer.rect({
          fillColor: highlight,
          rect: [
            x * this.tileSize + 1,
            y * this.tileSize,
            this.tileSize - 2,
            1,
          ],
        });
        drawer.rect({
          fillColor: shadow,
          rect: [
            x * this.tileSize + 1,
            y * this.tileSize + this.tileSize - 1,
            this.tileSize - 2,
            1,
          ],
        });
        drawer.rect({
          fillColor: highlight,
          rect: [
            x * this.tileSize,
            y * this.tileSize + 1,
            1,
            this.tileSize - 2,
          ],
        });
        drawer.rect({
          fillColor: shadow,
          rect: [
            x * this.tileSize + this.tileSize - 1,
            y * this.tileSize + 1,
            1,
            this.tileSize - 2,
          ],
        });
      });
    });
  }
}


/***/ }),

/***/ "./src/Music.js":
/*!**********************!*\
  !*** ./src/Music.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Music; });
/* harmony import */ var _sound_box_worker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sound-box.worker.js */ "./src/sound-box.worker.js");
/* harmony import */ var _sound_box_worker_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sound_box_worker_js__WEBPACK_IMPORTED_MODULE_0__);
// https://sb.bitsnbites.eu/?data=U0JveAwC7d1NbxtFGMDxZ3Z2Q4QbSpGCGokIS1VVEAcqgUQPrYrkHLkhTgj1wq2hEkkQDn1blcVms1FleeM4hDQBilAFR45IgHrjK3DiG3DhHmbWa0NNvCPRbGLD_7c7b35mrNn15jTaSTwrMifVaXk3FPVLKMb0cyZ76Cs999PyH-nUS36gPE8Z2leePUSeyEVRo9FsRlEcN5u2liS2FscN-UQi-VjKNuuIn3fER80_SWz7zh3H8DJVZhwdnnfEJ8FeXu7m5b283Pl8-7Ot7mbngCGHatQ9nukdlfkR8aq8KPMyd_K4n5-ZyuypgvApM8f3C-IP63klyst-e_GAzuMoajXaUauZRq24E7WS7vpW0o07SXdtM-4000bbNf64Ld2SW0vmHC5XQglXZGnVNR4AAAAAAAAAUJL9D5TsXxMl_tSZ3ifeU0qdeyOwVaXt4Q1q_TLNOqZ5-nv-12fjbPxnWGz4fg-1J_3yAAAAAAAAAAAAjsF6L130n1wwtR8CUb83pboYPO2LKOVpT5uK2NLTIkHGjusvzWzkZTpUlsn1PtYZR9xK86luPNI-mlW_Uueflr9q9rjzL32CDq75Lzji_XudZ-lw2zH8sbnm77r_AAAAAAAAAADgn7yfQ5PWnxG5urxm2p8Gypt-59kLG8Fb01o81dubcfioy2Rj_qU67YhfcMQBAAAAAAAAAACOnJbbohdui_q1Ii-IqNd85dWWb_xYmzqnTDhbI9Om0v_PZsq3hx05_G7ZUb5rdhj6uxpO4vwnYY4uBc_Pf-HyAAAAAAAAAADAhNFvhyJXwhMiJ6TW-8jbPynVN_Ur2drYYLXM01kpEviBvyPytch9-XLwPbuyZ1p7WbltUrkC1xZ1teJwK1uZ6Uh38Imtb5nUzdbRkoKx42AnP7eld25J7-xm19U2PbqSXYytt23WsqfJ7oq5uNj1_S6BI64d8fvm8fnG5KPKsrkenzlH_IF8K9-ZvF_uZU_-rtwzx479aY6X6_Icfx0AAAAAAAAAAPxPtddF_RZqkUtyWUR_Hyh99iupbeqznqh-J_u-We-tM79wweQjWZW6fFjUZexce-_RdtSqLx7c8_BUHLErBfF5k64XxI-CYwvG068Wx2u9HSbrI3eavJ7no67zZp7fHBF3Kbr_VtH9t1w7ZLp-n387bwAAAAAAAAAAUB5vbcWk0Bd5-fzVG1oSX-nXv9DV1F8drI8NFs8GNdfbNA8ccQAAAAAAAAAAAGCc_Ak



var myWorker = new _sound_box_worker_js__WEBPACK_IMPORTED_MODULE_0___default.a();

let audio = null;

myWorker.onmessage = (e) => {
  let wave = e.data;
  audio = document.createElement("audio");
  audio.src = URL.createObjectURL(new Blob([wave], { type: "audio/wav" }));
  audio.volume = 0.7;
  audio.loop = true;
};

class Music {
  constuctor() {}

  startMusic() {
    let playPromise = audio.play();
    (function tryAgain(playPromise) {
      playPromise
        .then((_) => {})
        .catch((error) => {
          setTimeout(() => {
            let playPromise = audio.play();
            tryAgain(playPromise);
          }, 1000);
        });
    })(playPromise);
  }
}


/***/ }),

/***/ "./src/Package.js":
/*!************************!*\
  !*** ./src/Package.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject */ "./src/GameObject.js");
/* harmony import */ var _WeaponFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WeaponFactory */ "./src/WeaponFactory.js");



class Package extends _GameObject__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(x, y, weapon) {
    super({ x, y });

    this.weapon = weapon || new _WeaponFactory__WEBPACK_IMPORTED_MODULE_1__["default"]().random();
    this.size = 5;
    this.grav = 0.04;
    this.dy = 0.4;
    this.landed = false;
    this.type = weapon || Math.random() > 0.5 ? "weapon" : "health";
  }

  tick() {
    if (this.landed) return;
    this.dy += this.grav;
    this.y += this.dy;
  }

  draw(drawer) {
    if (this.type === "weapon") {
      drawer.rect({
        fillColor: "#C3732A",
        rect: [this.x, this.y, 5, 5],
      });

      [
        [0, 1],
        [1, 0],
        [2, 0],
        [3, 0],
        [4, 1],
        [3, 2],
        [2, 2],
        [2, 4],
      ].forEach(([x, y]) =>
        drawer.rect({
          fillColor: "yellow",
          rect: [this.x + x, this.y + y, 1, 1],
        })
      );
    } else {
      drawer.rect({
        fillColor: "#FFF",
        rect: [this.x, this.y, 5, 5],
      });

      [
        [1, 2, 3, 1],
        [2, 1, 1, 3],
      ].forEach(([x, y, dx, dy]) =>
        drawer.rect({
          fillColor: "red",
          rect: [this.x + x, this.y + y, dx, dy],
        })
      );
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Package);


/***/ }),

/***/ "./src/PackageCollection.js":
/*!**********************************!*\
  !*** ./src/PackageCollection.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Package__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Package */ "./src/Package.js");


class PackageCollection {
  constructor() {
    this.packages = [];
    this.lifespan = 0;
  }

  tick(map, level) {
    this.lifespan += 1;
    if (!(this.lifespan % 500) && level !== 1) {
      let x = Math.random() * map.mapWidthPixels;
      let y = Math.random() * map.mapHeightPixels;
      while (map.getTile(x, y + 1)) {
        x = Math.random() * map.mapWidthPixels;
        y = Math.random() * map.mapHeightPixels;
      }
      this.packages.push(new _Package__WEBPACK_IMPORTED_MODULE_0__["default"](x, y));
    }
    this.packages.forEach((p) => p.tick());
  }

  draw(drawer) {
    this.packages.forEach((p) => p.draw(drawer));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (PackageCollection);


/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Character */ "./src/Character.js");
/* harmony import */ var _Sprites_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sprites.js */ "./src/Sprites.js");
/* harmony import */ var _Blood__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Blood */ "./src/Blood.js");
/* harmony import */ var _BloodChunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BloodChunk */ "./src/BloodChunk.js");





class Player extends _Character__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(x, y, health) {
    super(x, y, health);
    this.bloodColor = "red";
    this.weapon = null;
    this.dead = false;
  }

  tick({ camera, keyboard, map, projectiles, sound, spurts, chunks }) {
    if (this.health <= 0 && !this.dead) {
      for (let i = 0; i < 200; i++) {
        spurts.add(
          new _Blood__WEBPACK_IMPORTED_MODULE_2__["default"](
            this.x,
            this.y,
            Math.random() * 5 - 2.5,
            Math.random() * 5 - 5,
            "red",
          )
        );
      }
      for (let i = 0; i < 10; i++) {
        chunks.chunks.push(
          new _BloodChunk__WEBPACK_IMPORTED_MODULE_3__["default"](
            this.x,
            this.y - 2,
            Math.random() * 3 - 1.5,
            Math.random() * 3 - 1.5,
            "red"
          )
        );
      }
      this.dead = true;
    }
    if (this.dead) return;

    _Character__WEBPACK_IMPORTED_MODULE_0__["default"].tick.call(this, {
      camera,
      map,
      projectiles,
      presses: {
        left: keyboard.isDown(keyboard.LEFT),
        right: keyboard.isDown(keyboard.RIGHT),
        up: keyboard.isDown(keyboard.UP),
        space: keyboard.isDown(keyboard.SPACE),
      },
      sound,
    });
  }

  draw(drawer) {
    if (this.dead) return;
    // drawer.rect({ fillColor: "green", rect: [this.x, this.y, 8, 8] }); // hitbox

    const colors = {
      skin: "#FFCCAA",
      hair: "#FFA300",
      eyes: "#008751",
      body: "#29ADFF",
    };

    Object(_Sprites_js__WEBPACK_IMPORTED_MODULE_1__["humanoid"])(this.x, this.y, this.facing, colors).forEach(({ c, r }) =>
      drawer.rect({ fillColor: c, rect: r })
    );

    this.weapon && this.weapon.draw(drawer, { x: this.x, y: this.y, facing: this.facing });
  }
}


/***/ }),

/***/ "./src/Projectile.js":
/*!***************************!*\
  !*** ./src/Projectile.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Projectile {
  constructor(
    { x, y, facing },
    {
      color,
      speed,
      spreadX = 0,
      spreadY = 0,
      lift = 0,
      grav = 0,
      damage,
      damageMod,
      explosion,
      blood,
      size,
      emoji,
    }
  ) {
    this.size = size || 1;
    this.x = x - this.size / 2;
    this.y = y;
    this.dx = facing * speed + (Math.random() - spreadX / 2) * spreadX;
    this.dy = (Math.random() - spreadY / 2) * spreadY - lift;
    this.grav = grav;
    this.color = color;
    this.explosion = explosion || 1;
    this.lifespan = 0;
    this.shouldDie = false;
    this.exploding = false;
    this.lifeleft = null;
    this.damage = damage;
    this.damageMod = damageMod || 1;
    this.blood = blood;
    this.emoji = emoji;
  }

  destroy() {
    this.exploding = true;
    this.lifeleft = 2;
  }

  tick() {
    this.lifespan += 1;
    if (this.lifeleft) {
      this.lifeleft -= 1;
      if (this.lifeleft === 0) this.shouldDie = true;
    }
    if (this.exploding) return;

    this.x += this.dx;
    this.dy += this.grav;
    this.y += this.dy;
  }

  draw(drawer) {
    if (this.exploding) {
      drawer.arc({
        arc: [
          this.x,
          this.y,
          (2 / this.lifeleft) * this.explosion,
          0,
          2 * Math.PI,
        ],
        fillColor: "#ff8",
        shadowBlur: 10,
        shadowColor: "#ff0",
      });
    } else {
      if (this.emoji) {
        drawer.emoji({ x: this.x, y: this.y, emoji: this.emoji });
      } else if (this.size === 1) {
        drawer.rect({
          fillColor: this.color(),
          rect: [this.x, this.y, this.size, this.size],
        });
      } else {
        drawer.arc({
          arc: [this.x, this.y, this.size, 0, 2 * Math.PI],
          fillColor: this.color(),
          shadowBlur: this.size,
          shadowColor: "#ff0",
        });
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Projectile);


/***/ }),

/***/ "./src/ProjectileCollection.js":
/*!*************************************!*\
  !*** ./src/ProjectileCollection.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class ProjectileCollection {
  constructor() {
    this.projectiles = [];
  }

  add(p) {
    this.projectiles.push(p);
  }

  tick() {
    this.projectiles.map((p) => p.tick());
    this.projectiles = this.projectiles.filter((p) => !p.shouldDie);
  }

  draw(drawer) {
    this.projectiles.map((p) => p.draw(drawer));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (ProjectileCollection);


/***/ }),

/***/ "./src/Sound.js":
/*!**********************!*\
  !*** ./src/Sound.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sound; });
/* harmony import */ var zzfx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zzfx */ "./node_modules/zzfx/ZzFX.js");


// prettier-ignore
let sounds = {
  "gun": [,,131,.02,.02,.08,,1.49,2.3,,,,,,,,,.9,.1],
  "jump": [,,131,.02,.02,.08,,1.49,2.3,,,,,,,,,.9,.1],
  "message": [,0,1740,,.06,.29,,.77,,,,,,,,,,.76,.07,.06],
  "minigun": [,0,0,,,0,4,0,1e8,,,,,,,.04,,0,.08],
  "shotgun": [,0,0,,,0,4,0,1e8,,,,,,,.055,,0,.3],
  "thrown": [,0,0,,,0,4,0,1e8,,,,,,,.055,,0,.3],
};

class Sound {
  play(sound) {
    Object(zzfx__WEBPACK_IMPORTED_MODULE_0__["zzfx"])(...sounds[sound]);
  }
}


/***/ }),

/***/ "./src/Sprites.js":
/*!************************!*\
  !*** ./src/Sprites.js ***!
  \************************/
/*! exports provided: humanoid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "humanoid", function() { return humanoid; });
const humanoid = (x, y, facing, colors, options = {}) => {
  const { skin, hair, horns, eyes, body } = colors;
  let parts = [];

  let upper = [
    [skin, [1, 3, 5, 3]], // head
    [eyes, [2, 4, 1, 1]], // eye left
    [eyes, [5, 4, 1, 1]], // eye right
  ];
  parts = parts.concat(upper);

  let lower = [
    [body, [1, 7, 3, 1]], // body
    [skin, [1, 7, 1, 1]], // left arm
    [skin, [4, 7, 1, 1]], // right arm
  ];

  if (!options.bodyless) {
    parts = parts.concat(lower);
  }

  if (hair)
    parts = parts.concat([
      [hair, [2, 1, 4, 1]], // hair top
      [hair, [1, 2, 6, 1]], // hair bottom
    ]);

  if (horns)
    parts = parts.concat([
      [horns, [1, 2, 1, 1]], // horn left
      [horns, [5, 2, 1, 1]], // horn right
    ]);

  parts = parts.map(([c, r]) => ({
    c,
    r: [facing === 1 ? x + r[0] : 8 - (r[0] + r[2]) + x, y + r[1], r[2], r[3]],
  }));

  return parts;
};


/***/ }),

/***/ "./src/Weapon.js":
/*!***********************!*\
  !*** ./src/Weapon.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Projectile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projectile */ "./src/Projectile.js");


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
    this.shooting = false;
  }

  tick(pressSpace, projectiles, location, camera, sound) {
    this.ticksSinceLastFired += 1;
    this.shooting = false;
    if (
      this.cooldown * this.cooldownMod < this.ticksSinceLastFired &&
      pressSpace
    ) {
      this.fire(projectiles, location);
      sound.play("minigun");
      if (this.shake) camera.shake(this.shake.force, this.shake.duration);
      this.shooting = true;
      return this.knockback;
    }
    return 0;
  }

  fire(projectiles, location) {
    this.ticksSinceLastFired = 0;
    for (let i = 0; i < this.payloadCount; i++) {
      const p = new _Projectile__WEBPACK_IMPORTED_MODULE_0__["default"](location, this.projectileConfig);
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

/* harmony default export */ __webpack_exports__["default"] = (Weapon);


/***/ }),

/***/ "./src/WeaponFactory.js":
/*!******************************!*\
  !*** ./src/WeaponFactory.js ***!
  \******************************/
/*! exports provided: debugPistol, pistol, minigun, assaultRifle, shotgun, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debugPistol", function() { return debugPistol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pistol", function() { return pistol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minigun", function() { return minigun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assaultRifle", function() { return assaultRifle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shotgun", function() { return shotgun; });
/* harmony import */ var _Weapon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Weapon */ "./src/Weapon.js");


// base weapons
const debugPistol = {
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

const pistol = {
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

const minigun = {
  name: "Minigun",
  cooldown: 2,
  payloadCount: 1,
  knockback: 0.4,
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

const assaultRifle = {
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

const shotgun = {
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

const sniperRifle = {
  name: "sniper rifle",
  cooldown: 60,
  payloadCount: 1,
  knockback: 2,
  shake: { force: 3, duration: 8 },
  sound: "shotgun",
  projectileConfig: {
    color: () => "#eee",
    speed: 6,
    spreadX: 0,
    spreadY: 0,
    damage: 20,
    blood: 50,
  },
};

const flameThrower = {};

const grenade = {
  name: "Grenade",
  cooldown: 40,
  payloadCount: 1,
  knockback: 0,
  sound: "thrown",
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
    return new _Weapon__WEBPACK_IMPORTED_MODULE_0__["default"](final);
  }

  random() {
    const guns = [pistol, assaultRifle, minigun, shotgun, superShotgun, sniperRifle, grenade];
    // const guns = [sniperRifle];
    const base = guns[Math.floor(Math.random() * guns.length)];
    return this.create(base);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (WeaponFactory);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Drawer */ "./src/Drawer.js");
/* harmony import */ var _GameContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameContainer */ "./src/GameContainer.js");
/* harmony import */ var _Keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Keyboard */ "./src/Keyboard.js");
/* harmony import */ var _Sound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sound */ "./src/Sound.js");
/* harmony import */ var _CollisionDetector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CollisionDetector */ "./src/CollisionDetector.js");
/* harmony import */ var _Background__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Background */ "./src/Background.js");
/* harmony import */ var _Level__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Level */ "./src/Level.js");
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Map */ "./src/Map.js");
/* harmony import */ var _HUD__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HUD */ "./src/HUD.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Player */ "./src/Player.js");
/* harmony import */ var _EnemyCollection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./EnemyCollection */ "./src/EnemyCollection.js");
/* harmony import */ var _ProjectileCollection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ProjectileCollection */ "./src/ProjectileCollection.js");
/* harmony import */ var _BloodCollection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BloodCollection */ "./src/BloodCollection.js");
/* harmony import */ var _PackageCollection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PackageCollection */ "./src/PackageCollection.js");
















window.onload = () => {
  let gameContainer = new _GameContainer__WEBPACK_IMPORTED_MODULE_1__["default"]();

  let drawer = new _Drawer__WEBPACK_IMPORTED_MODULE_0__["default"](gameContainer.canvas);
  let keyboard = new _Keyboard__WEBPACK_IMPORTED_MODULE_2__["default"]();
  let sound = new _Sound__WEBPACK_IMPORTED_MODULE_3__["default"]();
  let collisionDetector = new _CollisionDetector__WEBPACK_IMPORTED_MODULE_4__["default"]();

  let background = new _Background__WEBPACK_IMPORTED_MODULE_5__["default"]({
    cw: gameContainer.canvas.width,
    ch: gameContainer.canvas.height,
  });

  let level = new _Level__WEBPACK_IMPORTED_MODULE_6__["default"]();
  let map = new _Map__WEBPACK_IMPORTED_MODULE_7__["default"]();
  let hud = new _HUD__WEBPACK_IMPORTED_MODULE_8__["default"]();
  let player = new _Player__WEBPACK_IMPORTED_MODULE_9__["default"](10, 10, 100);
  let enemies = new _EnemyCollection__WEBPACK_IMPORTED_MODULE_10__["default"]();
  let projectiles = new _ProjectileCollection__WEBPACK_IMPORTED_MODULE_11__["default"]();
  let spurts = new _BloodCollection__WEBPACK_IMPORTED_MODULE_12__["default"]();
  let chunks = { chunks: [] };
  let packages = new _PackageCollection__WEBPACK_IMPORTED_MODULE_13__["default"]();

  gameContainer.initialize();
  level.initializeLevel(1, {
    player,
    enemies,
    chunks,
    spurts,
    packages,
    map,
    background,
  });

  let fps = 60,
    interval = 1000 / fps,
    lastTime = new Date().getTime(),
    currentTime = 0,
    delta = 0;

  let gameLoop = () => {
    tick();
    collisionDetection();
    draw();
  };

  let tick = () => {
    const { camera } = drawer;
    level.tick({
      player,
      enemies,
      chunks,
      spurts,
      packages,
      sound,
      map,
      background,
    });
    player.tick({ camera, keyboard, map, projectiles, sound, chunks, spurts });
    enemies.tick({ camera, map, projectiles, spurts, chunks, player, sound });
    camera.tick({ player, map });
    projectiles.tick();
    spurts.tick();

    if (chunks.chunks.length > 1000) {
      chunks.chunks = chunks.chunks.slice(chunks.chunks.length - 1000);
    }
    chunks.chunks.forEach((chunk) => chunk.tick());

    hud.tick(player, enemies);
    packages.tick(map, level.level.level);
  };

  let collisionDetection = () => {
    projectiles.projectiles
      .filter((p) => !p.exploding && p.lifespan > 2)
      .forEach((projectile) => {
        // map
        if (map.getTile(projectile.x, projectile.y)) {
          projectile.destroy();
        }

        // characters
        enemies.enemies.concat([player]).forEach((object) => {
          collisionDetector.handleProjectile(projectile, object, spurts);
        });
      });

    spurts.spurts.concat(chunks.chunks).forEach((item) => {
      if (map.getTile(item.x, item.y)) item.stick();
    });

    packages.packages.forEach((packge) => {
      // map
      if (map.getTile(packge.x, packge.y + packge.size)) {
        packge.landed = true;
      }

      // characters
      enemies.enemies.concat([player]).forEach((object) => {
        collisionDetector.handlePackage(packge, object, packages);
      });
    });
  };

  let draw = () => {
    window.requestAnimationFrame(gameLoop);

    currentTime = new Date().getTime();
    delta = currentTime - lastTime;

    if (delta > interval) {
      drawer.clearBackground();
      drawObjects().map((object) => object.draw(drawer));
      lastTime = currentTime - (delta % interval);
    }
  };

  let drawObjects = () => [
    background,
    map,
    enemies,
    player,
    packages,
    projectiles,
    spurts,
    ...chunks.chunks,
    hud,
    level,
  ];

  document.querySelector("div").className += " loaded";
  gameLoop();
};


/***/ }),

/***/ "./src/sound-box.worker.js":
/*!*********************************!*\
  !*** ./src/sound-box.worker.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return __webpack_require__(/*! !./node_modules/worker-loader/dist/workers/InlineWorker.js */ "./node_modules/worker-loader/dist/workers/InlineWorker.js")("/******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// define __esModule on exports\n/******/ \t__webpack_require__.r = function(exports) {\n/******/ \t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n/******/ \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n/******/ \t\t}\n/******/ \t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t};\n/******/\n/******/ \t// create a fake namespace object\n/******/ \t// mode & 1: value is a module id, require it\n/******/ \t// mode & 2: merge all properties of value into the ns\n/******/ \t// mode & 4: return value when already ns object\n/******/ \t// mode & 8|1: behave like require\n/******/ \t__webpack_require__.t = function(value, mode) {\n/******/ \t\tif(mode & 1) value = __webpack_require__(value);\n/******/ \t\tif(mode & 8) return value;\n/******/ \t\tif((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;\n/******/ \t\tvar ns = Object.create(null);\n/******/ \t\t__webpack_require__.r(ns);\n/******/ \t\tObject.defineProperty(ns, 'default', { enumerable: true, value: value });\n/******/ \t\tif(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\n/******/ \t\treturn ns;\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n/******/\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = \"./src/sound-box.worker.js\");\n/******/ })\n/************************************************************************/\n/******/ ({\n\n/***/ \"./src/sound-box.worker.js\":\n/*!*********************************!*\\\n  !*** ./src/sound-box.worker.js ***!\n  \\*********************************/\n/*! exports provided: default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n/* -*- mode: javascript; tab-width: 4; indent-tabs-mode: nil; -*-\n *\n * Copyright (c) 2011-2013 Marcus Geelnard\n *\n * This software is provided 'as-is', without any express or implied\n * warranty. In no event will the authors be held liable for any damages\n * arising from the use of this software.\n *\n * Permission is granted to anyone to use this software for any purpose,\n * including commercial applications, and to alter it and redistribute it\n * freely, subject to the following restrictions:\n *\n * 1. The origin of this software must not be misrepresented; you must not\n *    claim that you wrote the original software. If you use this software\n *    in a product, an acknowledgment in the product documentation would be\n *    appreciated but is not required.\n *\n * 2. Altered source versions must be plainly marked as such, and must not be\n *    misrepresented as being the original software.\n *\n * 3. This notice may not be removed or altered from any source\n *    distribution.\n *\n */\n\n\n\nlet Soundbox = function () {\n  //--------------------------------------------------------------------------\n  // Private methods\n  //--------------------------------------------------------------------------\n\n  // Oscillators\n  var osc_sin = function (value) {\n    return Math.sin(value * 6.283184);\n  };\n\n  var osc_saw = function (value) {\n    return 2 * (value % 1) - 1;\n  };\n\n  var osc_square = function (value) {\n    return value % 1 < 0.5 ? 1 : -1;\n  };\n\n  var osc_tri = function (value) {\n    var v2 = (value % 1) * 4;\n    if (v2 < 2) return v2 - 1;\n    return 3 - v2;\n  };\n\n  var getnotefreq = function (n) {\n    // 174.61.. / 44100 = 0.003959503758 (F3)\n    return 0.003959503758 * Math.pow(2, (n - 128) / 12);\n  };\n\n  var createNote = function (instr, n, rowLen) {\n    var osc1 = mOscillators[instr.i[0]],\n      o1vol = instr.i[1],\n      o1xenv = instr.i[3],\n      osc2 = mOscillators[instr.i[4]],\n      o2vol = instr.i[5],\n      o2xenv = instr.i[8],\n      noiseVol = instr.i[9],\n      attack = instr.i[10] * instr.i[10] * 4,\n      sustain = instr.i[11] * instr.i[11] * 4,\n      release = instr.i[12] * instr.i[12] * 4,\n      releaseInv = 1 / release,\n      arp = instr.i[13],\n      arpInterval = rowLen * Math.pow(2, 2 - instr.i[14]);\n\n    var noteBuf = new Int32Array(attack + sustain + release);\n\n    // Re-trig oscillators\n    var c1 = 0,\n      c2 = 0;\n\n    // Local variables.\n    var j, j2, e, t, rsample, o1t, o2t;\n\n    // Generate one note (attack + sustain + release)\n    for (j = 0, j2 = 0; j < attack + sustain + release; j++ , j2++) {\n      if (j2 >= 0) {\n        // Switch arpeggio note.\n        arp = (arp >> 8) | ((arp & 255) << 4);\n        j2 -= arpInterval;\n\n        // Calculate note frequencies for the oscillators\n        o1t = getnotefreq(n + (arp & 15) + instr.i[2] - 128);\n        o2t =\n          getnotefreq(n + (arp & 15) + instr.i[6] - 128) *\n          (1 + 0.0008 * instr.i[7]);\n      }\n\n      // Envelope\n      e = 1;\n      if (j < attack) {\n        e = j / attack;\n      } else if (j >= attack + sustain) {\n        e -= (j - attack - sustain) * releaseInv;\n      }\n\n      // Oscillator 1\n      t = o1t;\n      if (o1xenv) {\n        t *= e * e;\n      }\n      c1 += t;\n      rsample = osc1(c1) * o1vol;\n\n      // Oscillator 2\n      t = o2t;\n      if (o2xenv) {\n        t *= e * e;\n      }\n      c2 += t;\n      rsample += osc2(c2) * o2vol;\n\n      // Noise oscillator\n      if (noiseVol) {\n        rsample += (2 * Math.random() - 1) * noiseVol;\n      }\n\n      // Add to (mono) channel buffer\n      noteBuf[j] = (80 * rsample * e) | 0;\n    }\n\n    return noteBuf;\n  };\n\n  //--------------------------------------------------------------------------\n  // Private members\n  //--------------------------------------------------------------------------\n\n  // Array of oscillator functions\n  var mOscillators = [osc_sin, osc_square, osc_saw, osc_tri];\n\n  // Private variables set up by init()\n  var mSong, mLastRow, mCurrentCol, mNumWords, mMixBuf;\n\n  //--------------------------------------------------------------------------\n  // Initialization\n  //--------------------------------------------------------------------------\n\n  this.init = function (song) {\n    // Define the song\n    mSong = song;\n\n    // Init iteration state variables\n    mLastRow = song.endPattern;\n    mCurrentCol = 0;\n\n    // Prepare song info\n    mNumWords = song.rowLen * song.patternLen * (mLastRow + 1) * 2;\n\n    // Create work buffer (initially cleared)\n    mMixBuf = new Int32Array(mNumWords);\n  };\n\n  //--------------------------------------------------------------------------\n  // Public methods\n  //--------------------------------------------------------------------------\n\n  // Generate audio data for a single track\n  this.generate = function () {\n    // Local variables\n    var i,\n      j,\n      b,\n      p,\n      row,\n      col,\n      n,\n      cp,\n      k,\n      t,\n      lfor,\n      e,\n      x,\n      rsample,\n      rowStartSample,\n      f,\n      da;\n\n    // Put performance critical items in local variables\n    var chnBuf = new Int32Array(mNumWords),\n      instr = mSong.songData[mCurrentCol],\n      rowLen = mSong.rowLen,\n      patternLen = mSong.patternLen;\n\n    // Clear effect state\n    var low = 0,\n      band = 0,\n      high;\n    var lsample,\n      filterActive = false;\n\n    // Clear note cache.\n    var noteCache = [];\n\n    // Patterns\n    for (p = 0; p <= mLastRow; ++p) {\n      cp = instr.p[p];\n\n      // Pattern rows\n      for (row = 0; row < patternLen; ++row) {\n        // Execute effect command.\n        var cmdNo = cp ? instr.c[cp - 1].f[row] : 0;\n        if (cmdNo) {\n          instr.i[cmdNo - 1] = instr.c[cp - 1].f[row + patternLen] || 0;\n\n          // Clear the note cache since the instrument has changed.\n          if (cmdNo < 16) {\n            noteCache = [];\n          }\n        }\n\n        // Put performance critical instrument properties in local variables\n        var oscLFO = mOscillators[instr.i[15]],\n          lfoAmt = instr.i[16] / 512,\n          lfoFreq = Math.pow(2, instr.i[17] - 9) / rowLen,\n          fxLFO = instr.i[18],\n          fxFilter = instr.i[19],\n          fxFreq = (instr.i[20] * 43.23529 * 3.141592) / 44100,\n          q = 1 - instr.i[21] / 255,\n          dist = instr.i[22] * 1e-5,\n          drive = instr.i[23] / 32,\n          panAmt = instr.i[24] / 512,\n          panFreq = (6.283184 * Math.pow(2, instr.i[25] - 9)) / rowLen,\n          dlyAmt = instr.i[26] / 255,\n          dly = (instr.i[27] * rowLen) & ~1; // Must be an even number\n\n        // Calculate start sample number for this row in the pattern\n        rowStartSample = (p * patternLen + row) * rowLen;\n\n        // Generate notes for this pattern row\n        for (col = 0; col < 4; ++col) {\n          n = cp ? instr.c[cp - 1].n[row + col * patternLen] : 0;\n          if (n) {\n            if (!noteCache[n]) {\n              noteCache[n] = createNote(instr, n, rowLen);\n            }\n\n            // Copy note from the note cache\n            var noteBuf = noteCache[n];\n            for (\n              j = 0, i = rowStartSample * 2;\n              j < noteBuf.length;\n              j++ , i += 2\n            ) {\n              chnBuf[i] += noteBuf[j];\n            }\n          }\n        }\n\n        // Perform effects for this pattern row\n        for (j = 0; j < rowLen; j++) {\n          // Dry mono-sample\n          k = (rowStartSample + j) * 2;\n          rsample = chnBuf[k];\n\n          // We only do effects if we have some sound input\n          if (rsample || filterActive) {\n            // State variable filter\n            f = fxFreq;\n            if (fxLFO) {\n              f *= oscLFO(lfoFreq * k) * lfoAmt + 0.5;\n            }\n            f = 1.5 * Math.sin(f);\n            low += f * band;\n            high = q * (rsample - band) - low;\n            band += f * high;\n            rsample = fxFilter == 3 ? band : fxFilter == 1 ? high : low;\n\n            // Distortion\n            if (dist) {\n              rsample *= dist;\n              rsample =\n                rsample < 1 ? (rsample > -1 ? osc_sin(rsample * 0.25) : -1) : 1;\n              rsample /= dist;\n            }\n\n            // Drive\n            rsample *= drive;\n\n            // Is the filter active (i.e. still audiable)?\n            filterActive = rsample * rsample > 1e-5;\n\n            // Panning\n            t = Math.sin(panFreq * k) * panAmt + 0.5;\n            lsample = rsample * (1 - t);\n            rsample *= t;\n          } else {\n            lsample = 0;\n          }\n\n          // Delay is always done, since it does not need sound input\n          if (k >= dly) {\n            // Left channel = left + right[-p] * t\n            lsample += chnBuf[k - dly + 1] * dlyAmt;\n\n            // Right channel = right + left[-p] * t\n            rsample += chnBuf[k - dly] * dlyAmt;\n          }\n\n          // Store in stereo channel buffer (needed for the delay effect)\n          chnBuf[k] = lsample | 0;\n          chnBuf[k + 1] = rsample | 0;\n\n          // ...and add to stereo mix buffer\n          mMixBuf[k] += lsample | 0;\n          mMixBuf[k + 1] += rsample | 0;\n        }\n      }\n    }\n\n    // Next iteration. Return progress (1.0 == done!).\n    mCurrentCol++;\n    return mCurrentCol / mSong.numChannels;\n  };\n\n  // Create a WAVE formatted Uint8Array from the generated audio data\n  this.createWave = function () {\n    // Create WAVE header\n    var headerLen = 44;\n    var l1 = headerLen + mNumWords * 2 - 8;\n    var l2 = l1 - 36;\n    var wave = new Uint8Array(headerLen + mNumWords * 2);\n    wave.set([\n      82,\n      73,\n      70,\n      70,\n      l1 & 255,\n      (l1 >> 8) & 255,\n      (l1 >> 16) & 255,\n      (l1 >> 24) & 255,\n      87,\n      65,\n      86,\n      69,\n      102,\n      109,\n      116,\n      32,\n      16,\n      0,\n      0,\n      0,\n      1,\n      0,\n      2,\n      0,\n      68,\n      172,\n      0,\n      0,\n      16,\n      177,\n      2,\n      0,\n      4,\n      0,\n      16,\n      0,\n      100,\n      97,\n      116,\n      97,\n      l2 & 255,\n      (l2 >> 8) & 255,\n      (l2 >> 16) & 255,\n      (l2 >> 24) & 255\n    ]);\n\n    // Append actual wave data\n    for (var i = 0, idx = headerLen; i < mNumWords; ++i) {\n      // Note: We clamp here\n      var y = mMixBuf[i];\n      y = y < -32767 ? -32767 : y > 32767 ? 32767 : y;\n      wave[idx++] = y & 255;\n      wave[idx++] = (y >> 8) & 255;\n    }\n\n    // Return the WAVE formatted typed array\n    return wave;\n  };\n\n  // Get n samples of wave data at time t [s]. Wave data in range [-2,2].\n  this.getData = function (t, n) {\n    var i = 2 * Math.floor(t * 44100);\n    var d = new Array(n);\n    for (var j = 0; j < 2 * n; j += 1) {\n      var k = i + j;\n      d[j] = t > 0 && k < mMixBuf.length ? mMixBuf[k] / 32768 : 0;\n    }\n    return d;\n  };\n};\n\n// This music has been exported by SoundBox. You can use it with\n// http://sb.bitsnbites.eu/player-small.js in your own product.\n\n// See http://sb.bitsnbites.eu/demo.html for an example of how to\n// use it in a demo.\n\n// Song data\nvar song = {\n  songData: [\n    { // Instrument 0\n      i: [\n        0, // OSC1_WAVEFORM\n        100, // OSC1_VOL\n        128, // OSC1_SEMI\n        0, // OSC1_XENV\n        1, // OSC2_WAVEFORM\n        201, // OSC2_VOL\n        128, // OSC2_SEMI\n        0, // OSC2_DETUNE\n        0, // OSC2_XENV\n        0, // NOISE_VOL\n        0, // ENV_ATTACK\n        8, // ENV_SUSTAIN\n        28, // ENV_RELEASE\n        0, // ARP_CHORD\n        0, // ARP_SPEED\n        0, // LFO_WAVEFORM\n        194, // LFO_AMT\n        4, // LFO_FREQ\n        1, // LFO_FX_FREQ\n        3, // FX_FILTER\n        25, // FX_FREQ\n        191, // FX_RESONANCE\n        115, // FX_DIST\n        244, // FX_DRIVE\n        147, // FX_PAN_AMT\n        6, // FX_PAN_FREQ\n        43, // FX_DELAY_AMT\n        4 // FX_DELAY_TIME\n      ],\n      // Patterns\n      p: [5, 1, 2, 2, 1, 1, 1, 1, 3, 4, 1, 2, 1, 2, 1, 2, , , 7, 7, 7, 7, 7, 7, 7, 7],\n      // Columns\n      c: [\n        {\n          n: [132, 132, 134, 134, 135, 135, 132, 132, 137, 137, 135, 135, 134, 134, 135, 135, 139, 139, 137, 137, 135, 135, 137, 137, 134, , 133, , 132, , 131],\n          f: [21, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 48]\n        },\n        {\n          n: [132, 132, 134, 134, 135, 135, 132, 132, 137, 137, 135, 135, 134, 134, 135, 135, 139, 139, 137, 137, 135, 135, 137, 137, 139, 139, 135, 135, 134, 134, 130, 130],\n          f: [, , , , , , , , , , , , , , , , , , , , , , , , , , , 11, 13, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 31]\n        },\n        {\n          n: [],\n          f: []\n        },\n        {\n          n: [159, , , , , , , , 158, , , , , , , , 157, , , , , , , , 156, 155, 154, 153, 152, 151, 150, 149],\n          f: [13, , , , , , , , , , , , , , , , , , , , , , , , 13, , 13, , 13, , 13, 11, 29, , , , , , , , , , , , , , , , , , , , , , , , 32, , 41, , 29, , 25, 15]\n        },\n        {\n          n: [132, 132, 134, 134, 135, 135, 132, 132, 137, 137, 135, 135, 134, 134, 135, 135, 139, 139, 137, 137, 135, 135, 137, 137, 139, 139, 135, 135, 134, 134, 130, 130],\n          f: [13, 11, 21, 17, , , , , , , , , , , , , , , , , , , , , , , , , , , , 17, 29, , 25, 113, , , , , , , , , , , , , , , , , , , , , , , , , , , , 194]\n        },\n        {\n          n: [120, , , , , , , , 132, , , , , , , , 120, , , , , , , , 108],\n          f: []\n        },\n        {\n          n: [132, 144, 134, 146, 132, 144, 135, 147, 132, 144, 137, 149, 132, 144, 139, 151, 140, 152, 139, 151, 137, 149, 139, 151, 138, 150, 137, 149, 135, 147, 134, 146],\n          f: []\n        }\n      ]\n    },\n    { // Instrument 1\n      i: [\n        0, // OSC1_WAVEFORM\n        255, // OSC1_VOL\n        117, // OSC1_SEMI\n        1, // OSC1_XENV\n        0, // OSC2_WAVEFORM\n        255, // OSC2_VOL\n        110, // OSC2_SEMI\n        0, // OSC2_DETUNE\n        1, // OSC2_XENV\n        0, // NOISE_VOL\n        4, // ENV_ATTACK\n        6, // ENV_SUSTAIN\n        35, // ENV_RELEASE\n        0, // ARP_CHORD\n        0, // ARP_SPEED\n        0, // LFO_WAVEFORM\n        0, // LFO_AMT\n        0, // LFO_FREQ\n        0, // LFO_FX_FREQ\n        2, // FX_FILTER\n        14, // FX_FREQ\n        1, // FX_RESONANCE\n        1, // FX_DIST\n        39, // FX_DRIVE\n        76, // FX_PAN_AMT\n        5, // FX_PAN_FREQ\n        0, // FX_DELAY_AMT\n        0 // FX_DELAY_TIME\n      ],\n      // Patterns\n      p: [, , 1, 3, 1, 3, 1, 3, 2, , , , 1, 3, 1, 3, 1, 3, , , 1, 3, 1, 3, 1, 3],\n      // Columns\n      c: [\n        {\n          n: [147, , , , , , 147, , , , 147, , , , , , 147, , , , , , 147, , , , 147, , , , 147],\n          f: []\n        },\n        {\n          n: [147],\n          f: []\n        },\n        {\n          n: [147, , , , , , 147, , , , 147, , , , 147, , 147, , , , , , 147, , , , 147, , , , 147, 147],\n          f: []\n        }\n      ]\n    },\n    { // Instrument 2\n      i: [\n        0, // OSC1_WAVEFORM\n        0, // OSC1_VOL\n        140, // OSC1_SEMI\n        0, // OSC1_XENV\n        0, // OSC2_WAVEFORM\n        0, // OSC2_VOL\n        140, // OSC2_SEMI\n        0, // OSC2_DETUNE\n        0, // OSC2_XENV\n        60, // NOISE_VOL\n        4, // ENV_ATTACK\n        10, // ENV_SUSTAIN\n        68, // ENV_RELEASE\n        0, // ARP_CHORD\n        0, // ARP_SPEED\n        0, // LFO_WAVEFORM\n        187, // LFO_AMT\n        5, // LFO_FREQ\n        0, // LFO_FX_FREQ\n        1, // FX_FILTER\n        239, // FX_FREQ\n        135, // FX_RESONANCE\n        0, // FX_DIST\n        32, // FX_DRIVE\n        108, // FX_PAN_AMT\n        5, // FX_PAN_FREQ\n        16, // FX_DELAY_AMT\n        4 // FX_DELAY_TIME\n      ],\n      // Patterns\n      p: [, , 1, 1, 2, 3, 2, 3, 4, , , , 2, 3, 2, 3, 2, 3, , , 5, 5, 5, 5, 5, 5],\n      // Columns\n      c: [\n        {\n          n: [, , , , 147, , , , , , , , 148, , , , , , , , 147, , , , , , , , 147],\n          f: [13, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 35]\n        },\n        {\n          n: [, , , , 147, , , 147, , , , , 148, , , , , , , , 147, , , 147, , , 147, , , , 147],\n          f: [13, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 35]\n        },\n        {\n          n: [, , , , 147, , , 147, , , , , 148, , , , , , , , 147, , , 147, , , 147, , , 147, 147, 147],\n          f: [13, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 35]\n        },\n        {\n          n: [147],\n          f: [13, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 68]\n        },\n        {\n          n: [147, , , 147, , , 147, , 147, , , 147, , 147, , 147, 147, , , 147, , , 147, , 147, , , 147, , 147, , 147],\n          f: [13, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 35]\n        }\n      ]\n    },\n    { // Instrument 3\n      i: [\n        2, // OSC1_WAVEFORM\n        192, // OSC1_VOL\n        128, // OSC1_SEMI\n        0, // OSC1_XENV\n        2, // OSC2_WAVEFORM\n        192, // OSC2_VOL\n        140, // OSC2_SEMI\n        18, // OSC2_DETUNE\n        0, // OSC2_XENV\n        0, // NOISE_VOL\n        107, // ENV_ATTACK\n        115, // ENV_SUSTAIN\n        138, // ENV_RELEASE\n        0, // ARP_CHORD\n        0, // ARP_SPEED\n        0, // LFO_WAVEFORM\n        136, // LFO_AMT\n        5, // LFO_FREQ\n        1, // LFO_FX_FREQ\n        2, // FX_FILTER\n        8, // FX_FREQ\n        93, // FX_RESONANCE\n        22, // FX_DIST\n        56, // FX_DRIVE\n        148, // FX_PAN_AMT\n        5, // FX_PAN_FREQ\n        85, // FX_DELAY_AMT\n        8 // FX_DELAY_TIME\n      ],\n      // Patterns\n      p: [3, , 2, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],\n      // Columns\n      c: [\n        {\n          n: [120],\n          f: []\n        },\n        {\n          n: [120],\n          f: []\n        },\n        {\n          n: [120],\n          f: [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 24, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 56]\n        }\n      ]\n    },\n    { // Instrument 4\n      i: [\n        3, // OSC1_WAVEFORM\n        0, // OSC1_VOL\n        127, // OSC1_SEMI\n        0, // OSC1_XENV\n        3, // OSC2_WAVEFORM\n        68, // OSC2_VOL\n        127, // OSC2_SEMI\n        0, // OSC2_DETUNE\n        1, // OSC2_XENV\n        218, // NOISE_VOL\n        11, // ENV_ATTACK\n        0, // ENV_SUSTAIN\n        40, // ENV_RELEASE\n        0, // ARP_CHORD\n        0, // ARP_SPEED\n        1, // LFO_WAVEFORM\n        55, // LFO_AMT\n        4, // LFO_FREQ\n        1, // LFO_FX_FREQ\n        2, // FX_FILTER\n        67, // FX_FREQ\n        115, // FX_RESONANCE\n        124, // FX_DIST\n        190, // FX_DRIVE\n        67, // FX_PAN_AMT\n        6, // FX_PAN_FREQ\n        39, // FX_DELAY_AMT\n        1 // FX_DELAY_TIME\n      ],\n      // Patterns\n      p: [, , , 2, 1, 2, 1, 2, 3, , , , 1, 2, 1, 2, 1, 2, , , 1, 4, 1, 4, 1, 4],\n      // Columns\n      c: [\n        {\n          n: [, , , , 147, , , , , , , , 147, , , , , , , , 147, , , , , , , , 147],\n          f: []\n        },\n        {\n          n: [, , , , 147, , , , , , 147, , 147, , , , , , , , 147, , , , , , , , 147],\n          f: []\n        },\n        {\n          n: [147],\n          f: []\n        },\n        {\n          n: [, , , , 147, , , , , , , , 147, , , , , , , , 147, , , , , , , , 147, , , 147],\n          f: []\n        }\n      ]\n    },\n    { // Instrument 5\n      i: [\n        3, // OSC1_WAVEFORM\n        91, // OSC1_VOL\n        128, // OSC1_SEMI\n        0, // OSC1_XENV\n        0, // OSC2_WAVEFORM\n        95, // OSC2_VOL\n        128, // OSC2_SEMI\n        12, // OSC2_DETUNE\n        0, // OSC2_XENV\n        0, // NOISE_VOL\n        12, // ENV_ATTACK\n        0, // ENV_SUSTAIN\n        67, // ENV_RELEASE\n        0, // ARP_CHORD\n        0, // ARP_SPEED\n        0, // LFO_WAVEFORM\n        0, // LFO_AMT\n        0, // LFO_FREQ\n        0, // LFO_FX_FREQ\n        2, // FX_FILTER\n        255, // FX_FREQ\n        15, // FX_RESONANCE\n        0, // FX_DIST\n        32, // FX_DRIVE\n        83, // FX_PAN_AMT\n        3, // FX_PAN_FREQ\n        51, // FX_DELAY_AMT\n        4 // FX_DELAY_TIME\n      ],\n      // Patterns\n      p: [, , , , 1, 2, 1, 2, 1, 2, , , 1, 2, 3, 2, 1, 2, , , , , 5, 4, 5, 4],\n      // Columns\n      c: [\n        {\n          n: [156, , , 164, , , 163, , 161, , , , , , , , , , 158, , 159, , 161, , 159, , 158, , 159, , 154, , 159],\n          f: [5, 13, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 67]\n        },\n        {\n          n: [144, , , 147, , , 149, , 151, , , , , , , , , , 149, , 151, , 152, , 151, , 151, , 147, , 147, , 139],\n          f: []\n        },\n        {\n          n: [156, , , 156, , , 156, , 154, , , 154, , , 154, , 152, , , 152, , , 152, , 151, , , 147, , , 146, , , , 151, , , 151, , 151, , , 146, , , 146, , 146, , , 144, , , 144, , 144, , , 142, , , 139, , 137],\n          f: [5, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 3]\n        },\n        {\n          n: [163, , 164, , 166, , 163, , 163, , 164, , 166, , 163, , 163, , 164, , 166, , 163, , 163, , 164, , 166, , 163],\n          f: [13, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 25]\n        },\n        {\n          n: [168, , 170, , 171, , 168, , 168, , 170, , 171, , 168, , 159, , 159, , 158, , 158, , 157, , 157, , 156, , 156],\n          f: [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 13, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 67]\n        }\n      ]\n    },\n    { // Instrument 6\n      i: [\n        0, // OSC1_WAVEFORM\n        146, // OSC1_VOL\n        140, // OSC1_SEMI\n        0, // OSC1_XENV\n        1, // OSC2_WAVEFORM\n        224, // OSC2_VOL\n        128, // OSC2_SEMI\n        3, // OSC2_DETUNE\n        0, // OSC2_XENV\n        0, // NOISE_VOL\n        61, // ENV_ATTACK\n        0, // ENV_SUSTAIN\n        63, // ENV_RELEASE\n        0, // ARP_CHORD\n        0, // ARP_SPEED\n        3, // LFO_WAVEFORM\n        179, // LFO_AMT\n        5, // LFO_FREQ\n        1, // LFO_FX_FREQ\n        3, // FX_FILTER\n        37, // FX_FREQ\n        162, // FX_RESONANCE\n        0, // FX_DIST\n        67, // FX_DRIVE\n        150, // FX_PAN_AMT\n        3, // FX_PAN_FREQ\n        37, // FX_DELAY_AMT\n        2 // FX_DELAY_TIME\n      ],\n      // Patterns\n      p: [, 1, , , , , , , , , 1, 2, 3, , 1, 2, 1, 2, 3, , 4, 5],\n      // Columns\n      c: [\n        {\n          n: [, , , , , , , , , , , , , , , , , , , , , , , , 122, , 121, , 120, , 119],\n          f: []\n        },\n        {\n          n: [, , , , , , , , , , , , 110, 109, , , , , , , , , , , , , , , 132, 144, 120, 108],\n          f: [11, , , , , , , , , , , , , , , , , , , , , , , , , , , , 11, , , , 95, , , , , , , , , , , , , , , , , , , , , , , , , , , , 29]\n        },\n        {\n          n: [123],\n          f: [24, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 24, 52, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 67]\n        },\n        {\n          n: [120, , , , , , 120, , 120, , , , , , , , , , , , , , , , , , , , , , , , 123, , , , , , 123, , 123, , , , , , , , , , , , , , , , , , , , , , , , 125, , , , , , 125, , 125],\n          f: [11, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 95]\n        },\n        {\n          n: [120, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 123, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 125],\n          f: []\n        }\n      ]\n    },\n    { // Instrument 7\n      i: [\n        2, // OSC1_WAVEFORM\n        138, // OSC1_VOL\n        116, // OSC1_SEMI\n        0, // OSC1_XENV\n        2, // OSC2_WAVEFORM\n        138, // OSC2_VOL\n        128, // OSC2_SEMI\n        4, // OSC2_DETUNE\n        0, // OSC2_XENV\n        0, // NOISE_VOL\n        47, // ENV_ATTACK\n        48, // ENV_SUSTAIN\n        107, // ENV_RELEASE\n        124, // ARP_CHORD\n        3, // ARP_SPEED\n        0, // LFO_WAVEFORM\n        139, // LFO_AMT\n        4, // LFO_FREQ\n        1, // LFO_FX_FREQ\n        3, // FX_FILTER\n        64, // FX_FREQ\n        160, // FX_RESONANCE\n        3, // FX_DIST\n        32, // FX_DRIVE\n        147, // FX_PAN_AMT\n        4, // FX_PAN_FREQ\n        121, // FX_DELAY_AMT\n        5 // FX_DELAY_TIME\n      ],\n      // Patterns\n      p: [, , , , , , , , 1, , , , , , , , , , 1],\n      // Columns\n      c: [\n        {\n          n: [156, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 168],\n          f: []\n        }\n      ]\n    },\n  ],\n  rowLen: 5513,   // In sample lengths\n  patternLen: 32,  // Rows per pattern\n  endPattern: 25,  // End pattern\n  numChannels: 8  // Number of channels\n};\n\nlet player = new Soundbox();\nplayer.init(song);\n\n// Initialize music generation (player).\nplayer.init(song);\n\n// Generate music...\nlet done = false;\nsetInterval(function () {\n  if (done) {\n    return;\n  }\n\n  done = player.generate() >= 1;\n\n  if (done) {\n    // Put the generated song in an Audio element.\n    let wave = player.createWave();\n    postMessage(wave);\n  }\n}, 10);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (player);\n\n\n/***/ })\n\n/******/ });\n//# sourceMappingURL=9d71fd9bba6c2a765428.worker.js.map", null);
};

/***/ })

/******/ });
//# sourceMappingURL=main.js.map