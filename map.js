'use strict';

var map;
var locations = [];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 8
    });

    map.addListener('click', function (event) {


      $('#textfield').show(500);
      var coords = event.latLng;


      window.addEventListener('keydown', function (event) {
        if(event.keyCode === 13){
          var name = event.target.value;
          locations.push([name, coords]);

          event.target.value = "";
          $('#textfield').hide(500);
        }
      });


    });

}
