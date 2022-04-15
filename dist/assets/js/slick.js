$(document).ready(function(){

    // if ($(".testimonials-slder").length) {
    //     let currentSlide;
    //     let slidesCount;
    //     let sliderCounter = document.createElement('div');
    //     sliderCounter.classList.add('slider__counter');
        
    //     let updateSliderCounter = function(slick) {
    //         currentSlide = slick.slickCurrentSlide() + 1;
    //         slidesCount = slick.slideCount;
    //         $(sliderCounter).html('<span>' + currentSlide + '/</span>' + '<span>' + slidesCount + '</span>')
    //     };
      
    //     $(".testimonials-slder").on('init', function(event, slick) {
    //         $(".testimonials-slder").append(sliderCounter);
    //         updateSliderCounter(slick);
    //     });
      
    //     $(".testimonials-slder").on('afterChange', function(event, slick, currentSlide) {
    //         updateSliderCounter(slick, currentSlide);
    //     });

    //     $(".testimonials-slder").slick({
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         dots: false,
    //         infinite: false,
    //         arrows: true,
    //         prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i>',
    //         nextArrow: '<button class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i>'
    //     });
    // }

    // $('.testimonials-slder').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     dots: false,
    //     infinite: false,
    //     arrows: true,
    //     prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i>',
    //     nextArrow: '<button class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i>'
    // });


    // if ($(".steps-slder").length) {
    //     let currentSlide;
    //     let slidesCount;
    //     let sliderCounter = document.createElement('div');
    //     sliderCounter.classList.add('slider__counter');
        
    //     let updateSliderCounter = function(slick) {
    //         currentSlide = slick.slickCurrentSlide() + 1;
    //         slidesCount = slick.slideCount;
    //         $(sliderCounter).html('<span>' + currentSlide + '/</span>' + '<span>' + slidesCount + '</span>')
    //     };
      
    //     $(".steps-slder").on('init', function(event, slick) {
    //         $(".steps-slder").append(sliderCounter);
    //         updateSliderCounter(slick);
    //     });
      
    //     $(".steps-slder").on('afterChange', function(event, slick, currentSlide) {
    //         updateSliderCounter(slick, currentSlide);
    //     });

    //     $(".steps-slder").slick({
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         dots: false,
    //         infinite: false,
    //         arrows: true,
    //         prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i>',
    //         nextArrow: '<button class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i>'
    //     });
    // }

    // $('.steps-slder').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     dots: false,
    //     infinite: false,
    //     arrows: true,
    //     prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i>',
    //     nextArrow: '<button class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i>'
    // });

    // $('.cta-slider').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     dots: false,
    //     infinite: false,
    //     arrows: true,
    //     prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i>',
    //     nextArrow: '<button class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i>'
    // });

    if ($(".single-post-slider").length) {
        $('.single-post-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            infinite: false,
            // fade: true,
            adaptiveHeight: true,
            arrows: true,
            prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i>',
            nextArrow: '<button class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i>'
        });
    }

    if ($(".product-slider-for").length) {
        $('.product-slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i>',
            nextArrow: '<button class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i>',
            fade: true,
            asNavFor: '.product-slider-nav'
        });
        $('.product-slider-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            // vertical:true,
            asNavFor: '.product-slider-for',
            dots: false,
            focusOnSelect: true,
            // verticalSwiping:false,
            arrows: false,
            responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    vertical: false,
                }
            },
            {
              breakpoint: 410,
              settings: {
                slidesToShow: 2,
                vertical: false,
              }
            },
            ]
        });
    }
    
});