(function ($) {
	"use strict";
	jQuery(document).ready(function() {   
	
		// SlickNav Active
		$('#traffic-menu').slicknav({
			prependTo: "#mobile-menu-wrap",
			allowParentLinks: true
		});

		// Dropdown-menu set Icon
		$(".main-menu ul ul").parent("li").children("a").append(' <i class="fa fa-angle-down"></i>')
		
    });  
}(jQuery));	




	
	
	
