

$(function() {
    $('.slider').slick({
        arros: false,
        fade: true,
        autoplay: 3000,
        dots: true,
        prevArrow: false,
        nextArrow: false
        
    })
});

    $('.header-btn').on('click', () =>  {
        $('.menu').addClass('active');
        $('.header-btn').fadeTo("fast", 0.0);
    });

    $('.close-btn').on('click', () => {
       
        $('.menu').removeClass('active');
        $('.header-btn').fadeTo("fast", 1.0);
    });

console.log('asdasd');
