/*global $ */

$(document).ready(function(){
  window.dancers = [];

  $('.addDancerButton').on('click', function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the 'data-dancer-maker-function-name' attribute of a
     * class='addDancerButton' DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerClassName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make

    var DancerClass = window[dancerClassName];

    // make a dancer with a random position

    var dancer = new DancerClass(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineupButton').on('click', function(event){
    var height = 0;
    var width = 0;
    var maxWidth = 0;

    for (var i=0; i< window.dancers.length; i++) {
      var dancer = window.dancers[i];
      if (dancer.size + height > window.innerHeight){
        width += maxWidth;
        maxWidth = 0;
        height = 0;
      }
      dancer.setPosition(dancer.radius + height, width);
      height += dancer.size;
      maxWidth = dancer.size > maxWidth ? dancer.size: maxWidth;
    }
  });
});

