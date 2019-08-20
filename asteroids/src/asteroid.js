const Util = require('./utils.js');
const MovingObject = require('./moving_object.js');


const COLOR = "black";
const RADIUS = 22;

function Asteroid(options) {
  options.color = COLOR;
  options.radius = RADIUS;
  options.pos = options.pos || options.game.randomPos();
  options.vel = options.vel || Util.randomVec(length = 7);
  MovingObject.call(this, options);
    
}


Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;