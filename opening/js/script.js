$(document).ready(function () {
    $('.logo').hover(function () {
        $(this).animate({
            rotate: '-=5deg',
            'width': '65px',
            'height': '65px',
        }, 'fast');
    }, function () {
        $(this).animate({
            rotate: '+=5deg',
            'width': '60px',
            'height': '60px',
        }, 'fast');
    });



    setTimeout(() => {
        $('.right ').animate({ 'opacity': '100%' }, 'middle');
        $('.left ').animate({ 'opacity': '100%' }, 'middle');
    }, 800);
    setTimeout(() => {
        $('.top').animate({ 'opacity': '100%' }, 'middle');
        $('.bottom').animate({ 'opacity': '100%' }, 'middle');
    }, 1600);
    setTimeout(() => {
        $('.bottom-right').animate({ 'opacity': '100%' }, 'middle');
        $('.bottom-left').animate({ 'opacity': '100%' }, 'middle');
    }, 2400);

    setTimeout(() => {
        $('.logo').animate({ 'opacity': '100%' }, '100');
        $('.btn').animate({ 'opacity': '100%' }, '100');



        if ($(window).width() <= 1005) {

            $('.bottom').animate({
                'width': '0vw',
                'height': '0vw',
            }, 'slow');


            $('.logo').animate({
                'width': '0px',
                'height': '0px',
            }, 'fast');

            var $hidden = $('#hidden-until-small');
            $($hidden).animate({
                'opacity': '100%'
            }, 'fast');
            $($hidden).css('display', 'flex');


            $('.hidden-content').animate({
                'opacity': '100%'
            }, 'fast');
            $('.hidden-content').css('display', 'flex');

        }
    }, 3200);




    $(window).on('resize', function () {
        var $hidden = $('#hidden-until-small');
        if ($(window).width() <= 1005) {

            $('.bottom').animate({
                'width': '0vw',
                'height': '0vw',
            }, 'slow');

            $($hidden).animate({
                'opacity': '100%'
            }, 'fast');
            $($hidden).css('display', 'flex');

            $('.hidden-content').animate({
                'opacity': '100%'
            }, 'fast');
            $('.hidden-content').css('display', 'flex');
            $('.logo').animate({
                'width': '0px',
                'height': '0px',
            }, 'fast');
            
        } else {
            $($hidden).animate({
                'opacity': '0%',
            }, 'fast');
            $($hidden).css('display', 'none');

            $('.hidden-content').animate({
                'opacity': '0%',
            }, 'fast');
            $('.hidden-content').css('display', 'none');

            $('.logo').animate({
                'width': '60px',
                'height': '60px',
            }, 'fast');


            $('.bottom').animate({
                'width': '120vw',
                'height': '120vw',
            }, 'slow');

        }
    });



});