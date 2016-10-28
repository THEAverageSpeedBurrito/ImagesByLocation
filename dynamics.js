'use strict';

var src;

$('#images').on('click', function(event) {

    if (event.target.id !== 'images') {

        $('#action_bar').slideDown(500); //Shows Action Bar

        $('#action_bar').click(function() { //Hides action bar after action
            $(this).slideUp(500);
        });

        //change image size
        src = event.target.src.replace('m.jpg', 'b.jpg');

    }
});

//expand icon funcitonality
$('#expand').on('click', function() {
  $('#expanded').empty(); //empty expanded preview

  $("<img/>").attr({
    "src": src,
    "class": "big_preview",
  }).appendTo('#expanded'); //add new image

  $('#expanded').fadeIn(500); //fade in expanded preview
  Materialize.toast('Click again to close', 2000);

  $('#expanded').click(function() { //handles closing expanded preview
    $(this).fadeOut(500);
  });

});

//Add to collection functionality
$('#collect').on('click', function () {
  Materialize.toast("Added to collection", 2000);
});

//Add tag functionality
$('#tag').on('click', function() {
  Materialize.toast("Add Tag", 2000);
  //expand text box
  //get input, seperate words, chips?
});
