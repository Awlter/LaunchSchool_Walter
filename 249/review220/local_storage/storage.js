$(function() {
  // var page = {

  //   init: function() {

  //   }
  // }

  $('nav').on('click', 'a', function(e) {
    e.preventDefault();
    var $e = $(this);
    var which = $e.data('block');

    $('article p.active').removeClass('active');
    $('[data-block=' + which + ']').find('p').addClass('active');
    localStorage.setItem('active_tag', which);
  });

  $('#body_color').on('change', 'input', function(e) {
    var $e = $(this);
    var background = $e.val();
    $(document.body).css('background', background);
    localStorage.setItem('background', background);
  });

  $(window).on("unload", function() {
    var notes = $('textarea').val();
    localStorage.setItem('notes', notes);
  })

  var which = localStorage.getItem('active_tag') || 'tag1';
  $('[data-block=' + which + ']').find('p').addClass('active');
  var background = localStorage.getItem('background');
  $("[value=" + background + "]").prop("checked", true).change()
  var notes = localStorage.getItem('notes');
  $('textarea').val(notes);


})
