
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

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

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.5) {
    // Show button
    scrollToTopBtn.classList.add("showBtn");
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn");
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);

// /*Scroll to top when arrow up clicked BEGIN*/
// $(window).scroll(function() {
//     var height = $(window).scrollTop();
//     if (height > 300) {
//         $('#back2Top').fadeIn();
//     } else {
//         $('#back2Top').fadeOut();
//     }
// });
// $(document).ready(function() {
//     $("#back2Top").click(function(event) {
//         event.preventDefault();
//         $("html, body").animate({ scrollTop: 0 }, "slow");
//         return false;
//     });

// });
// /*Scroll to top when arrow up clicked END*/

// function parallax() {
//     var scene = document.getElementById('scene');
//     var parallaxInstance = new Parallax(scene);
// }

particlesJS("particles-js", {
  particles: {
    number: { value: 160, density: { enable: true, value_area: 800 } },
    color: { value: "#9d9aca" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#9d9aca" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 1,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 4, size_min: 0.3, sync: false }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 600 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "repulse" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
      repulse: { distance: 400, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});



$(document).ready(function() {

    // if (isMobile===false){
    //     $('.caliSunset').hide().fadeIn(2500);
    // }

    // $('body').hide().fadeIn(500);
    // $(".rediFade").click(function(e) {
    //     e.preventDefault();
    //     $link = $(this).attr("href");
    //     $("body").fadeOut(500,function(){
    //       window.location =  $link; 
    //     });
    // });


});


