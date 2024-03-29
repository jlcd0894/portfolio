
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

typewriter.typeString("I'm a Digital Designer.")
.pauseFor(1500)
.deleteAll()
.typeString('Based in San Diego, CA.')
.pauseFor(1500)
.deleteAll()
.typeString('Focused on creating digital experiences.')
.pauseFor(2000)
.start();

//navbar color
$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});
});

//collapse navbar
$(document).on('click',function(){ 
    $('.navbar .collapse').collapse('hide');
})

//video play when visible
 if ($("body").data("enable-scroll"))
    $(window).scroll(function() {
    $('video').each(function(){
        if ($(this).is(":in-viewport")) {
            $(this)[0].play();
        } else {
            $(this)[0].pause();
        }
    })
      
    });


// // init Masonry
// var $grid = $('.grid').masonry({
//   itemSelector: '.grid-item',
//   percentPosition: true,
//   columnWidth: '.grid-sizer'
// });

// // layout Masonry after each image loads
// $grid.imagesLoaded().progress( function() {
//   $grid.masonry();
// });

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.3) {
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



