/* global $ */
/* exported Dancer */
var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="Dancer.prototype"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  this.setPosition(top, left);
  this.step();
};

Dancer.prototype.step = function(){
  var context = this;
  var callback = function(){
    context.step();
  };
  setTimeout(callback, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  this.top = top;
  this.left = left;
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
