/* global describe, beforeEach, it, sinon, expect, jQuery, inherit, MovingDancer, BlinkyDancer */

describe("movingBlinky", function() {

  var movingBlinky;
  var MovingBlinky = inherit.combine(MovingDancer, BlinkyDancer);
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    movingBlinky = new MovingBlinky(10, 20, timeBetweenSteps, 50);
  });

  it("should have a jQuery $node object", function(){
    expect(movingBlinky.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {

    console.log(movingBlinky.step);
    sinon.spy(movingBlinky.$node, 'toggle');

    movingBlinky.step();

    expect(movingBlinky.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      console.log('call step at least once');
      sinon.spy(movingBlinky, "step");
      expect(movingBlinky.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      //clock.tick(timeBetweenSteps); // Why do we have a 2nd call?

      expect(movingBlinky.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(movingBlinky.step.callCount).to.be.equal(2);
    });
  });
});
