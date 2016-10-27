'use strict';

// $(function(){
//   $('#action_bar').slideToggle(800);
// });

//expand images on click
$('#images').on('click', function(event) {

  if(event.target.id !== 'images'){

    $('#action_bar').slideToggle();

  }

});
