// JavaScript Document

(function($){
 "use strict";
	
	// back to top
	$(window).scroll(function(){
		if($(this).scrollTop() > 300){
			$('.go-to-top').addClass("show").removeClass("hide");
		}
		else{
			$('.go-to-top').addClass("hide").removeClass("show");
		}
		
	});
	$(document).ready(function(){
	$('.go-to-top').click(function(){
		$('html , body').animate({scrollTop: 0},1000);
		return false;
	});
		
		});
	
	
	
	
	
	// search popup open 
	$(document).ready(function(){
		$('.search-toggle').on('click', function(){
			
			$('.search-popup').css({"opacity" : "1" , "visibility" : "visible"});
		});
		
		$('.search-toggle').on('click', function(){
			
			$('.search-toggle').css({"display" : "none"});
			$('.search-close').css({"display" : "block"});
		});
		
		$('.search-close').on('click', function(){
			
			$('.search-toggle').css({"display" : "block"});
			$('.search-close').css({"display" : "none"});
		});
		
		// close search
		$('.search-close').on('click', function(){
			
			$('.search-popup').css({"opacity" : "0" , "visibility" : "hidden"});
		});
		
		// mobile navigation open & close 
		
		$('#mobile-open').on('click' , function(){
			$('#mob-nav .mob-sidebar').css({"left" : "0"});	
			});
		
		$('#mobile-close').on('click' , function(){
			$('#mob-nav .mob-sidebar').css({"left" : "-100%"});	
			});
		
			//mobile navigation 
		
	 $("#navigation").slicknav({
        prependTo: '#mobile-menu',
        allowParentLinks: true
    });
		
		// website banner slider
		$('.website-banner').nivoSlider({
    effect: 'random',
    slices: 15,
    boxCols: 12,
    boxRows: 8,
    animSpeed: 500,
    pauseTime: 5000,
    startSlide: 0,
    directionNav: true,
    controlNavThumbs: false,
    pauseOnHover: false,
    manualAdvance: false,
  });
	
	
	});
	
	// nav sticky
	$(window).scroll(function(){
		if($(this).scrollTop()> 136){
			if (screen.width >= 992) {
               $('.navigation > ul > li a').css({"color" : "#fff"});
             }
			$('.nav-section').removeClass('nav-before-sticky');				
			$('.nav-section').addClass('nav-sticky');
			$('.nav-section').css({"background" : "#cc3333" , "box-shadow" :"0px 2px 10px #e3e2e2"});
			$('.nav-section .container').css({"background" : "none"});
			$('.nav-wrapper .lang select').css({"background-color" : "#fff", "color" : " #2a435d"});
			$('.search-popup').css({"top" : "76px"});
			$('.mobile-open span').css({"color" : "#fff"});
			$('.search-popup .search-box').css({"background" : "#ffcc00"});
			$('.nav-wrapper .navbar-brand .logo-1').css({"display" : "none"});
			$('.nav-wrapper .navbar-brand .logo-2').css({"display" : "block"});
			$('.search-item .search-toggle span , .search-item .search-close span ').css({"color" : "#fff"});
			$('.navigation .main-nav a').mouseenter(function(){
				$(this).css({"color" : "#ffcc00"});
			});
			$('.navigation .main-nav a').mouseleave(function(){
				$(this).css({"color" : "#fff"});
			});
			
			$('.navigation .main-nav a.active').mouseenter(function(){
				$(this).css({"color" : "#ffcc00"});
			});
			$('.navigation .main-nav a.active').mouseleave(function(){
				$(this).css({"color" : "#ffcc00"});
			});
			$('.navigation .main-nav .desk-ver-icon').css({"color" : "#fff"});
			   
		}
		else{
			
			if (screen.width >= 992) {
               $('.navigation > ul > li a').css({"color" : " #2a435d"});
             }
				
			$('.nav-section').addClass('nav-before-sticky');
			$('.nav-section').removeClass('nav-sticky');
			$('.nav-section').css({"background" : "none" , "box-shadow" :"none"});
			$('.nav-section .container').css({"background" : "#fff"});
			$('.nav-wrapper .lang select').css({"background-color" :  "#fbc707", "color" : " #fff"});
			$('.search-popup').css({"top" : "136px"});
			$('.mobile-open span').css({"color" : "#2a435d"});
			$('.search-popup .search-box').css({"background" : "#cc3333"});
			$('.nav-wrapper .navbar-brand .logo-1').css({"display" : "block"});
			$('.nav-wrapper .navbar-brand .logo-2').css({"display" : "none"});
			$('.search-item .search-toggle span , .search-item .search-close span ').css({"color" : "#2a435d"});
			$('.navigation .main-nav a').mouseenter(function(){
				$(this).css({"color" : " #cc3333"});
			});
			$('.navigation .main-nav a').mouseleave(function(){
				$(this).css({"color" : "#2a435d"});
			});
			
			$('.navigation .main-nav a.active').mouseenter(function(){
				$(this).css({"color" : "#cc3333"});
			});
			$('.navigation .main-nav a.active').mouseleave(function(){
				$(this).css({"color" : "#cc3333"});
			});
			$('.navigation .main-nav .desk-ver-icon').css({"color" : "#2a435d"});
		}
	});
	
	$(document).ready(function() {

		// our service 	
		$('.our-services .service-item').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.our-services .service-item').removeClass('current');
		$('.our-services .tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
		
	// top tour package 	
		$('.tours-details .tour-type-name').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.tours-details .tour-type-name').removeClass('current');
		$('.tours-details .tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
		
		// top luxury package 	
		$('.luxury-details .tour-type-name').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.luxury-details .tour-type-name').removeClass('current');
		$('.luxury-details .tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
		
		
		// top trending slider
		
		$(".top-trending").owlCarousel({
        
			autoplay: true,
	      autoplayTimeout: 2000,	
	       autoplayHoverPause:false,
			autoplaySpeed: 2000,
           dots: false,
	   touchDrag: false,
	      nav:true,	
          loop: true,
		  rtl: true,
	      items:3,
		responsiveClass:true,
			responsive:{
        0:{
            items:1,
	    touchDrag: true,
	     mouseDrag: false
			
        },
				576:{
            items:2,
	    touchDrag: true ,
	     mouseDrag: false
          
        },
        768:{
            items:3,
	    touchDrag: true,
	     mouseDrag: false
        },
        
    }
	     
 
        });
		
		// flight booking
		
		$(" .flight-book .book-section").owlCarousel({
        
			autoplay: false,
           dots: false,
	      nav:true,	
	    touchDrag: false,
          loop: true,
	      items:3,
		responsiveClass:true,
			responsive:{
        0:{
            items:1,
	    touchDrag: true ,
	     mouseDrag: false
			
        },
				768:{
            items:2,
	    nav:true,
	    touchDrag: true,
	     mouseDrag: false
					
          
        },
        992:{
            items:3,
			 nav:false,	
        },
        
    }
	     
 
        });
		
		// veno box img gallery  book-section
		
		$('.tours-details .top-tours-gallery , .trending-tour .trending-tour-gallery , .video-banner .video-player').venobox({
			spinner:"rotating-plane"
		});
		
		// animated number counter
		$('[data-toggle="counter-up"]').counterUp({
		delay: 10,
        time: 4000,
		easing:"swing"	
  });
	
	
	
		// query form
		$(".query-box .query-top").on('click' , function(){
			$(".query-box").toggleClass("query-section");
			$(".query-box .query-top i").toggleClass("toogle-icon");
		});	
		
		//welcome popup close
		$(".welcome-popup .popup-close , .welcome-popup .popup-overlay").on('click' , function(){
			$(".welcome-popup").addClass("popup-disable").removeClass("popup-show");
		});
		
		$( function() {
    $( "#q-datepicker" ).datepicker();
  } );	
		// quote close
		$(".quote-box .quote-close , .quote-box .quote-overlay").on('click', function(){
			$(".quote-box").css({
				"opacity" : "0" , "visibility" : "hidden" , "transform" : "scale(0)"
			});
		});
		// quote open
		$(".quote-btn-desktop , .mobile-quote-btn").on('click', function(){
			$(".quote-box").css({
				"opacity" : "1" , "visibility" : "visible" , "transform" : "scale(1)"
			});
		});
		
		$(".mobile-quote-btn").on('click', function(){
			$('.query-box').removeClass("query-section");
		});
		
		// choosen select 
		$('.select-content select  ').chosen({
			disable_search_threshold: 8,
			
		});
	});
	
	// query form
		$(window).on('load', function(){
			setTimeout(function(){
                $('.query-box').toggleClass("query-section");	
				$(".query-box .query-top i").toggleClass("toogle-icon");
			},5000);
			
			//welcome popup close .welcome-popup .popup-overlay
			setTimeout(function(){
				$(".welcome-popup").addClass("popup-show").removeClass("popup-hide");
			},10000);
			
		});
	
	
	
// top hotels isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.top-hotel-container').isotope({
      itemSelector: '.top-hotel-item',
      layoutMode: 'fitRows'
    });

    $('#top-hotel-filters li').on('click', function() {
      $("#top-hotel-filters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });	
	  
  });		
		

		$(document).ready(function() {


// quote button scroll animation
	var scrollAnimate = parseInt($(".quote-btn-desktop").css('top'));
	$(window).scroll(function(){
		var scrollAnimateTop = $(document).scrollTop() + scrollAnimate + "px";
		$(".quote-btn-desktop").stop(true,false);
		$(".quote-btn-desktop").animate({top: scrollAnimateTop},1000,"linear"); 
	});
		});
	
	
})(jQuery);
