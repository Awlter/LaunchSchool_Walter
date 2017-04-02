document.addEventListener('DOMContentLoaded', function() {
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');
  var colors = ['#000', '#003', '#006', '#009', '#00c', '#00f'];

  function draw() {
    colors.forEach(function(color, i) {
      ctx.fillStyle = color;
      ctx.fillRect(i * 30, i * 30, canvas.width - i * 60, canvas.height - i * 60);
    });

    colors.unshift(colors.pop());
  }

  // setInterval(draw, 200);
})
