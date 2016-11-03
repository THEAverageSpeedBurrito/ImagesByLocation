'use strict';

var navText = '<div class="nav-wrapper"><a href="finder.html" class="brand-logo"></a><ul class="right"><li><a href=""><i class="material-icons" id="xyz">not_interested</i></a></li></ul></div>';

$(function () {
  renderCollections();

  $('i').on('click', function (event) {
    console.log(event.target.id);

    var collectionName = event.target.id;

    var tempData = JSON.parse(localStorage.getItem('data'));
    delete tempData[collectionName];

    localStorage.setItem('data', JSON.stringify(tempData));

    $('#collection_body').empty();
    renderCollections();
  });
});


function renderCollections () {
  var data = JSON.parse(localStorage.getItem('data'));
  var container = $('#collection_body');

  for(var collection in data){
    var headerId = collection + '_header';
    var bodyId = collection + '_body';

    $('<div>').attr({
      'class': 'collection_header z-depth-1',
      'id': headerId,
    }).appendTo(container);

    $('<div>').attr({
      'class': 'collection_body z-depth-1',
      'id': bodyId,
    }).appendTo(container);

    $('<nav>').append(navText.replace('xyz', collection)).appendTo(container);

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
