<<<<<<< HEAD
(function ($) {
	"use strict";
	jQuery(document).ready(function() {   

		// Sticky Footer
		var footerHeight = $('.site-footer').height();
		$('.site-main-wrapper').css('margin-bottom', footerHeight + 'px');

		// SlickNav Active
		$('#traffic-menu').slicknav({
			prependTo: "#mobile-menu-wrap",
			allowParentLinks: true
		});

		// Dropdown-menu set Icon
		$(".main-menu ul ul").parent("li").children("a").append(' <i class="fa fa-angle-down"></i>')
		
    });  
}(jQuery));	




	
	
	
=======
(function ($) {
	"use strict";
	jQuery(document).ready(function() {   

		// Sticky Footer
		var footerHeight = $('.site-footer').height();
		$('.site-main-wrapper').css('margin-bottom', footerHeight + 'px');

		// SlickNav Active
		$('#traffic-menu').slicknav({
			prependTo: "#mobile-menu-wrap",
			allowParentLinks: true
		});

		// Dropdown-menu set Icon
		$(".main-menu ul ul").parent("li").children("a").append(' <i class="fa fa-angle-down"></i>')
		
    });  
}(jQuery));	




	
	
	
>>>>>>> 8c9eb5a141b04a6336263af2df8047752e5cff10
