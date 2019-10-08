$(document).ready(function() {
    $('.acords-blocks .circle-btn').click(function () {
        event.preventDefault();
        $(this).parents('.item').find('ol').slideToggle();
        $(this).parents('.item').toggleClass('active');
    });
});