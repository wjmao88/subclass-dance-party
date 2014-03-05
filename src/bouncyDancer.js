/* global MovingDancer, inherit */
/* exported BouncyDancer */
var BouncyDancer = function(){
  //flexible super protoype inheritance
  inherit.superConstruct(this, BouncyDancer, arguments);
  this.$node.addClass('moving-dancer');
  //bouncy dancer should have small step size
  this.stepDistance = this.stepDistance/100;
  this.timeBetweenSteps = this.timeBetweenSteps/100 ;
  this.$node.addClass('bouncy-dancer');
};

inherit.extends(BouncyDancer, MovingDancer);

BouncyDancer.prototype.move = function(direction){
  var topChange = direction.top * this.stepDistance;
  var leftChange = direction.left * this.stepDistance;

  this.setPosition(
    this.top + topChange > window.innerHeight ? this.top + topChange : this.top - topChange,
    this.left + leftChange > window.innerWidth ? this.left + leftChange : this.left - leftChange);
};
