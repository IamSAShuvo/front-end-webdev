$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		loop:true,
    	margin:10,
    	nav:true,
    	navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    	responsive:{
    		0:{
    			items:1
    		},
        	600:{
            	items:1
        	},
        	1000:{
            	items:1
        	}
    	}
	})
})