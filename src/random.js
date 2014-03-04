var $random = {
  boolean: function(){
    return Math.random() < 0.5;
  },
  integer: function(from, to){
    if (arguments.length === 1){
      to = from;
      from = 0;
    }
    return Math.floor(Math.random() * (Math.abs(to - from)+1)) + from;
  },
  direction: function(){
    return {
      top: this.integer(-1, 1),
      left: this.integer(-1, 1)
    };
  },
};
