import '../scss/index.scss';
var xs = 768;
var w = $(window).innerWidth();
function addIconMenu() {
    $('.nav__list--child').each(function(i, obj) {
        $(obj)
            .parent()
            .append('<i class="icon"><span></span></i>');
    });
}

$(function() {
    addIconMenu();
    $('.icon').on('click', function() {
        var active = $(this);
        if (active.hasClass('active')) {
            active
                .removeClass('active')
                .prev()
                .removeClass('active');
        } else {
            $('.nav__list--child, .icon').removeClass('active');
            active
                .addClass('active')
                .prev()
                .addClass('active');
        }
    });
    $('.icon-menu-sp').on('click', function() {
        $(this).toggleClass('open');
        $('.nav').slideToggle();
    });
});
$(window).resize(function() {
    console.log(w);
    if (w > xs) {
        $('.nav').css('display', 'flex');
    }
});
