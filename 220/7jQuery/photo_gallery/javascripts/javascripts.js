$(function() {
  var $slideshow = $('main');
  var $nav = $slideshow.find('ul')

  $nav.on('click', 'a', function(e) {
    e.preventDefault();

    var $li = $(this).parent();
    var idx = $li.index();

    var $figures = $('figure');
    $figures.filter(':visible').fadeOut(300);
    $figures.eq(idx).delay(300).fadeIn(300);

    $nav.find('.active').removeClass('active');
    $li.addClass('active');
  })
})