// Keep counter section below navbar on scroll
////////////////////////////////////////////////
var counterTop = $('#counter').offset().top;
$(window).scroll(function() {
    var currentScroll = $(window).scrollTop();
    if ((currentScroll + 50) >= counterTop) {
        $('#counter').addClass('sticky');
        $('#recentDestinations').addClass('sticky2');
    } else {
        $('#counter').removeClass('sticky');
        $('#recentDestinations').removeClass('sticky2');
    }
});