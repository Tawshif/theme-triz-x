/*

Template Name:  Azul Template;
Version : 1.0;

Table of content:

    1)- Strict mode
    2)- Owl carousel
    3)- Scroll events
    4)- Smooth Scrolling
*/


/*
    2)- Owl carousel
*/

$(document).ready(function () {
  $("#testimonials .owl-carousel").owlCarousel({
    items: 2,
    lazyLoad: true,
    dots: true,
    margin: 30,
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 1,
      },

      1000: {
        items: 2,
      },

      1400: {
        items: 2,
      }
    }
  });


  $("#services .owl-carousel").owlCarousel({
    items: 3,
    nav: false,
    dots: true,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },

      400: {
        items: 2,
      },
      992: {
        items: 3,
      },

      1000: {
        items: 4,
      },

      1400: {
        items: 4,
      }
    }

  });

});

/*
    3)- Scroll events
*/

//When the user scroll the window
$(window).on('scroll', function () {

  var $body = $('body');

  //Sticky Navbar
  if ($(this).scrollTop() > 30) {
    $('#main-nav').addClass('sticky-top');
    if ($body.hasClass('rtl') === false) {
      $('.navbar-brand img').attr('src', 'img/logo-light.png');
    }

  } else {
    $('#main-nav').removeClass('sticky-top');
    if ($body.hasClass('rtl') === false) {
      $('.navbar-brand img').attr('src', 'img/logo.png');
    }
  }

  //Paralax Background
  if ($('body').hasClass('parallax')) {
    var $item = $('.parallax-bg');
    var scrolltp = $(window).scrollTop();
    var speed = 0.5; //Default speed

    $item.css({
      backgroundPositionY: -(scrolltp * speed) + 'px',
    });
  }

});


var w_height = $(window).height();
$('#header-intro').css({
  height: w_height,
});

/*
    4)- Smooth Scrolling
*/

//Smooth scrooling Thanks To : https://css-tricks.com/snippets/jquery/smooth-scrolling/
$('a[href*="#"]:not([href="#"])').on('click', function () {
  if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1600);
      return false;
    }
  }
});
