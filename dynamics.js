'use strict';

$('#collapse').on('click', function(){
  $('#map').toggle(500);
});

//expand images on click
$('#images').on('click', function(event) {
  if(event.target.id !== 'images'){
    var src = event.target.src;
    src = src.replace('m.jpg', 'b.jpg');

    $('<img>').attr({
      'src': src,
      'class': 'big_preview col s8 offset-s2',
    }).appendTo('#expanded');

    $('#expanded').show(500);
  }

  $('#expanded').on('click', function () {
    $(this).hide(500).empty();
  });
});
