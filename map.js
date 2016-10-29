'use strict';

var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 38.75408327579141,
            lng:  -106.380859375,
        },
        zoom: 4,
        scrollwheel: false,
    });

    map.addListener('click', function (event) {

      var coords = event.latLng;
      var lat = coords.lat();
      var lng = coords.lng();

      getImages(lat, lng);

    });

}


function getImages (lat, lng) {
  var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=e0a89bb76a62729eced4ffa87ba8633c&lat=" + lat + "&lon=" + lng + "&per_page=40";
  var src;

  $.getJSON(url + "&format=json&jsoncallback=?", function(data){
      $('#images').empty();
      $.each(data.photos.photo, function(i,item){
          src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";

          $("<img/>").attr({
            "src": src,
            "class": "col s6 m4 l2 result",
            "id": item.id,
          }).appendTo('#images');

      });
  });
}
