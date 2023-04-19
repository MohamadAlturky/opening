$(document).ready(function () {
    $('#sign-up').click(() => {

        $('.bottom-left').animate({
            'width': '190vw',
            'height': '190vw',
            'left': '-20vw',
        }, 'slow');
        
        
        $('.bottom-right').animate({
            'width': '190vw',
            'height': '190vw',
            'left': '-20vw',
        }, 'slow');
        
        
        $('body').animate({'opacity': '0'},'middle');
        setTimeout(function () {
            window.location.href = "..\\opening\\signUp.html";
        }, 700);
    });


    $('#log-in').click(() => {

        $('.bottom-left').animate({
            'width': '190vw',
            'height': '190vw',
            'left': '-20vw',
        }, 'slow');
        
        
        $('.bottom-right').animate({
            'width': '190vw',
            'height': '190vw',
            'left': '-20vw',
        }, 'slow');
        
        
        $('body').animate({'opacity': '0'},'middle');
        setTimeout(function () {
            window.location.href = "..\\opening\\logIn.html";
        }, 700);
    });
});