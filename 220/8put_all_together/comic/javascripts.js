$(function() {
  var $blinds = $('[id^=blind]');
  // var heights = [];

  $('#comic').click(function() {
    $blinds.each(function(i) {
      var $blind = $(this);
      var height = $blind.css('height');
      console.log(typeof height);
      var speed = 250;
      var wait = 1500;

      // heights.push(height);
      // var top = +$blind.css('top').slice(0, -2);
      // var height = +$blind.css('height').slice(0, -2);
      // topAndHeight.push([top, height]);

      $blind.delay(wait * i).animate({
        top: "+=" + height,
        height: 0,
      }, speed)
    });
  });

  $('button').click(function() {
    // $blinds.each(function(i) {
    //   var $blind = $blinds.eq(i);
    //   $blind.finish();
    // })

    $blinds.stop(true);

    // $blinds.each(function(i) {
    //   var height = heights[i];
    //   var $blind = $blinds.eq(i);

    //   $blind.css({
    //     top: "-=" + height,
    //     height: height,
    //   });
    // });

    $blinds.removeAttr('style');
  });
});