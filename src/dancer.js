/* global $ */
/* exported Dancer */
var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.radius = 10;
  this.$node.css({'border-width':'10px'});
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
  this.top = top % (window.innerHeight - 2 * this.radius);
  this.left = left % (window.innerWidth - 2 * this.radius);
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};
