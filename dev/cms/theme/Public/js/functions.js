jQuery(function ($) {
   "use strict";
   var $window = $(window);
   var windowsize = $(window).width();
   var $root = $("html, body");
   var $this = $(this);

    $(document).on('change', '.search-cat1', function () {

        var parent_id = $(this).val();

        var url = "/Categories/ajaxGetSubCategories";
        $.ajax({
            url: url,
            data: {
                parent_id: parent_id
            },
            type: "POST"

        }).done(function (data) {

            var list_cat2 = $.parseJSON(data);

            var $el = $(".search-cat2");

            $el.empty(); // remove old options
            $.each(list_cat2, function (value, key) {
                $el.append($("<option></option>")
                        .attr("value", value).text(key));
            });
        });
    });

    $(document).on('change', '.cart-country-shipping', function () {

        var country_id = $(this).val();

        var url = "/country_manager/state_provinces/ajaxGetStateProvinces";
        $.ajax({
            url: url,
            data: {
                country_id: country_id
            },
            type: "POST"

        }).done(function (data) {

            var state_provinces = $.parseJSON(data);

            var $el = $("#CustomerShippingStateId");

            $el.empty(); // remove old options
            $.each(state_provinces, function (value, key) {
                $el.append($("<option></option>")
                        .attr("value", value).text(key));
            });
        });
    });

	$(document).on('change', '.cart-country-billing', function () {

        var country_id = $(this).val();

        var url = "/country_manager/state_provinces/ajaxGetStateProvinces";
        $.ajax({
            url: url,
            data: {
                country_id: country_id
            },
            type: "POST"

        }).done(function (data) {

            var state_provinces = $.parseJSON(data);

            var $el = $("#CustomerBillingStateId");

            $el.empty(); // remove old options
            $.each(state_provinces, function (value, key) {
                $el.append($("<option></option>")
                        .attr("value", value).text(key));
            });
        });
    });



   /* ------- Smooth scroll ------- */
   $(document).on("click", "a.pagescroll", function (event) {
      event.preventDefault();
      $("html,body").animate({
         scrollTop: $(this.hash).offset().top
      }, 1200);
   });
   
   
    if ($("#buy-product-nav").hasClass("buy-product")) {
      $window.scroll(function () {
         var $scroll = $window.scrollTop();
         var $navbar = $(".buy-product");
         if ($scroll > 200) {
            $navbar.attr("hidden",false);
         } else {
			$navbar.attr("hidden",true);
         }
      });
   }


   

    $(document).ready(function($){
           
        $(".how-it-work-slider").owlCarousel({
            items:1,
            nav:false,
            dot:true,
            loop:true,
            margin:20,
            autoplay:false,
            autoplayTimeout:3000,
            smartSpeed:1000,
          
        });

              
        $(".testimonial-slider").owlCarousel({
            items:3,
            nav:false,
            dot:true,
            loop:true,
            margin:20,
            autoplay:false,
            autoplayTimeout:3000,
            smartSpeed:1000,
             responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                   
                },
                768:{
                    items:2,
                   
                },
                1000:{
                    items:3,
                   
                }
            }
          
        });

   

    });
   

   if ($(".wow").length) {
      var wow = new WOW({
         boxClass: 'wow',
         animateClass: 'animated',
         offset: 0,
         mobile: false,
         live: true
      });
      new WOW().init();
   }
   
	AOS.init();

});

function setDate() {
	var objToday = new Date(),
	domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear();

	var today =  dayOfMonth + " of " + curMonth + ", " + curYear;

	var numDay =  new Date(objToday.getFullYear(), objToday.getMonth()+1, 0).getDate();

	$('#timeDate1').html(curMonth + "1, " + curYear);
	$('#timeDate2').html(curMonth + " " + numDay + ", " + curYear);
}


window.onload = function () {

	setDate();

};




