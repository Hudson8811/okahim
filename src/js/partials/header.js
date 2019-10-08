$(document).ready(function () {
    var headerNumbers = $('.page-header__another-phones');
    var phpnv = $('.page-header__phone-numbers-visible');
    $('.page-header__phone-numbers-visible').click(function () {
        phpnv.toggleClass('another-visible');
        headerNumbers.stop().slideToggle(200);
    });
    $(document).mouseup(function (e) {
        if (!headerNumbers.is(e.target)
            && headerNumbers.has(e.target).length === 0) {
            if (headerNumbers.css('display') !== 'none') {
                phpnv.removeClass('another-visible');
                headerNumbers.stop().slideUp(200);
            }
        }
    });




    var burger = $('.page-header__burger');
    var hMenu = $('.page-header__bottom-line');

    burger.on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        hMenu.stop().slideToggle(200);
    });



    if (!burger.is(':visible')) {
        if (!$('.page-header__logo').next().is($('.page-header__search'))) {
            $('.page-header__logo').after($('.page-header__search'), $('.page-header__phone-numbers'));
        }
    }
    else {
        if (!$('.page-header__menu').next().is($('.page-header__search'))) {
            $('.page-header__menu').after($('.page-header__search'), $('.page-header__phone-numbers'));
        }
    }


    function adaptiveHbtn() {
        if ($('.page-header__online-req-btn span').first().is(':visible')) {
            $('.page-header__online-req-btn').addClass('btn-orange');
        }
        else {
            $('.page-header__online-req-btn').removeClass('btn-orange');
        }
    }


    var pffh = $('.padding-for-fixed-header');
    pffh.attr('style', 'padding-top:' + $("header").height() + 'px');
    adaptiveHbtn();
    $(window).resize(function () {
        if (!burger.is(':visible')) {
            hMenu.attr('style', '');
            burger.removeClass('active');
            if (!$('.page-header__logo').next().is($('.page-header__search'))) {
                $('.page-header__logo').after($('.page-header__search'), $('.page-header__phone-numbers'));
            }
        }
        else {
            if (!$('.page-header__menu').next().is($('.page-header__search'))) {
                $('.page-header__menu').after($('.page-header__search'), $('.page-header__phone-numbers'));
            }
        }

        pffh.attr('style', 'padding-top:' + $("header").height() + 'px');


        adaptiveHbtn();
    });



    //for homepage

    if ($('body').hasClass('body-homepage')) {
        var header = $('header');
        header.addClass('screen-top-homepage');
        window.onscroll = function () {
            if (((window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop) == 0) {
                header.addClass('screen-top-homepage');
            }
            else {
                header.removeClass('screen-top-homepage');
            }
        };
    }






    $('.page-header__online-req-btn').click(function () {
        $.fancybox.open({
            src: '#online-req-modal',
            type: 'inline'
        });
    });
});
