$(document).ready(function(){
    var $sticky = $('.social-share-options');
    var $stickyrStopper = $('#whoweare');
    if (!!$sticky.offset()) { // make sure ".sticky" element exists
        if( $(window).width() > 990 ) {
            var generalSidebarHeight = $sticky.innerHeight();
            var stickyTop = $sticky.offset().top;
            var stickOffset = 95;
            var stickyStopperPosition = $stickyrStopper.offset().top;
            
            var stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
            console.log(stopPoint);
            var diff = stopPoint + stickOffset;

            $(window).scroll(function(){ // scroll event
            var windowTop = $(window).scrollTop(); // returns number

            if (stopPoint < windowTop) {
                $sticky.css({ position: 'absolute', top: diff, opacity: 0 });
            } else if (stickyTop < windowTop+stickOffset) {
                $sticky.css({ position: 'fixed', top: stickOffset, opacity: 1 });
            } else {
                $sticky.css({position: 'absolute', top: 'initial', opacity: 1});
            }
            });

        }
    }
});