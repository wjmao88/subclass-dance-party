/* global MovingDancer */
/* exported BlinkyDancer */
var BlinkyDancer = function(){
  MovingDancer.apply(this, arguments);
  this.$node.addClass('moving-dancer');
};

BlinkyDancer.prototype = Object.create(MovingDancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  this.$node.toggle();
  MovingDancer.prototype.step.apply(this);
};
