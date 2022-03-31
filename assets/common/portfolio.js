var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}

if (isMobile===true) {
    $(".animated").attr( "data-animate-in", "fadeIn");
    $(".animated").attr( "data-animate-out", "fadeOut");
}


/*
*   Wavify
*   Jquery Plugin to make some nice waves
*/
(function ( $ ) {

    $.fn.wavify = function( options ) {

        //  Options
        //
        //
        var settings = $.extend({
            container: options.container ? options.container : 'body',
            // Height of wave
            height: 200,
            // Amplitude of wave
            amplitude: 100,
            // Animation speed
            speed: .15,
            // Total number of articulation in wave
            bones: 3,
            // Color
            color: 'rgba(255,255,255, 0.20)'
        }, options );

        var wave = this,
            width = $(settings.container).width(),
            height = $(settings.container).height(),
            points = [],
            lastUpdate,
            totalTime = 0;

        //  Set color
        //
        TweenLite.set(wave, {attr:{fill: settings.color}});


        function drawPoints(factor) {
            var points = [];

            for (var i = 0; i <= settings.bones; i++) {
                var x = i/settings.bones * width;
                var sinSeed = (factor + (i + i % settings.bones)) * settings.speed * 100;
                var sinHeight = Math.sin(sinSeed / 100) * settings.amplitude;
                var yPos = Math.sin(sinSeed / 100) * sinHeight  + settings.height;
                points.push({x: x, y: yPos});
            }

            return points;
        }

        function drawPath(points) {
            var SVGString = 'M ' + points[0].x + ' ' + points[0].y;

            var cp0 = {
                x: (points[1].x - points[0].x) / 2,
                y: (points[1].y - points[0].y) + points[0].y + (points[1].y - points[0].y)
            };

            SVGString += ' C ' + cp0.x + ' ' + cp0.y + ' ' + cp0.x + ' ' + cp0.y + ' ' + points[1].x + ' ' + points[1].y;

            var prevCp = cp0;
            var inverted = -1;

            for (var i = 1; i < points.length-1; i++) {
                var cpLength = Math.sqrt(prevCp.x * prevCp.x + prevCp.y * prevCp.y);
                var cp1 = {
                    x: (points[i].x - prevCp.x) + points[i].x,
                    y: (points[i].y - prevCp.y) + points[i].y
                };

                SVGString += ' C ' + cp1.x + ' ' + cp1.y + ' ' + cp1.x + ' ' + cp1.y + ' ' + points[i+1].x + ' ' + points[i+1].y;
                prevCp = cp1;
                inverted = -inverted;
            }

            SVGString += ' L ' + width + ' ' + height;
            SVGString += ' L 0 ' + height + ' Z';
            return SVGString;
        }

        //  Draw function
        //
        //
        function draw() {
            var now = window.Date.now();

            if (lastUpdate) {
                var elapsed = (now-lastUpdate) / 1000;
                lastUpdate = now;

                totalTime += elapsed;

                var factor = totalTime*Math.PI;
                TweenMax.to(wave, settings.speed, {
                    attr:{
                        d: drawPath(drawPoints(factor))
                    },
                    ease: Power1.easeInOut
                });

            } else {
                lastUpdate = now;
            }

            requestAnimationFrame(draw);
        }

        //  Pure js debounce function to optimize resize method
        //
        //
        function debounce(func, wait, immediate) {
            var timeout;
            return function() {
                var context = this, args = arguments;
                clearTimeout(timeout);
                timeout = setTimeout(function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                }, wait);
                if (immediate && !timeout) func.apply(context, args);
            };
        }

        //  Redraw for resize with debounce
        //
        var redraw = debounce(function() {
            wave.attr('d', '');
            points = [];
            totalTime = 0;
            width = $(settings.container).width();
            height = $(settings.container).height();
            lastUpdate = false;
            setTimeout(function(){
                draw();
            }, 50);
        }, 250);
        $(window).on('resize', redraw);


        //  Execute
        //
        return draw();

    };

}(jQuery));


$('#feel-the-wave').wavify({
  height: 20,
  bones: 4,
  amplitude: 30,
  // color: '#B289EF',
  color: 'url(#gradient1)',
  speed: .15
});

$('#feel-the-wave-2').wavify({
  height: 10,
  bones: 4,
  amplitude: 30,
  // color: '#B289EF',
  color: 'url(#gradient2)',
  speed: .15
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Hello World!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Strings can be removed')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('<strong>altered!</strong>')
    .pauseFor(2500)
    .start();


var animation = lottie.loadAnimation({
  container: document.getElementById('dnload-btn'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'download.json'
})

$('#resume').click( function() {
    animation.goToAndStop(0);
    animation.play();
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
    

    //Codigo CHINGON LIMON de macho
    function inViewPort(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var bounding = elem.getBoundingClientRect();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        var tolerace = 150;
        var topVisible = (docViewBottom - elemTop - tolerace) > 0;
        var bottomVisible = (docViewTop - elemBottom + tolerace) < 0;

        return ( topVisible && bottomVisible );
    };

    $(window).scroll(function() {
        $('[data-animate-in]').each(function() {
            var $class = $(this).data('animate-in');
            
            if(inViewPort(this) && !$(this).hasClass($class)){
                $(this)
                .removeClass($(this).data('animate-out'))
                .addClass($class);
            }
            if(!inViewPort(this)){
                $(this)
                .removeClass($(this).data('animate-in'))
                .addClass($(this).data('animate-out'));
            }
        });
    }).scroll();

    if ($("body").hasClass("home")) {
        parallax();
    }});
