$(function() {
  var method;
  var offsetX;
  var offsetY;
  var color = '#000';
  var canvas = $('canvas')[0];
  var ctx = canvas.getContext('2d');

  var drawingMethods = {
    square: function() {
      var side = 60;
      var x = offsetX - side / 2;
      var y = offsetY - side / 2
      ctx.strokeStyle
      ctx.strokeRect(x, y, side, side);
    },
    circle: function() {
      ctx.beginPath();
      ctx.arc(offsetX, offsetY, 30, 0, Math.PI * 2);
      ctx.stroke();
      ctx.closePath();
    },
    triangle: function () {
      ctx.beginPath();
      ctx.moveTo(offsetX, offsetY);
      ctx.lineTo(offsetX + 20, offsetY + 20 * Math.sqrt(3));
      ctx.lineTo(offsetX - 20, offsetY + 20 * Math.sqrt(3));
      ctx.lineTo(offsetX,offsetY);
      ctx.stroke();
      ctx.closePath();
    }
  }

  $('.drawing_method').click(function(e) {
    e.preventDefault();
    var $e = $(this);
    var class_name = 'active';
    method = $e.attr('data-method')

    $e.closest('ul').find('.' + class_name).removeClass(class_name);
    $e.addClass(class_name);
  }).eq(0).click();

  $('canvas').click(function(e) {
    offsetX = e.offsetX;
    offsetY = e.offsetY;

    ctx.strokeStyle = $('input').val();
    drawingMethods[method]();
  })

  $('#clear').click(function(e) {
    e.preventDefault();
    ctx.clearRect(0, 0, canvas.height, canvas.width);
  })
});
