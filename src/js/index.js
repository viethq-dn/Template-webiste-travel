import '../scss/index.scss';

// var nav = $('.nav');
// var xs = 768;
// var windown = $(windown).width();

function addIconMenu() {
  $('.nav__list--child').each(function(i, obj) {
    console.log(obj);
    $(obj)
      .parent()
      .append('<i class="icon"><span></span></i>')
      .children()
      .on('click', function() {
        $('.nav__list--child').removeClass('active');
        $(this)
          .prev()
          .addClass('active');
      });
  });
}

$(function() {
  addIconMenu();
});
