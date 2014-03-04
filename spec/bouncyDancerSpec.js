/* global describe, beforeEach, it, sinon, expect, BouncyDancer, jQuery */
describe("BouncyDancer", function() {

  var bouncyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bouncyDancer = new BouncyDancer(10, 20, timeBetweenSteps, 100);
  });

  it("should have a jQuery $node object", function(){
    expect(bouncyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should change position", function() {
    bouncyDancer.setPosition(10, 10);
    expect(bouncyDancer.top).to.be.equal(10);
    expect(bouncyDancer.left).to.be.equal(10);
    bouncyDancer.move({left: -20, top: -20});
    expect(bouncyDancer.top).to.be.equal(30);
    expect(bouncyDancer.left).to.be.equal(30);
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(bouncyDancer, "step");
      expect(bouncyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      //clock.tick(timeBetweenSteps); // Why do we have a 2nd call?

      expect(bouncyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(bouncyDancer.step.callCount).to.be.equal(101);
    });
  });
});
