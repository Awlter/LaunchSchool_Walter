var $blinds = $('[id^=blind]');

function startAnimation() {
  $blinds.each(function(i) {
    $blind = $blinds.eq(i);
    $blind.delay(1000 * i).animate({
      height: 0,
      top: '+=' + $blind.height()
    }, 1000)
  });
}

$('p').on('click', function(e) {
  e.preventDefault;

  $blinds.removeAttr('style');

  startAnimation();
})

startAnimation();
