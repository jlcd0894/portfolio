
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString("I'm a Web designer")
    .pauseFor(2500)
    .deleteAll()
    .typeString('Based in San Diego')
    .pauseFor(2500)
    .deleteAll()
    .typeString('I like creating digital experiences')
    .pauseFor(2500)
    .start();


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
    


