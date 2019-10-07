

if ($('.contacts-block').length > 0) {
    $('.contacts-block .ct-controls .ct-control').click(
        function () {
            $(this).addClass('active').siblings().removeClass('active');

            $('.contacts-block .ct-tabs .tab.active').removeClass('active');
            $('.contacts-block .ct-tabs .tab').eq($(this).index()).addClass('active');
}
    )
}
