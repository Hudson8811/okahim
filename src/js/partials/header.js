$(document).ready(function () {
    var headerNumbers = $('.page-header__another-phones');
    $('.page-header__phone-numbers-visible').click(function () {
        headerNumbers.stop().slideToggle(200);
    });
    $(document).mouseup(function (e) {
        if (!headerNumbers.is(e.target)
            && headerNumbers.has(e.target).length === 0) {
            if (headerNumbers.css('display') !== 'none') {
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

    var pffh = $('.padding-for-fixed-header');
    pffh.attr('style', 'padding-top:' + $("header").height() + 'px');
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
    });


});
