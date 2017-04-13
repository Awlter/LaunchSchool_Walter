function($f) {
  var inputs = {};

  $f.serializeArray().forEach(function(input) {
    inputs[input.name] = input.value
  });

  return inputs;
}

function createElements(data) {
  $('<div/>', {
    "class": data.type,
    css: {
      top: +data.start_y,
      left: +data.start_x
    },
    data: data
  }).appendTo('#container');
}

function animate() {
  $('#container div').each(function() {
    var $e = $(this);
    var data = $e.data();

    $e.css({
      top: +data.start_y,
      left: +data.start_x
    }).animate({
      top: +data.end_y,
      left: +data.end_x,
    }, 1500)
  })
}


$('form').on('submit', function(e) {
  e.preventDefault();
  $f = $(this);

  var data = getFormObjects($f);

  createElements(data);
})

$('#act').on('click', function(e) {
  e.preventDefault();
  animate();
})