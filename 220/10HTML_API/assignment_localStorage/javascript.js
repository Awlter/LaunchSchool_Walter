$(function() {
  var $tabs = $('a');

  $('nav').on('click', 'a', function(e) {
    e.preventDefault();
    var $e = $(this);
    var indx = $e.closest('li').index();
    var className = 'active';

    $e.closest('nav').find('.' + className).removeClass(className);
    $tabs.eq(indx).toggleClass(className, true);
    $('#tabs article').hide().eq(indx).show();

    localStorage.setItem('activeNav', indx);
  })

  $('form :radio').change(function(e) {
    var color = $(this).val();
    $(document.body).css({background: color});
    localStorage.setItem('background', color);
  });

  $(window).on('unload', function() {
    var text = $('textarea').val();
    localStorage.setItem('text', text);
  })

  setActiveTab(localStorage.getItem('activeNav'));
  setBackground(localStorage.getItem('background'));
  setTextarea(localStorage.getItem('text'));
})

function setActiveTab(indx) {
  if (!indx) { return; }
  $('nav a').eq(indx).click();
}

function setBackground(color) {
  if (!color) { return; }
  $(`[value="${color}"]`).prop('checked', true).change();
}

function setTextarea(text) {
  if (!text) { return; }
  $('textarea').val(text);
}