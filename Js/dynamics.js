'use strict';

var src, id;
var selected;
var collections = JSON.parse(localStorage.getItem('data'));

$(function() {
    Materialize.toast('Click a location to bring up images', 3000);
});

$('#images').on('click', function(event) {

    if (event.target.id !== 'images') {
        // $('#images').children().removeAttribute('style');

        $('#action_bar').slideDown(500); //Shows Action Bar

        $('#action_bar').click(function() { //Hides action bar after action
            $(this).slideUp(500);
            selected.removeAttribute('style');
        });

        src = event.target.src;
        id = event.target.id;

        //show active image
        selected = event.target;

        $('#images').children().attr({
          'style': 'border: 5px solid white',
        });

        selected.style.border = '5px solid tomato';

        $('#download').attr({
          'href': src.replace('_m.jpg', '_b.jpg'),
          'download': src.replace('_m.jpg', '_b.jpg'),
        });
    }

});

//expand icon funcitonality
$('#expand').on('click', function() {
    //change image size (medium to big)
    src = src.replace('m.jpg', 'b.jpg');
    //remove red border
    selected.removeAttribute('style');

    $('nav').hide();

    $('#expanded').empty(); //empty expanded preview

    $("<img/>").attr({
        "src": src,
        "class": "big_preview",
    }).appendTo('#expanded'); //add new image

    $('#expanded').fadeIn(500); //fade in expanded preview
    Materialize.toast('Click again to close', 2000);

    $('#expanded').click(function() { //handles closing expanded preview
        $(this).fadeOut(500);
        $('nav').show();
    });

});

//Add to collection functionality
$('#collect').on('click', function() {
    var inner = $('#collection_inner');
    var outer = $('#collection_outer');

    selected.removeAttribute('style');
    Materialize.toast("Added to collection", 2000);

    outer.slideDown(500);
    $('#collection_action').fadeIn(500);

    var newImage = $('<img>').attr({
        'src': src,
        'id': id,
        'class': 'collected_img',
    });

    newImage.prependTo(inner);
    var newImageWidth = newImage.width() + 20;

    $(inner).width($(inner).width() + newImageWidth);

});


//removes images from collection
$('#collection_inner').on('click', function(event) {
    var toRemove = $(event.target);

    if (toRemove.id !== 'collection_inner') {
        var subtractWidth = toRemove.width();

        $('#collection_inner').width($('#collection_inner').width() - subtractWidth - 20);

        $(toRemove).remove();
        if ($('#collection_inner').width() === 0) {

            $('#collection_outer').slideUp(500);
            $('#collection_action').hide(500);
        }
    }
});



//Add tag functionality
$('#tag').on('click', function() {
    Materialize.toast("Add Tag", 2000);
    //expand text box
    //get input, seperate words, chips?
});

//let coordinates bar stick to top
$(window).scroll(function() {
    var $el = $('#location_data');
    var height = $('#map').height() + $('.nav-wrapper').height() + 10;

    var isPositionFixed = ($el.css('position') === 'fixed');
    if ($(this).scrollTop() > height && !isPositionFixed) {
        $('#location_data').css({
            'position': 'fixed',
            'top': '0px'
        });
        $('body').css({
            'padding-top': '50px'
        });
    }
    if ($(this).scrollTop() < height && isPositionFixed) {
        $('#location_data').css({
            'position': 'static',
            'top': '0px'
        });
        $('body').css({
            'padding-top': '0'
        });
    }
});


var save = $('#save')
save.on('click', function () {
  if($('#collection_input').is(':visible') && $('#collection_input').val() !== ''){
    var name = $('#collection_input').val();
    createCollection(name);

    $('#collection_inner').empty().width(0);
    $('#collection_outer').slideUp(500);
    $('#collection_action').hide(500);
    $('#collection_name').val('');

  }else{
    $('#button').attr({'class': 'col s2 offset-s2'});
    $('#collection_name').show(500);
  }
});

//Auxilliary functions

function createCollection (name) {
  var links = {};
  $('#collection_inner > img').map(function(){
    var iD = $(this).attr('id');
    var source = $(this).attr('src');

    links[iD] = source;
  });

  collections[name] = links;
  localStorage.setItem('data', JSON.stringify(collections));
}
