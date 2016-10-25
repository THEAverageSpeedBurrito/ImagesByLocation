'use strict';

var map;
var locations = [];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 38.75408327579141,
            lng:  -105.380859375,
        },
        zoom: 6
    });

    map.addListener('click', function (event) {


      // $('#textfield').show(500);
      var coords = event.latLng;
      var lat = coords.lat();
      var lng = coords.lng();

      var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=e0a89bb76a62729eced4ffa87ba8633c&lat=" + lat + "&lon=" + lng + "&safe_search=1&per_page=20";
      var src;

      $.getJSON(url + "&format=json&jsoncallback=?", function(data){
        $('#images').empty();
          $.each(data.photos.photo, function(i,item){
              src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
              $("<img/>").attr("src", src).appendTo("#images");
              if ( i === 10 ){
                return false;
              }
          });
      });

      // window.addEventListener('keydown', function (event) {
      //   if(event.keyCode === 13){
      //     var name = event.target.value;
      //
      //     if(name !== ''){
      //
      //
      //       event.target.value = "";
      //       $('#textfield').hide(500);
      //     }else{
      //       Materialize.toast('Please enter a name for your pin', 4000, 'blue lighten-2');
      //     }
      //   }
      // });


    });

}
