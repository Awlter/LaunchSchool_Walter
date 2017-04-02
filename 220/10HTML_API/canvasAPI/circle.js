document.addEventListener("DOMContentLoaded", function() {
  // var canvas = document.querySelector('canvas');
  // var ctx = canvas.getContext('2d');

  // var x = canvas.width / 2;
  // var y = canvas.height / 2;
  // var radius = x;

  // ctx.beginPath();
  // ctx.fillStyle = 'rgba(255, 0, 4, .7)';
  // ctx.arc(x, y, radius, 0, 2 * Math.PI);
  // ctx.fill();
  // ctx.closePath();

  // ctx.beginPath();
  // ctx.strokeStyle = 'rgba(110, 202, 204, .7)';
  // ctx.moveTo(x, y - 50);
  // ctx.lineTo(x + 50, y);
  // ctx.lineTo(x, y);
  // ctx.lineTo(x, y - 50);
  // ctx.stroke();
  // ctx.closePath();

  // var img = document.querySelector('img');

  // canvas.width = img.width;
  // canvas.height = img.height;

  // ctx.drawImage(img, 0, 0);

  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');
  // ctx.fillStyle = 'rgba(255, 0, 0, .7)'
  // ctx.rect(20, 20, 100, 100);
  // ctx.fill();

  // var imageData = ctx.getImageData(20, 20, 40, 80);
  var imageData = {
    width: 2,
    height: 2,
    data: [
      255, 0, 0, 255,
      255, 0, 0, 255,
      0, 0, 255, 255,
      0, 0, 255, 255
    ],
  }

  ctx.putImageData(imageData, 0, 0);
  // ImageData { width: 100, height: 100, data: Uint8ClampedArray[40000] }
})