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
    var num = Math.random();
    var angle = Math.random() * 2 * (Math.PI);
    return {
      top: Math.sin(angle) * num,
      left: Math.cos(angle) * num
    };
  },
};
