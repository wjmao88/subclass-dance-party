/* global $random, Dancer, inherit */
/* exported MovingDancer */
var MovingDancer = function(top, left, timeBetweenSteps, stepDistance){
  this.stepDistance = stepDistance || 50;

  //flexible super protoype inheritance
  inherit.superConstruct(this, MovingDancer, arguments);
  this.$node.addClass('moving-dancer');
};

inherit.extends(MovingDancer, Dancer);

// MovingDancer.prototype = Object.create(Dancer.prototype);
// MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.step = function(){
  this.move($random.direction());
  Dancer.prototype.step.apply(this, arguments);
};

MovingDancer.prototype.move = function(direction){
  this.setPosition(
    this.top + direction.top * this.stepDistance,
    this.left + direction.left * this.stepDistance);
};

