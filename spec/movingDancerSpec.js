/* global describe, beforeEach, it, sinon, expect, MovingDancer, jQuery */
describe("movingDancer", function() {

  var movingDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    movingDancer = new MovingDancer(10, 20, timeBetweenSteps, 10);
  });

  it("should have a jQuery $node object", function(){
    expect(movingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should change position", function() {
    movingDancer.setPosition(10, 20);
    expect(movingDancer.top).to.be.equal(10);
    expect(movingDancer.left).to.be.equal(20);
    movingDancer.move({left: 100, top: 100});
    expect(movingDancer.top).to.equal(1010);
    expect(movingDancer.left).to.equal(1020);
  });
});
