// 'use strict';
//
// var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=e0a89bb76a62729eced4ffa87ba8633c&lat=38&lon=-109&safe_search=1&per_page=20";
// var src;
//
// $.getJSON(url + "&format=json&jsoncallback=?", function(data){
//     $.each(data.photos.photo, function(i,item){
//         src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
//         $("<img/>").attr("src", src).appendTo("#images");
//         if ( i === 10 ){
//           return false;
//         }
//     });
// });
