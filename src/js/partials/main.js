$(document).ready(function() {
    $("input[name='phone']").mask(" +7 (999) 999-99-99");


    function falidator(item) {
        check = true;
        $(item).find('.required').each(function () {
            if ($(this).hasClass('required') && $(this).val() == '') {
                check = false;
                $(this).addClass('error');
            } else {
                $(this).removeClass('error');
            }
        });
        if (check) {
            return true;
        } else {
            return false;
        }
    }

    $(".modal-form form").submit(function () {
        if (!falidator(this)) return false;
    });

});
