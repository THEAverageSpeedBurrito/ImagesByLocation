'use strict';

var src;
var selected;

$('#images').on('click', function(event) {

    if (event.target.id !== 'images') {

        $('#action_bar').slideDown(500); //Shows Action Bar

        $('#action_bar').click(function() { //Hides action bar after action
            $(this).slideUp(500);
        });

        //change image size (medium to big)
        src = event.target.src.replace('m.jpg', 'b.jpg');

        //show active image
        selected = event.target;
        selected.style.border = '5px solid red';
    }
});

//expand icon funcitonality
$('#expand').on('click', function() {

  selected.removeAttribute('style');

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
var collection = []; //collection storage

$('#collect').on('click', function () {

  selected.removeAttribute('style');
  Materialize.toast("Added to collection", 2000);

  collection.push(src);
});


//Add tag functionality
$('#tag').on('click', function() {
  Materialize.toast("Add Tag", 2000);
  //expand text box
  //get input, seperate words, chips?
});
