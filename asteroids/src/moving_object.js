function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = options.game;

}

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();

};

MovingObject.prototype.move = function() {
  this.pos = this.game.wrap(this.pos);
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
}

MovingObject.prototype.isCollidedWith = function(otherObject) {
  let [x_1, y_1] = this.pos;
  let [x_2, y_2] = otherObject.pos;
  let dist = Math.sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2);
  if(dist < (this.radius + otherObject.radis)) {
    return true;
  } else {
    return false;
  }
}

module.exports = MovingObject;