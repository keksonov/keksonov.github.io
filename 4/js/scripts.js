$(document).ready(function()  {
  // slider 1
  $('.header-slider').owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    nav: true,
    navText: ['','']
  });
  // slider 2

  $('.ads-slider').owlCarousel({
    items: 1,
    dots: true,
    loop: true,
    nav: false,
    responsive: {
      480: {
        items: 1
      },
      768: {
        items: 2
      }
    }
  });

  //slider nav button

    var itemWidth = $('.owl-carousel').width();
    $('.owl-prev').css('margin-right', itemWidth - 164);
    $('.vip-item').height(this.width /2);
    $(window).on('resize', function() {
      $('.vip-item').height(this.width /2);
      var itemWidth = $('.owl-carousel').width();
      $('.owl-prev').css('margin-right', itemWidth - 164);
    })

    var width = $(window).width();
    if (width <= 768) {
      $('.nav').addClass('nav-mobile').removeClass('nav');
    }
    $('.menu-open').on('click', function() {
      $('.nav-mobile').toggleClass('active');
    })
})
