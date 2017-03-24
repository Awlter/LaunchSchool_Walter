$(function() {
  $('a').click(function(e) {
    e.preventDefault();

    var $target = $('article').hide().filter('[data-block=' + $(this).data('block') + ']').show();
    $target.data('data-block', 'hehe');

  })
})

// document.addEventListener('DOMContentLoaded', function() {
//   var gold = document.getElementById('gold');

//   gold.dataset.block = 'silver';
// })