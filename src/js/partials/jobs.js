$(document).ready(function() {
    $('.jobs-page .open_block').click(function () {
        event.preventDefault();
        $(this).closest('.block').find('.hide').slideToggle();
        $(this).toggleClass('active');
    });

    $('.jobs-page .open-modal').click(function () {
        $.fancybox.open({
            src: '#jobs-modal',
            type: 'inline',
            touch: false
        });
    });

});
