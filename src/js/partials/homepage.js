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
                nextEl: '.swiper-button-next-c',
                prevEl: '.swiper-button-prev-c',
            },
        })
    }

    //section catalog
    console.log($('.catalog .tabs .item .title').siblings('.invisible-refs').html());
   $('.catalog .tabs .item .title').each(function () {

        $(this).tooltipster({
            animation: 'fade',
            delay: 200,
            content:$(this).siblings('.invisible-refs').html(),
            contentAsHTML: true,
            trigger: 'click',
            arrow:false,
            side: 'bottom',
            theme: ['tooltipster-noir', 'tooltipster-noir-customized'],
            interactive: true
         });
    });
});
