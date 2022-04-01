
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString("I'm a Web Designer.")
    .pauseFor(1500)
    .deleteAll()
    .typeString('Based in San Diego, CA.')
    .pauseFor(1500)
    .deleteAll()
    .typeString('I like to create digital experiences.')
    .pauseFor(2000)
    .start();


// init Masonry
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer'
});

// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});


/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 300) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
/*Scroll to top when arrow up clicked END*/

function parallax() {
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
}


$(document).ready(function() {

    if (isMobile===false){
        $('.caliSunset').hide().fadeIn(2500);
    }

    $('body').hide().fadeIn(500);
    $(".rediFade").click(function(e) {
        e.preventDefault();
        $link = $(this).attr("href");
        $("body").fadeOut(500,function(){
          window.location =  $link; 
        });
    });
});


