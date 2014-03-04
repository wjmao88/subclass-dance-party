/* global Dancer */
/* exported BlinkyDancer */
var BlinkyDancer = function(){
  Dancer.apply(this, arguments);
  this.$node.addClass('blinky-dancer');
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  this.$node.toggle();
  Dancer.prototype.step.apply(this);
};
