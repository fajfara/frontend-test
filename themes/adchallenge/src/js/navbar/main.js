export default function initNavbarJS() {

  // Check if on frontpage
  if(document.querySelector('.path-frontpage')) {
    // jquery
    (function($) {

      var nav = $('ul.menu'),
        nav_height = nav.outerHeight(),
        blocks = $('#challenge-home, .region.region-content > div:nth-child(3), #challenge-event, #challenge-about-me');

      console.log(blocks);

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
            nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
          }
        });
      }

      // Using jquery for smooth animation
      nav.find('a').on('click', function () {
        var $el = $(this),
          id = $el.attr('href'),
          scrollTopPos = 0;


        if(!(id === '#challenge-home')) {
          if(id === '#challenge-news') {
            scrollTopPos = $('.region.region-content > div:nth-child(3)').offset().top - nav_height;
          } else {
            scrollTopPos = $(id).offset().top - nav_height;
          }

        }

        $('html, body').animate({
          scrollTop: scrollTopPos
        }, 500);

        return false;
      });

    }(jQuery))

    // navbar display
    const openNavButton = document.getElementById('navbar-mobile-btn'),
          navbarContent = document.querySelector('header .container .region.region-header nav');

    openNavButton.addEventListener('click', () => {
      console.log("Clicked the menu button");
      navbarContent.classList.toggle('open');
    })
  }


}
