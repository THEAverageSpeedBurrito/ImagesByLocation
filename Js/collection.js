'use strict';
$(function () {
  renderCollections();


  // $('.collection_header').on('click', function (event) {
  //
  //   var collectionName = event.target.textContent;
  //   $(event.target).hide(500);
  //
  //   var tempData = JSON.parse(localStorage.getItem('data'));
  //   delete tempData[collectionName];
  //
  //   localStorage.setItem('data', JSON.stringify(tempData));
  //
  //   renderCollections();
  // });
});


function renderCollections () {
  var data = JSON.parse(localStorage.getItem('data'));
  var container = $('#collection_body');

  for(var collection in data){
    var headerId = collection + '_header';
    var bodyId = collection + '_body';

    $('<div>').attr({
      'class': 'collection_header z-depth-2',
      'id': headerId,
    }).appendTo(container);

    $('<div>').attr({
      'class': 'collection_body z-depth-2',
      'id': bodyId,
    }).appendTo(container);

    var toBody = document.getElementById(bodyId);
    var toHead = document.getElementById(headerId);

    $('<h5>').text(collection).appendTo(toHead);

    for(var images in data[collection]){
      $('<img>').attr({
        'class': 'collected_img_page',
        'src': data[collection][images],
      }).appendTo(toBody);
    }
  }
}
