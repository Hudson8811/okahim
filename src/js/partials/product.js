$(document).ready(function() {

    
    $('.vendor-block .show-more').click(function () {
        event.preventDefault();
        var vendor = $(this).parents('.vendor-block');
        if ($(vendor).hasClass('active')){
            $(vendor).find('.tech-table, .vendor-gallery').slideUp();
            $(vendor).removeClass('active');
            $(this).find('.label').html($(this).find('.label').html() == 'Подробнее' ? 'Свернуть' : 'Подробнее');
        } else {
            $(vendor).find('.tech-table, .vendor-gallery').slideDown();
            $(vendor).addClass('active');
            $(this).find('.label').html($(this).find('.label').html() == 'Подробнее' ? 'Свернуть' : 'Подробнее');
            activateVendoeSwiper(vendor);
        }
    })
});

function activateVendoeSwiper(elem) {
    $(elem).find($(".vendor-gallery:not('.active')")).each(function(index, element){
        $(this).addClass('active');
        var $this = $(this);
        var swiper = new Swiper(this, {

            loop: true,
            pagination: {
                el: $this.find(".swiper-pagination")[0],
                clickable: true,
            },
            navigation: {
                nextEl: $this.find(".swiper-button-next")[0],
                prevEl: $this.find(".swiper-button-prev")[0],
            }
        });
    });
}