//call by pseudoclass instance
var inherit = {}; //singleton

//call following functions with Constructor
//
//extends==================================================
//extend a parent class
//
//standard pseudo-classical inehritance
//
//save parent class prototype as superPrototype for access to overwritten methods

inherit.extends = function(ChildClass, ParentClass){
  ChildClass.prototype = Object.create(ParentClass.prototype);
  ChildClass.prototype.constructor = ChildClass;
  ChildClass.prototype.superPrototype = ParentClass.prototype;
};

//copy an instance of an object
//makeSibling==============================================
//
inherit.makeSibling = function(baseObj){
  var Constructor = baseObj.constructor;
  // var prototype = Constructor.prototype;
  // var result = ; // object literal notation equivalent to var result = new Object();

  var args = Array.prototype.slice.call(arguments, 1);
  return new Constructor(args);
};

//apply superconstructor arguments to new instance
//expect 3rd parameter, args, which is an array of arguments
//superConstruct===========================================

inherit.superConstruct = function(instance, Class, args){
  Class.prototype.superPrototype.constructor.apply(instance, args);
};

//include==================================================
//include methods from an object
//does not include inherited property and methods of the object
//
//pass in and obj containing all methods to include
//optionally pass in a list of method names to be included

inherit.include = function(TargetClass, obj){
  var keys = Object.keys(obj);
  var methods = Array.prototype.slice.call(arguments, 2);
  for (var k=0; k<keys.length; k++){
    if ( (methods.length === 0 || methods.indexOf(keys[k]) > -1) && obj.hasOwnProperty(keys[k])){
      TargetClass.prototype[keys[k]] = obj[keys[k]];
    }
  }
};

//decorate=================================================
//only decorate the obj's own property and methods
//expect the decorating function's methods and properties
//methods return a new function including
//the old functionality and the new functionality
//properties sets or changes the original's property

inherit.decorate = function(BaseClass, obj){
  var keys = Object.keys(obj);
  for (var k=0; k<keys.length; k++){
    if (obj.hasOwnProperty(keys[k]) && typeof obj[keys[k]] === 'function' && typeof BaseClass.prototype[keys[k]] === 'function'){
      BaseClass.prototype[keys[k]] = obj[keys[k]](BaseClass.prototype[keys[k]]);
    }
  }
};

//combine==================================================
//use to create a new class that does not yet have a defined constructor
//e
inherit.combine = function(ParentClass){
  var ResultClass = function(){
    this.superPrototype.constructor.apply(this, arguments);
  };
  inherit.extends(ResultClass, ParentClass);

  var args = Array.prototype.slice.call(arguments, 1);

  for(var i = 0; i < args.length; i++){
    inherit.decorate(ResultClass, args[i]);
  }
  return ResultClass;
};
