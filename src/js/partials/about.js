$(document).ready(function() {
    $('.acords-blocks .circle-btn').click(function () {
        event.preventDefault();
        $(this).parents('.item').find('ol').slideToggle();
        $(this).parents('.item').toggleClass('active');
    });

    $(".about-page .first-block .grid-images").smoothDivScroll({
        mousewheelScrolling: "",
        manualContinuousScrolling: false,
        autoScrollingMode: "always",
        autoScrollingDirection: "backAndForth",
        autoScrollingStep: 1,
        touchScrolling: true
    });
    
});


var productionSwiper = new Swiper('.production-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    pagination: {
        el: '.production-swiper .swiper-pagination',
        clickable: true,
    },
});

var partnersSwiper = new Swiper('.partners-swiper', {
    slidesPerView: 6,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.partners-swiper .swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        300: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        760: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    }
});