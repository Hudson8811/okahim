$(document).ready(function() {
    $('.catalog-menu-acord .has_child > a').click(function () {
        event.preventDefault();
        $(this).siblings('.popmenu').slideToggle();
        $(this).parents('.has_child').toggleClass('active');
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

var productionSwiper = new Swiper('.partners-swiper', {
    slidesPerView: 6,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.partners-swiper .swiper-pagination',
        clickable: true,
    },
});