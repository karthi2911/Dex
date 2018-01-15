$( document ).ready(function() {
    if($(window).width() < 812){
        $('.callouts ul').addClass('owl-carousel owl-theme');
    }
    else {
        $('.callouts ul').trigger('destroy.owl.carousel');
        $('.callouts ul').removeClass('owl-carousel owl-theme');
    }
    $('.callouts .owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        responsive:{
            0:{
                items:1
            }
        }
    });
    if($(window).width() >= 812) {
        $('.lonelyGingerContent figure').appendTo('.gingerImage');
        $('.fightingPowerContent figure').appendTo('.fightingImage');
    }
    else {
        $( '.lonelyGingerContent figure' ).next( ".lonelyGingerContent h1" );
        $( '.fightingPowerContent figure' ).next( ".fightingPowerContent h1" );
    }

    $(window).resize(function() {
        if($(window).width() < 812){
            $('.callouts ul').addClass('owl-carousel owl-theme');
        }
        else {
            $('.callouts ul').trigger('destroy.owl.carousel');
            $('.callouts ul').removeClass('owl-carousel owl-theme');
        }
        $('.callouts .owl-carousel').owlCarousel({
            loop:true,
            nav:true,
            responsive:{
                0:{
                    items:1
                }
            }
        });
        if($(window).width() >= 812) {
            $('.lonelyGingerContent figure').appendTo('.gingerImage');
            $('.fightingPowerContent figure').appendTo('.fightingImage');
        }
        else {
            $('.lonelyGingerContent figure').next(".lonelyGingerContent h1");
            $('.fightingPowerContent figure').next(".fightingPowerContent h1");
        }
    });
});