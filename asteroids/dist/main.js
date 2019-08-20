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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\n\nconst COLOR = \"black\";\nconst RADIUS = 22;\n\nfunction Asteroid(options) {\n  options.color = COLOR;\n  options.radius = RADIUS;\n  options.pos = options.pos || options.game.randomPos();\n  options.vel = options.vel || Util.randomVec(length = 7);\n  MovingObject.call(this, options);\n    \n}\n\n\nUtil.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\nconst DIM_X = 1000;\nconst DIM_Y = 600;\nconst NUM_ASTEROIDS = 10;\n\nfunction Game() {\n  this.dimX = DIM_X;\n  this.dimY = DIM_Y;\n  this.numAsteroids = NUM_ASTEROIDS;\n  this.asteroids = [];\n  this.addAsteroids();\n}\n\nGame.prototype.addAsteroids = function() {\n\n  for(let i = 0; i < this.numAsteroids; i++) {\n \n    this.asteroids.push(new Asteroid({ pos: this.randomPos(), game: this }));\n  }\n};\n\nGame.prototype.randomPos = function() {\n  let posX = Math.random() * 1000;\n  let posY = Math.random() * 600;\n  let pos = [posX, posY];\n  return pos;\n}\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0, 0, 1000, 600);\n  // this.asteroids.forEach( function(asteroid){\n  //   asteroid.draw(ctx);\n  // } );\n  for(let i = 0; i < this.asteroids.length; i++){\n    this.asteroids[i].draw(ctx);\n  }\n \n\n};\n\nGame.prototype.moveObjects = function() {\n  for (let i = 0; i < this.asteroids.length; i++) {\n    this.asteroids[i].move();\n  }\n}\n\nGame.prototype.wrap = function(pos){\n  // debugger\n  if(pos[0] < 0) {\n    pos[0] = 1000;\n  } else if (pos[0] > 1000) {\n    pos[0] = 0;\n  } else if(pos[1] < 0) {\n    pos[1] = 600;\n  } else if (pos[1] > 600) {\n    pos[1] = 0;\n  }\n\n  return pos;\n}\n\nGame.prototype.checkCollisions = function() {\n  for(let i = 0; i < this.asteroids.length; i++) {\n    for(let j = 0; j < this.asteroids.length; j++) {\n      if(j < i) {\n        if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {\n          return alert(\"COLLISION\");\n        }\n      }\n    }\n  }\n  return false;\n};\n\nGame.prototype.step = function() {\n  this.moveObjects();\n  this.checkCollisions();\n};\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\nfunction GameView(game, ctx){\n  this.game = game;\n  this.ctx = ctx;\n}\n\nGameView.prototype.start = function(){\n  let that = this;\n  window.setInterval( function(){\n      that.game.draw(that.ctx);\n      that.game.moveObjects();\n    } , 20\n  );\n\n};\n\nmodule.exports = GameView;\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nwindow.MovingObject = MovingObject;\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n  const canvas = document.getElementById('game-canvas');\n  const ctx = canvas.getContext('2d');\n\n  // const mo = new MovingObject(\n  //   { pos: [30, 30], vel: [10, 10], radius: 15, color: \"#00FF00\" }\n  // );\n  const g1 = new Game();\n  // g1.draw(ctx);\n  //g1.addAsteroids();\n  const gv = new GameView(g1, ctx);\n  gv.start();\n\n  \n\n  // mo.draw(ctx);\n  //let a1 = new Asteroid({ pos: g1.randomPos() });\n  //a1.draw(ctx);\n  \n});\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(options) {\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n  this.game = options.game;\n\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n\n  ctx.arc(\n    this.pos[0],\n    this.pos[1],\n    this.radius,\n    0,\n    2 * Math.PI,\n    false\n  );\n\n  ctx.fill();\n\n};\n\nMovingObject.prototype.move = function() {\n  this.pos = this.game.wrap(this.pos);\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n}\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n  let [x_1, y_1] = this.pos;\n  let [x_2, y_2] = otherObject.pos;\n  let dist = Math.sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2);\n  if(dist < (this.radius + otherObject.radis)) {\n    return true;\n  } else {\n    return false;\n  }\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    function Surrogate() {};\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n  \n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n  \n}\n\nmodule.exports = Util;\n\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });