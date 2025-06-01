/*-----------------------------------------------------------------------------------
   
    
-----------------------------------------------------------------------------------*/

; (function ($) {
    "use strict";

    $(document).ready(function () {

        /**-----------------------------
 * Navbar toggle: hamburguesa + menú móvil
 * ---------------------------*/
// Evita que los <a> con submenú redirijan (en todos los tamaños de pantalla)
$('.navbar-area .navbar-nav li.menu-item-has-children > a').on('click', function (e) {
  e.preventDefault();
});

// Toggle hamburguesa y menú
$('.navbar-area .menu.toggle-btn').on('click', function () {
  $(this).toggleClass('open');
  $('.navbar-area .navbar-collapse').toggleClass('sopen');
});

// Mobile submenu toggle
if ($(window).width() < 992) {
  $(".in-mobile").clone().appendTo(".sidebar-inner");
  $(".in-mobile ul li.menu-item-has-children").append('<i class="fas fa-chevron-right"></i>');

  $(".menu-item-has-children a").on('click', function () {
    $(this).siblings('.sub-menu').animate({ height: "toggle" }, 300);
  });
}

// Sidebar toggle (si lo usas)
if ($('.menu-sidebar').length) {
  $('.menu-sidebar button').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('side-content-visible');
  });

  $('.hidden-bar .inner-box .cross-icon, .form-back-drop, .close-menu').on('click', function (e) {
    e.preventDefault();
    $('body').removeClass('side-content-visible');
  });

  $('.fullscreen-menu .navigation li.dropdown > a').on('click', function () {
    $(this).next('ul').slideToggle(500);
  });
}
         
              
        /*--------------------------------------------------
           Project Slider
        ---------------------------------------------------*/
      
if ($('.footer-top-projects').length) {
    $('.footer-top-projects').slick({
      slidesToShow: 4, // Aumenta el número = imágenes más pequeñas
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      dots: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: { slidesToShow: 3 }
        },
        {
          breakpoint: 991,
          settings: { slidesToShow: 3 }
        },
        {
          breakpoint: 767,
          settings: { slidesToShow: 2 }
        },
        {
          breakpoint: 575,
          settings: { slidesToShow: 1 }
        }
      ]
    });
  }
  
        
        
        /*--------------------------------------------------
            Client Logo Slider
        ---------------------------------------------------*/
        if ($('.faq-client-slider').length) {
            $('.faq-client-slider').slick({
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: false,
                speed: 1000,
                focusOnSelect: true,
                slidesToShow: 5,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1300,
                        settings: {
                            slidesToShow: 4,
                        }
                    },
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 375,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        } 

        
        /*--------------------------------------------------
           Fact Counter
        ---------------------------------------------------*/
        if ($('.counter-item').length) {
            $('.counter-item').appear(function () {

                var $t = $(this),
                    n = $t.find(".count-text").attr("data-stop"),
                    r = parseInt($t.find(".count-text").attr("data-speed"), 10);

                if (!$t.hasClass("counted")) {
                    $t.addClass("counted");
                    $({
                        countNum: $t.find(".count-text").text()
                    }).animate({
                        countNum: n
                    }, {
                        duration: r,
                        easing: "linear",
                        step: function () {
                            $t.find(".count-text").text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $t.find(".count-text").text(this.countNum);
                        }
                    });
                }

            }, {
                accY: 0
            });
        }

        
        /* -------------------------------------------------
          Video PopUp
        ------------------------------------------------- */
        if ($('.video-play').length) {
            $('.video-play').magnificPopup({
                type: 'video',
            });
        }
        
        if ($('.about-video-play').length) {
            $('.about-video-play').magnificPopup({
                type: 'video',
            });
        }

        if ($('.video-play').length) {
            $('.video-play').magnificPopup({
              type: 'video',
            });
          }
          
          if ($('.about-video-play').length) {
            $('.about-video-play').magnificPopup({
              type: 'video',
            });
          }
          
          if ($('.mfp-iframe').length) {
            $('.mfp-iframe').magnificPopup({
              type: 'iframe',
            });
          }
        
        
        /* -------------------------------------------------
        Nice Select
        ------------------------------------------------- */
        $('select').niceSelect();
        
        
        
        /* -------------------------------------------------
         WOW Animation
        ------------------------------------------------- */
          // @ts-ignore
        if ($('.wow').length) {
            var wow = new WOW({ // @ts-ignore
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0, // distance to the element when triggering the animation (default is 0)
                mobile: true, // trigger animations on mobile devices (default is true)
                live: true // act on asynchronously loaded content (default is true)
            });
            wow.init();
        }


        /*----------------------------------------
         back to top
        ----------------------------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 500);
        });

    });

    $(window).on("scroll", function() {
        /*---------------------------------------
          back to top
        -----------------------------------------*/
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(300);
        } else {
            ScrollTop.fadeOut(300);
        }

        /*---------------------------------------
         sticky active
        -----------------------------------------*/
        var scroll = $(window).scrollTop();
        if (scroll < 445) {
            $(".navbar").removeClass("sticky-active");
        } else {
            $(".navbar").addClass("sticky-active");
        }

    });


    $(window).on('load', function () {

        /*-----------------
         preloader
        ------------------*/
            var preLoder = $("#preloader");
        
            preLoder.delay(1000).fadeOut(300, function () {
                $("body").addClass("loaded");
            });
        
            $(document).on('click', '.cancel-preloader a', function (e) {
                e.preventDefault();
                preLoder.fadeOut(300, function () {
                    $("body").addClass("loaded");
                });
            });
        
            $('.back-to-top').fadeOut();

          /*======================================
  Año automático en el footer
========================================*/
  const yearElement = document.getElementById('current-year')
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear()
  }

    });


})(jQuery);