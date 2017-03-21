$(function() {
  $('#team li > a').click(function(e) {
    e.preventDefault();
    $ele = $(this);

    $ele.siblings(".modal").css({
      top: $(window).scrollTop() + 30
    });

    $ele.nextAll('div').fadeIn(400);
  });

  $('.modal_layer, .close').click(function(e) {
    e.preventDefault();
    $('.modal_layer, .modal').fadeOut();
  })

})