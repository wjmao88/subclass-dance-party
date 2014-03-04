/* global MovingDancer */
/* exported BouncyDancer */
var BouncyDancer = function(){
  MovingDancer.apply(this, arguments);
  this.$node.addClass('moving-dancer');
  //bouncy dancer should have small step size
  this.stepDistance = this.stepDistance/100;
  this.timeBetweenSteps = this.timeBetweenSteps/100 ;
  this.$node.addClass('bouncy-dancer');
};

BouncyDancer.prototype = Object.create(MovingDancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.move = function(direction){
  var topChange = direction.top * this.stepDistance;
  var leftChange = direction.left * this.stepDistance;

  this.setPosition(
    this.top + topChange > window.innerHeight ? this.top + topChange : this.top - topChange,
    this.left + leftChange > window.innerWidth ? this.left + leftChange : this.left - leftChange);
};
