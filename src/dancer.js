/* global $ */
/* exported Dancer */

// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  this.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

  this.timeBetweenSteps = timeBetweenSteps;

  var self = this;
  (function(){
    self.step();
  })();
};

Dancer.prototype.step = function(){
  // the basic this doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var that = this;
  setTimeout(that.step, that.timeBetweenSteps);
  console.log('dancer step called');
};
