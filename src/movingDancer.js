/* global $random, Dancer */
/* exported MovingDancer */
var MovingDancer = function(top, left, timeBetweenSteps, stepDistance){
  this.stepDistance = stepDistance || 50;
  Dancer.apply(this, arguments);
  this.$node.addClass('moving-dancer');
};

MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.step = function(){
  this.move($random.direction());
  Dancer.prototype.step.apply(this, arguments);
};

MovingDancer.prototype.move = function(direction){
  this.setPosition(
    this.top + direction.top * this.stepDistance,
    this.left + direction.left * this.stepDistance);
};

