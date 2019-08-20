const Asteroid = require("./asteroid");

const DIM_X = 1000;
const DIM_Y = 600;
const NUM_ASTEROIDS = 10;

function Game() {
  this.dimX = DIM_X;
  this.dimY = DIM_Y;
  this.numAsteroids = NUM_ASTEROIDS;
  this.asteroids = [];
  this.addAsteroids();
}

Game.prototype.addAsteroids = function() {

  for(let i = 0; i < this.numAsteroids; i++) {
 
    this.asteroids.push(new Asteroid({ pos: this.randomPos(), game: this }));
  }
};

Game.prototype.randomPos = function() {
  let posX = Math.random() * 1000;
  let posY = Math.random() * 600;
  let pos = [posX, posY];
  return pos;
}

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, 1000, 600);
  // this.asteroids.forEach( function(asteroid){
  //   asteroid.draw(ctx);
  // } );
  for(let i = 0; i < this.asteroids.length; i++){
    this.asteroids[i].draw(ctx);
  }
 

};

Game.prototype.moveObjects = function() {
  for (let i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].move();
  }
}

Game.prototype.wrap = function(pos){
  // debugger
  if(pos[0] < 0) {
    pos[0] = 1000;
  } else if (pos[0] > 1000) {
    pos[0] = 0;
  } else if(pos[1] < 0) {
    pos[1] = 600;
  } else if (pos[1] > 600) {
    pos[1] = 0;
  }

  return pos;
}

Game.prototype.checkCollisions = function() {
  for(let i = 0; i < this.asteroids.length; i++) {
    for(let j = 0; j < this.asteroids.length; j++) {
      if(j < i) {
        if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
          return alert("COLLISION");
        }
      }
    }
  }
  return false;
};

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
};


module.exports = Game;