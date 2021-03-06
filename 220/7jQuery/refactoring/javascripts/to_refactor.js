function validate(cc_number) {
  var odd_total = 0;
  var even_total = 0;
  for (var i = 0, len = cc_number.length; i < len; i++) {
    if (i % 2 == 1) {
      cc_number[i] = (+cc_number[i] * 2) + "";
      if (cc_number[i].length > 1) {
        cc_number[i] = +cc_number[i][0] + +cc_number[i][1];
      }
      else {
        cc_number[i] = +cc_number[i];
      }
      odd_total += cc_number[i];
    }
    else {
      even_total += +cc_number[i];
    }
  }

  return (odd_total + even_total) % 10 == 0
}

$(function() {
  $("nav a").on("mouseenter", function() {
    $(this).next("ul").removeClass("accordion");
  });

  $("nav").on("mouseleave", function() {
    $(this).find("ul ul").addClass("accordion");
  });

  $(".button, button").on("click", function(e) {
    e.preventDefault();

    $(this).addClass("clicked");
  });

  $(".toggle").on("click", function(e) {
    e.preventDefault();

    var addOrRemove = !$(this).next(".accordion").hasClass("opened");
    $(this).next(".accordion").toggleClass("opened");
  });

  $("form").on("submit", function(e) {
    e.preventDefault();
    var cc_number = $(this).find("[type=text]").val();
    var validateOrNot;

    cc_number = cc_number.split("").reverse();

    validateOrNot = validate(cc_number);
    
    $(this).find(".success").toggle(validateOrNot);
    $(this).find(".error").toggle(!validateOrNot);
  });

  $("ul a").on("click", function(e) {
    e.preventDefault();

    var month = $(this).text(),
        $stone = $("#birthstone");

    var birthstone = {
      January: 'garnet',
      February: 'amethyst',
      March: 'aquamarine or bloodstone',
      April: 'diamond',
      May: 'emerald',
      June: 'pearl, moonstone',
      July: 'ruby',
      August: 'peridot',
      September: 'sapphire',
      October: 'tourmaline',
      November: 'topaz or citrine',
      December: 'turquoise, zircon, or tanzanite',
    }

    $stone.text(`Your birthstone is ${birthstone[month]}`);
  });
});
