//Scroll to top on reload
//////////////////////////////////
$(document).ready(function() {
  $("html,body").animate({scrollTop: 0}, 100); //100ms for example
});


// Keep navbar at top on scroll
//////////////////////////////////
var fixmeTop = $('.navbar').offset().top;
$(window).scroll(function() {
    var currentScroll = $(window).scrollTop();
    if (currentScroll >= fixmeTop) {
        $('.navbar').addClass('sticky-nav');
        $('#headline').addClass('margin-scroll');
        $('#chartdiv').addClass('margin-scroll');
        $('#continentTabs').addClass('margin-scroll');
        $('#nav-items').css("margin-right", 93);
        $('#brand').addClass('appear');
        $('.navbar-right').css("margin-right", -50);
        $('.social-nav').css("visibility", "visible");
    } else {
        $('.navbar').removeClass('sticky-nav');
        $('#headline').removeClass('margin-scroll');
        $('#chartdiv').removeClass('margin-scroll');
        $('#continentTabs').removeClass('margin-scroll');
        $('#nav-items').css("margin-right", -90);
        $('#nav-items').css("text-align", "center");
        $('#nav-items').css("transition", "none");
        $('#brand').removeClass('appear');
        $('.social-nav').css("visibility", "hidden");
    }
});