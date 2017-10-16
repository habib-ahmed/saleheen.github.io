(function ($) {
	"use strict";
	
    $(document).ready(function() {   
        
        // OffCanvasMenu active
        jQuery(".menu-trigger").on("click", function() {
            jQuery(".OffCanvasMenu, .OffCanvas-overlay").addClass("active");
            return false;
        });
        jQuery(".menu-close, .OffCanvas-overlay").on("click", function() {
            jQuery(".OffCanvasMenu, .OffCanvas-overlay").removeClass("active");
        });

        // mesonry active
        jQuery(".product-list").masonry();

        //owlCarousel active
        jQuery(".homepage-slides").owlCarousel({
            items: 1,
            itemsDesktop : [1199,1],
			itemsDesktopSmall : [980,1],
			itemsTablet: [768,1],
			itemsMobile : [479,1],
            loop: true,
            autoPlay: true,
            autoPlayTimer: 3000,
            stopOnHover: true,
            pagination: false,
            navigation: true,
            navigationText : ["<i class='fa fa-long-arrow-left'</i>", "<i class='fa fa-long-arrow-right'</i>"]
        });

        //owlCarousel active on product-promotion-area
        jQuery(".product-promotion").owlCarousel({
            items: 1,
            itemsDesktop : [1199,1],
			itemsDesktopSmall : [980,1],
			itemsTablet: [768,1],
			itemsMobile : [479,1],
            loop: true,
            autoPlay: true,
            stopOnHover: true,
            pagination: true,
            navigation: false,
        });

    });
}(jQuery));