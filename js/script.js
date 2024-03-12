$(document).ready(function() {
    // Анимация карточек при прокрутке
    $('.card').each(function() {
        $(this).hover(function() {
            $(this).addClass('animated');
        }, function() {
            $(this).removeClass('animated');
        });
    });
});
