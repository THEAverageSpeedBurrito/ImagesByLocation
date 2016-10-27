'use strict';

// $(function(){
//   $('#action_bar').slideToggle(800);
// });

//expand images on click
$('#images').on('click', function(event) {

  if(event.target.id !== 'images'){

    $('#action_bar').slideDown(500); //Shows Action Bar

    $('#action_bar').click(function() { //Hides action bar after action
      $(this).slideUp(500);
    });

    //change image size
    var src = event.target.src.replace('m.jpg', 'b.jpg');

    //expand icon funcitonality
    $('#expand').on('click', function() {
      $('#expanded').empty(); //empty expanded preview

      $("<img/>").attr({
        "src": src,
        "class": "big_preview",
      }).appendTo('#expanded'); //add new image

      $('#expanded').fadeIn(500); //fade in expanded preview
      Materialize.toast('Click again to close', 2000);

      $('#expanded').click(function(){ //handles closing expanded preview
        $(this).fadeOut(500);
      });
    });


  }
});
