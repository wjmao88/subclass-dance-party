/* global describe, beforeEach, it, sinon, expect, MovingDancer, jQuery */
describe("movingDancer", function() {

  var movingDancer;
  var timeBetweenSteps = 10000;
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
    movingDancer.move({left: 10, top: 10});
    expect(movingDancer.top).to.equal(110);
    expect(movingDancer.left).to.equal(120);
  });

  // describe("dance", function(){
  //   it("should call step at least once per second", function(){
  //     sinon.spy(movingDancer, "step");
  //     expect(movingDancer.step.callCount).to.be.equal(0);
  //     debugger;
  //     clock.tick(timeBetweenSteps);
  //     //clock.tick(timeBetweenSteps); // Why do we have a 2nd call?
  //     expect(movingDancer.step.callCount).to.be.equal(1);
  //     clock.tick(timeBetweenSteps);
  //     expect(movingDancer.step.callCount).to.be.equal(2);
  //   });
  // });
});
