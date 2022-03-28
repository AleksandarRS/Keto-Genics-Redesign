(function ($) {
	"use strict";
	var $window = $(window);
	var windowsize = $(window).width();
	var $root = $("html, body");
	var $this = $(this);

    jQuery(document).ready(function($){

        // contextual links
        $('a.contextual-links-trigger').click(function(e) {
          e.preventDefault();
          $(this).next(".contextual-links").toggle();
        });

        // back to top
		$('#btn-back-to-top').click(function() {     
			$('body,html').animate({
				scrollTop : 0   
			}, 500);
		});
		
		  $window.scroll(function () {
			 var $scroll = $window.scrollTop();
			 if ($scroll > 50) {
				$('#btn-back-to-top').fadeIn(200); 
				$('.navbar').addClass('navbar_bg');
			 } else {
				 $('#btn-back-to-top').fadeOut(200);
				 $('.navbar').removeClass('navbar_bg');
				
			 }
		  });
/*		
		$("#sidebar").mCustomScrollbar({
			theme: "minimal"
		});
*/
		$('#dismiss, .overlay').on('click', function () {
			$('#sidebar').removeClass('active');
			$('.overlay').removeClass('active');
			$("body").removeClass("full-page"); 
		});

		$('.nav-link.cart').on('click', function () {
			$('#sidebar').addClass('active');
			$('.overlay').addClass('active');
			$("body").addClass("full-page");
			$('.collapse.in').toggleClass('in');
			$('a[aria-expanded=true]').attr('aria-expanded', 'false');
		});
		
	
    });
    
	
   	$(document).on('click','#close-viewing',function(){
		$("#viewing-lp").remove();
		event.preventDefault();
	});

   	$(document).on('click','#keep_shopping',function(){
		$( "#dismiss" ).trigger( "click" );
	});
   
}(jQuery));

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
		if(display != null){
		        display.textContent = minutes + ":" + seconds;
	
		}

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 12,
        display = document.querySelector('.stopwatch');
        display2 = document.querySelector('.stopwatch2');
    startTimer(fiveMinutes, display);
    startTimer(fiveMinutes, display2);
};