/* global describe, beforeEach, it, sinon, expect, inherit, jQuery */
describe("inherit", function() {

  var Parent;
  var Child;

  //makeSibling
  //extends
  //superConstruct
  //include
  //combine
  //decorate

  beforeEach(function() {
    Parent = function(value){
      this.value = value;
      this.default = 'parent';
      this.parent = true;
    };
    Parent.prototype.shout = function(){
      return 'parent shout';
    };
  });

  it("'extends' should make a child class that extends a parent class", function(){
    Child = function(value){
      inherit.superConstruct(this, Child, arguments);
      this.default = 'child';
      this.child = true;
    };
    inherit.extends(Child, Parent);
    Child.prototype.shout = function(){
      return 'child shout';
    };
    var child = new Child(4);
    expect(child.value).to.equal(4);
    expect(child.parent).to.equal(true);
    expect(child.default).to.equal('child');
    expect(child.shout()).to.equal('child shout');
  });

  it("'makeSibling' should make a copy of an instance's own prototype when instance is created in its parent class", function(){
    Child = function(value){
      inherit.superConstruct(this, Child, arguments);
      this.default = 'child';
      this.child = true;
    };
    inherit.extends(Child, Parent);
    Child.prototype.shout = function(){
      return 'child shout';
    };
    Parent.prototype.makeCopy = function(){
      return inherit.makeSibling(this);
    };
    var child = new Child(4);
    var anotherChild = child.makeCopy();
    expect(anotherChild.child).to.equal(true);
  });

  it("'include' should add additional properties to the existing pseudoclass", function(){
    var AngryParent = {
      default: 'angryParent',
      angryShout: function(){
        return 'angry shout';
      },
      shout: function(){
        return 'angry shout overwriting';
      }
    };
    inherit.include(Parent, AngryParent);

    var parent = new Parent(4);
    expect(parent.angryShout()).to.equal('angry shout');
    expect(parent.shout()).to.equal('angry shout overwriting');
  });

  it("'decorate' should augment the existing pseudoclass functions", function(){
    var AngryParent = {
      default: 'angryParent',
      shout: function(func){
        return function(){
          return func() + ', idiot!';
        };
      }
    };
    inherit.decorate(Parent, AngryParent);

    var parent = new Parent(4);
    expect(parent.shout()).to.equal('parent shout, idiot!');
  });

  it("'combine' should return a new pseudoclass and decorate with additional functionality", function(){
    var AngryParent = {
      default: 'angryParent',
      shout: function(func){
        return function(){
          return func() + ', idiot!';
        };
      }
    };
    var NewParent = inherit.combine(Parent, AngryParent);

    var parent = new NewParent(4);
    expect(parent.shout()).to.equal('parent shout, idiot!');
    expect(parent.parent).to.equal(true);
  });
});
