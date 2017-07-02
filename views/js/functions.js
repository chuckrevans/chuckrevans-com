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
        $('.navbar').css({
            position: 'fixed',
            top: '0',
            left: '0',
            "z-index": "999",
        });
        // $('.navbar').css("box-shadow", '0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.16)');
        // $('.navbar').css("-webkit-box-shadow", '0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.16)');
        $('#headline').css("marginTop", 50);
        $('#chartdiv').css("marginTop", 75);
        $('#continentTabs').css("marginTop", 50);
        // $('#nav-items').css("text-align", "right");
        // $('#nav-items').css("transition", ".5s");
        $('#nav-items').css("margin-right", 93);
        // $('#brand').css("display", "block");
        // $('#brand').css("margin-left", 25);
        $('#brand').addClass('appear');
        $('.navbar-right').css("margin-right", -50);
        $('.social-nav').css("visibility", "visible");
    } else {
        $('.navbar').css({
            position: 'static',
            background: 'white'
        });
        // $('.navbar').css("box-shadow", 'none');
        // $('.navbar').css("-webkit-box-shadow", 'none');
        $('#headline').css("marginTop", 0);
        $('#chartdiv').css("marginTop", 25);
        $('#continentTabs').css("marginTop", 0
        );
        // $('#brand').css("display", "none");
        $('#brand').removeClass('appear');
        $('#nav-items').css("margin-right", -90);
        $('#nav-items').css("text-align", "center");
        $('#nav-items').css("transition", "none");
        $('#brand').removeClass('appear');
        $('.social-nav').css("visibility", "hidden");
    }
});