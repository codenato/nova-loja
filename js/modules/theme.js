(function($){
    // $(".lazy").lazyload();

    $('.menu-hamburger').click(function(){
      console.log('working');

      if ($('.menu-hamburger-fire').hasClass('hidden-xs')) {
        $('.menu-hamburger-fire').removeClass('hidden-xs');
      } else {
        $('.menu-hamburger-fire').addClass('hidden-xs');
      }
    });

    $("#owl-demo").owlCarousel({
      items: 1,
      singleItem: true,
      loop:true,
      autoPlay : 5000,
      stopOnHover : false
    });

    $('.full-img').fullscreener();
})(jQuery);
