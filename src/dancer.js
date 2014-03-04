/* global $ */
/* exported Dancer */
var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.size = 50;
  this.$node.css({'width': this.size + 'px', 'height': this.size + 'px'});
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
  this.top = top % (window.innerHeight - this.size);
  this.left = left % (window.innerWidth - this.size);
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};
