$(document).ready(function () {
    let owl = $('header .owl-carousel');
    owl.owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 10000,
        animateOut: 'bounceOutDown',
        animateIn: 'flipInX',
        smartSpeed: 1000,
        dots: true,
        rewind: true,
        nav: false
    });
    let owl1 = $('main .owl-carousel');
    owl1.owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 6000,
        animateOut: 'flipOutY',
        animateIn: 'flipInX',
        smartSpeed: 1000,
        dots: false,
        nav: true,
        loop: true
    });
});