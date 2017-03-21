$(function() {
  function addItem(item, quantity) {
    $('ul').append("<li>" + quantity + ' ' + item + '</li>')
  }

  $('form').submit(function(e) {
    e.preventDefault();
    var item = $(this).find('#name').val();
    var quantity = $(this).find('#quantity').val();

    addItem(item, quantity);

    this.reset();
  })
})