//call by pseudoclass instance
var inherit = {}; //singleton

inherit.makeSibling = function(baseObj){
  var Constructor = baseObj.constructor;
  var result = {}; // object literal notation equivalent to var result = new Object();
  var args = Array.prototype.slice.call(arguments, 1);
  console.log(Constructor);
  Constructor.apply(result, args);
  return result;
};

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

//include==================================================
//include methods from an object
//does not include inherited property and methods of the object
//
//pass in and obj containing all methods to include
//optionally pass in a list of method names to be included

inherit.include = function(TargetClass, obj){
  var keys = Object.keys(obj);
  var methods = Array.prototype.slice.call(arguments, 1);
  for (var k=0; k<keys; k++){
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
  for (var k=0; k<keys; k++){
    if (obj.hasOwnProperty(keys[k])){
      BaseClass.prototype[keys[k]] = obj[keys[k]](BaseClass.prototype[keys[k]]);
    }
  }
};
