
$(document).ready(function () {
    // Находим блок карусели
    var firstTypeOfCarousel = $("#carousel1");

    // Запускаем плагин карусели
    firstTypeOfCarousel.owlCarousel({
        singleItem: true, // Показывать только 1 блок на всю ширину
        pagination: true
    });

    var secondTypeOfCarousel = $(".carousel2");
    secondTypeOfCarousel.owlCarousel({
        singleItem: true, // Показывать только 1 блок на всю ширину
        pagination: false
    });

    function repeatCarousel(nameCarousel){
        setInterval(function() {
            nameCarousel.trigger('owl.next');
        }, 5000);
    }

    repeatCarousel(firstTypeOfCarousel);
    repeatCarousel(secondTypeOfCarousel);




    // Назад
// При клике на "Назад"
    $('.js-prev').click(function () {

        // Запускаем перемотку влево
        secondTypeOfCarousel.trigger('owl.prev');

        return false;
    });

// Вперед
// При клике на "Вперед"
    $('.js-next').click(function () {

        // Запускаем перемотку вправо
        secondTypeOfCarousel.trigger('owl.next');

        return false;
    });

});
