jQuery("document").ready(function(){	
	jQuery('.hero-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
		    dots: true,
        fade: true
    });
    jQuery('.home-collection-wrp').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
            dots: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                dots: true
              }
            }
          ]
    });
    jQuery(function() {                       
        jQuery(".mobile-menu").click(function() {   
            jQuery(".menu").slideToggle();       
            jQuery(this).toggleClass("open");
        });
    });
     jQuery(function() {                       
        jQuery(".search").click(function() {   
            jQuery(".search-box").slideToggle();   
        });
    });
});
	