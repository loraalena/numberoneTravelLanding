
$(document).ready(function () {
    // Находим блок карусели
    var firstTypeOfCarousel = $("#carousel1");

    // Запускаем плагин карусели
    firstTypeOfCarousel.owlCarousel({
        singleItem: true, // Показывать только 1 блок на всю ширину
        pagination: true,
        //slideSpeed: 2000,
        autoPlay: true

    });
    // var carouselElement = $(".caroueselElement");
    // carouselElement.addCssSpeed(2000);


    var secondTypeOfCarousel = $(".carousel2");

    secondTypeOfCarousel.owlCarousel({
        singleItem: true, // Показывать только 1 блок на всю ширину
        pagination: false,
        // slideSpeed: 3000,
        autoPlay: true,


    });

    var thirdTypeOfCarousel = $(".carousel3");

    thirdTypeOfCarousel.owlCarousel({
        singleItem: true, // Показывать только 1 блок на всю ширину
        pagination: false,
        // slideSpeed: 3000,
        autoPlay: true
        // rewindSpeed: 2000
    });

    // function repeatCarousel(nameCarousel, sec){
    //     setInterval(function() {
    //         nameCarousel.fadeTo(1000).trigger('owl.next');
    //     }, sec);
    // }
    //
    // repeatCarousel(firstTypeOfCarousel, 6000);
    // repeatCarousel(secondTypeOfCarousel, 4000);
    // repeatCarousel(thirdTypeOfCarousel,4000);




    // Назад
// При клике на "Назад"
    $('.js-prev').click(function () {

        // Запускаем перемотку влево
        secondTypeOfCarousel.trigger('owl.prev');
        thirdTypeOfCarousel.trigger('owl.prev');
        return false;
    });

// Вперед
// При клике на "Вперед"
    $('.js-next').click(function () {

        // Запускаем перемотку вправо
        secondTypeOfCarousel.trigger('owl.next');

        return false;
    });


    $('.jsprev').click(function () {

        // Запускаем перемотку влево

        thirdTypeOfCarousel.trigger('owl.prev');
        return false;
    });

// Вперед
// При клике на "Вперед"
    $('.jsnext').click(function () {

        // Запускаем перемотку вправо

        thirdTypeOfCarousel.trigger('owl.next');
        return false;
    });

});
