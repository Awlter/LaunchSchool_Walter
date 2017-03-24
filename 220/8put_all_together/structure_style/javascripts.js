// $(function() {
//   var $form = $('form');
//   var $canvas = $('#canvas');
//   var sprites = [];
//   var num = 1;

//   $form.on('submit', function(e) {
//     e.preventDefault();

//     var $inputs = $(this).serializeArray();
//     var sprite = {};

//     $inputs.forEach(function(input) {
//       sprite[input.name] = input.value;
//     })

//     $canvas.append($('<div class=' + sprite.type + ' data-id=' + num + '></div>').css({
//       top: Number(sprite.start_y),
//       left: Number(sprite.start_x)
//     }));

//     sprite.id = num;
//     num += 1;

//     sprites.push(sprite);
//   })

//   $('#animate').click(function(e) {
//     e.preventDefault();

//     sprites.forEach(function(sprite) {
//       $('[data-id=' + sprite.id + ']').css({
//       top: sprite.start_y,
//       left: sprite.start_x
//     }).animate({
//       top: sprite.end_y,
//       left: sprite.end_x
//     }, 2000)
//     })
//   });

//   $('#stop').click(function(e) {
//     e.preventDefault();
//     $('[data-id]').stop(true);
//   })
// });


$(function() {
  var $canvas = $('#canvas');
  var $form = $('form');

  function getFormObject($f) {
    var o = {};

    $f.serializeArray().forEach(function(ele) {
      o[ele.name] = ele.value;
    });

    return o;
  }

  function resetElement($e) {
    var data = $e.data();

    $e.css({
        top: +data.start_y,
        left: +data.start_x
      });
  }

  function createElement(data) {
    var $d = $('<div/>', {
      "class": data.type,
      data: data
    });

    resetElement($d);

    return $d;
  }

  function animateElement() {
    var $e = $(this);
    var data = $e.data();

    resetElement($e);

    $e.animate({
      top: +data.end_y,
      left: +data.end_x
    }, 1000);
  }

  $form.submit(function(e) {
    e.preventDefault();

    var $f = $(this);
    var data;

    data = getFormObject($f);

    $canvas.append(createElement(data));
  });

  $('#animate').click(function(e) {
    e.preventDefault();

    $canvas.find('div').each(animateElement);
  });

  $('#stop').click(function(e) {
    e.preventDefault();

    $canvas.find('div').stop(true);
  })
})