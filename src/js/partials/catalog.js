$(document).ready(function() {
    $('.catalog-menu-acord .has_child > a').click(function () {
        event.preventDefault();
        $(this).siblings('.popmenu').slideToggle();
        $(this).parents('.has_child').toggleClass('active');
    });
});