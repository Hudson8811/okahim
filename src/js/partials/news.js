
if ($('.np-tab-controls').length > 0) {
    $('.np-tab-controls__item').click(
        function () {
            $(this).addClass('np-tab-controls__item--active').siblings().removeClass('np-tab-controls__item--active');

            $('.news-tabs__tab--active').removeClass('news-tabs__tab--active');
            $('.news-tabs__tab').eq($(this).index()).addClass('news-tabs__tab--active');
        }
    )
}
