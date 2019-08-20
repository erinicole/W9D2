const MovingObject = require('./moving_object.js');
const Asteroid = require('./asteroid.js');
const Game = require('./game.js');
const GameView = require('./game_view.js');
window.MovingObject = MovingObject;

window.addEventListener('DOMContentLoaded', (event) => {
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');

  // const mo = new MovingObject(
  //   { pos: [30, 30], vel: [10, 10], radius: 15, color: "#00FF00" }
  // );
  const g1 = new Game();
  // g1.draw(ctx);
  //g1.addAsteroids();
  const gv = new GameView(g1, ctx);
  gv.start();

  

  // mo.draw(ctx);
  //let a1 = new Asteroid({ pos: g1.randomPos() });
  //a1.draw(ctx);
  
});

