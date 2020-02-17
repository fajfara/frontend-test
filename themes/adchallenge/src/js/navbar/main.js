export default function initNavbarJS() {

  // Check if on frontpage
  if(document.querySelector('.path-frontpage')) {
    // jquery
    (function($) {

      var nav = $('ul.menu'),
        nav_height = nav.outerHeight(),
        blocks = $('#block-top-content-header, .region.region-content > div:nth-child(3), #challenge-event, #challenge-about-me');

      checkNavbarActive($(window));

      $(window).on('scroll', function () {
        checkNavbarActive($(this));
      });

      function checkNavbarActive(windowThis) {
        var cur_pos = $(windowThis).scrollTop();

        blocks.each(function() {
          var top = $(this).offset().top - nav_height - 50,
              bottom = top + $(this).outerHeight();

          if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            blocks.removeClass('active');

            $(this).addClass('active');
            if($(this).attr('id') === 'block-top-content-header') {
              nav.find('a[href="#challenge-home"]').addClass('active');
            } else {
              nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
            }

          }
        });
      }

      // Using jquery for smooth animation
      nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href'),
            scrollTopPos = 0,
            mobileOffset = 200;

        if(!(id === '#challenge-home')) {
          if(id === '#challenge-news') {
            scrollTopPos = $('.region.region-content > div:nth-child(3)').offset().top - nav_height;
            if(window.outerWidth <= 576) {
              scrollTopPos += mobileOffset;
            }
          } else {
            scrollTopPos = $(id).offset().top - nav_height;
            if(window.outerWidth <= 576) {
              scrollTopPos += mobileOffset;
            }
          }
        }



        $('html, body').animate({
          scrollTop: scrollTopPos
        }, 500);

        return false;
      });

    }(jQuery))

    if(window.outerWidth <= 576) {
      // navbar display
      const openNavButton = document.getElementById('navbar-mobile-btn'),
        navbarContent = document.querySelector('header .container .region.region-header nav');

      openNavButton.addEventListener('click', () => {
        navbarContent.classList.toggle('open');
      });

      document.querySelectorAll('nav#block-adchallenge-main-menu ul.menu li a').forEach(item => {
        item.addEventListener('click', () => {
          navbarContent.classList.toggle('open');
          openNavButton.classList.toggle('active');
        })
      })
    }
  }


}
