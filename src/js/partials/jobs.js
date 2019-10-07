$(document).ready(function() {
    $('.jobs-page .open_block').click(function () {
        event.preventDefault();
        $(this).closest('.block').find('.hide').slideToggle();
        $(this).toggleClass('active');
    })
});
