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
    $('.catalog .tabs .item .title').each(function () {

        $(this).tooltipster({
            animation: 'fade',
            delay: 200,
            content: $(this).siblings('.invisible-refs').html(),
            contentAsHTML: true,
            trigger: 'custom',
            triggerOpen: {
                click: true,
            },
            arrow: false,
            side: 'bottom',
            viewportAware: false,
            theme: ['tooltipster-noir', 'tooltipster-noir-customized'],
            interactive: true,

            minWidth: 372,
            maxWidth: 372,

            functionBefore: function(){
                $('.catalog .tabs .item .title').tooltipster('hide');
            },

            functionReady: function(){
                $('.tooltipster-content .close').click(function(){
                    $('.catalog .tabs .item .title').tooltipster('hide');
                });
            },
        });
    });

    $('.catalog .tab-controls .item').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.catalog .tabs .tab.active').removeClass('active').siblings().addClass('active');
    });

    //section predstavitelstva

    $('.predstavitelstva .map .points .point').each(function () {

        $(this).tooltipster({
            animation: 'fade',
            delay: 200,
            content: $(this).next('.hidden-text').html(),
            contentAsHTML: true,
            arrow: true,
            side: 'top',
            theme: ['tooltipster-borderless', 'tooltipster-map-points-customized'],
            interactive: true,
            distance: 6,
            maxWidth: 262,
            functionPosition: function (instance, helper, position) {

                //position.coord.top += -20;
                if (document.documentElement.clientWidth > 1460) {
                    position.coord.left += 95;
                }
                return position;
            },

        });
    });


    //section news
    if ($('.news-homepage').length > 0) {
        $('.news-homepage .slick-wrapper').slick({
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            loop: true,
            variableWidth: true,

            speed: 300,
            //autoplay: true,
        });

    }
});
