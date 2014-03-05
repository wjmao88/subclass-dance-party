/* exported BlinkyDancer */
var BlinkyDancer = {};
BlinkyDancer.step = function(func){
  return function(){
    this.$node.toggle();
    func.apply(this, arguments);
    //do something else
  };
};
