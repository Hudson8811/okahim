$(document).ready(function () {
    var fwSlider = $('.full-width-slider');
    if (fwSlider.length > 0) {
        var nx = fwSlider.find("swiper-next")[0];
        var pr = fwSlider.find("swiper-prev")[0];

        var homepageFWSwiper = new Swiper('.full-width-slider .swiper-container', {
            loop: true,
             pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })
    }
});
