jQuery("#carousel").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
     /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 12000,
    smartSpeed: 800,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 3
      },
  
      1024: {
        items: 3
      },
  
      1366: {
        items: 3
      }
    }
  });
  
  
  
  
  $(window).scroll(function() {
      var $height = $(window).scrollTop();
    if($height > 300) {
          $('.stickyNavbar').addClass('active');
      } else {
          $('.stickyNavbar').removeClass('active');
      }
  });
  
  $(".hamburger").click(function(){
    $(".ham_span").toggleClass("toggleHamburger");
    $(".navbar").toggleClass("toggleHamburger");
    $(".hamburger").toggleClass("toggleHamburger");
  });