$(function() {
  var $header = $('body > header');
  var $figures = $('figure');
  var $img0 = $figures.eq(0).find('img').remove();
  var $img1 = $figures.eq(1).find('img').remove();
  var $cap0 = $figures.eq(0).find(":contains(chin)");
  var $cap1 = $figures.eq(1).find(":contains(baby)");

  $header.prepend($('main > h1'));
  $('body').prepend($header);

  $figures.appendTo('article');

  $img0.insertBefore($cap1);
  $img1.insertBefore($cap0);
})