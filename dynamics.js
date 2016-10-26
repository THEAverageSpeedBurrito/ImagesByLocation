'use strict';

$('#collapse').on('click', function(){
  $('#map').toggle(500);
});

$('#images').on('click', function(event) {
  if(event.target.id !== 'images'){
    console.log(event.target);
  }
});
