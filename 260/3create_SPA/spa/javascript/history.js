$(function() {
  function switchPage(id) {
    console.log(id);
    $('.active').removeClass();
    $("nav a[href='" + id +"']").addClass('active');
    $('article').hide().filter(id).show();
  }

  $('nav').on('click', 'a', function(e) {
    e.preventDefault();
    var $e = $(e.target);
    var id = $e.attr('href');
    switchPage(id);

    history.pushState({id: id}, $e.text(), location.pathname + id);
  });

  if (location.hash) {
    switchPage(location.hash);
  }

  $(window).on("popstate", function(e) {
    var state = e.originalEvent.state;

    switchPage(state.id);
  });
})