var canvas = $('<canvas/>')[0];
var ctx = canvas.getContext('2d');

var preloader = {
  path: 'images/',
  srcs: ["1.jpg", "2.jpg", "3.jpg"],
  createImage: function(i, src) {
    var $img = $('<img/>', {src: this.path + src});
    $img.on('load', manipulator.process.bind(manipulator));
  },
  run: function() {
    $.each(this.srcs, this.createImage.bind(this));
  }
}

var manipulator = {
  drawImage: function(img) {
    canvas.width = img.width;
    canvas.height = img.height;
    // console.log($(img).width())  // $img.width() === 0 ???
    ctx.drawImage(img, 0, 0);
  },
  getData: function() {
    return ctx.getImageData(0, 0, canvas.width, canvas.height)
  },
  convertToGrayScale: function() {
    var imgData = this.getData();
    var data = imgData.data
    for (var i = 0, len = data.length; i < len; i += 4) {
      var grayData = (data[i]+ data[i + 1] + data[i + 2]) / 3;
      data[i] = grayData;
      data[i + 1] = grayData;
      data[i + 2] = grayData;
    }

    ctx.putImageData(imgData, 0, 0);
  },
  writeImage: function(originalImage) {
    var img_src = canvas.toDataURL('png', 50, 50);
    var img = document.createElement('img');

    img.src = img_src;
    $('div:first-child').append($(originalImage));
    $('div + div').append($(img));
  },
  process: function(e) {
    this.drawImage(e.target);
    this.convertToGrayScale();
    this.writeImage(e.target)
  }
}

$(preloader.run.bind(preloader))