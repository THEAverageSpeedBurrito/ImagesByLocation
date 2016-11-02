'use strict';
$(function () {
  renderCollections();
});

function renderCollections () {
  var data = JSON.parse(localStorage.getItem('data'));
  var container = $('#collection');

  for(var collection in data){
    var headerId = collection + '_header';
    var bodyId = collection + '_body';

    $('<div>').attr({
      'class': 'collection_header',
      'id': headerId,
    }).appendTo(container);

    $('<div>').attr({
      'class': 'collection_body',
      'id': bodyId,
    }).appendTo(container);

    var toBody = document.getElementById(bodyId);
    var toHead = document.getElementById(headerId);

    $('<h5>').text(collection).appendTo(toHead);

    for(var images in data[collection]){
      $('<img>').attr({
        'class': 'collected_img_page',
        'src': data[collection][images],
        'style': 'margin: 10px 5px 0 10px',
      }).appendTo(toBody);
    }
  }
}
