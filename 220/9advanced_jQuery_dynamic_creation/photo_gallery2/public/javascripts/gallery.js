$(function() {
  var templates = {};
  var photos;

  $("[type='text/x-handlebars']").each(function() {
    var $tmpl = $(this);
    templates[$tmpl.attr('id')] = Handlebars.compile($tmpl.html());
  })

  $("[data-type='partial']").each(function() {
    var $partial = $(this);
    Handlebars.registerPartial($partial.attr('id'), $partial.html());
  })

  var slideshow = {
    $el: $('#slideshow'),
    duration: 500,
    prevSlide: function() {
      var $current = this.$el.find('figure:visible');
      var $prev = $current.prev();

      if (!$prev.length) {
        $prev = this.$el.find('figure').last();
      }

      $current.fadeOut(this.duration);
      $prev.fadeIn(this.duration);
      this.renderPhotoContent($prev.attr('data-id'));
    },
    nextSlide: function() {
      var $current = this.$el.find('figure:visible');
      var $next = $current.next();

      if (!$next.length) {
        $next = this.$el.find('figure').first();
      }

      $current.fadeOut(this.duration);
      $next.fadeIn(this.duration);
      this.renderPhotoContent($next.attr('data-id'));
    },
    renderPhotoContent: function(indx) {
      $("#comments [type='hidden']").val(indx);

      renderPhotoInformation(+indx);
      getCommentsFor(indx);
    },
    bind: function() {
      this.$el.find('a.prev').on('click', this.prevSlide.bind(this));
      this.$el.find('a.next').on('click', this.nextSlide.bind(this));
    },
    init: function() {
      this.bind();
    }
  };

  $.ajax({
    url: '/photos',
  })
  .done(function(data, textStatus, jqXHR) {
    photos = data;
    renderPhotos();
    renderPhotoInformation(photos[0].id);
    slideshow.init();
    getCommentsFor(photos[0].id)
  });

  $("section > header").on('click', '.actions a', function(e) {
    e.preventDefault();
    var $e = $(this);

    $.ajax({
      url: $e.attr('href'),
      data: "photo_id=" + $e.attr('data-id'),
      type: 'post'
    })
    .done(function(data) {
      $e.text(function(indx, text) {
        return text.replace(/\d+/, data.total)
      })
    });
  });

  $("section form").on('submit', function(e) {
    e.preventDefault();
    $e = $(this);

    $.ajax({
      type: $e.attr('method'),
      url: $e.attr('action'),
      data: $e.serialize()
    })
    .done(function(data) {
      $("#comments ul").append(templates.comment(data))
    })
  })

  function renderPhotos() {
    $('#slides').html(templates.photos({photos: photos}));
  }

  function renderPhotoInformation(indx) {
    var photo = photos.filter(function(item) {
      return item.id === indx
    })[0];
    $('section > header').html(templates.photo_information(photo));
  }

  function getCommentsFor(indx) {
    $.ajax({
      url: '/comments',
      data: {photo_id: indx}
    })
    .done(function(data, textStatus, jqXHR) {
      $("#comments ul").html(templates.comments({comments: data}));
    })
  }

});


// function slidePhoto(e) {
//     e.preventDefault();

//     var $e = $(this);
//     var which = $e.attr('class');
//     var $photos = $('#slides figure');
//     var $currentVisible = $photos.filter(':visible').fadeOut(500);

//     if (which === 'next') {
//       var $next = $currentVisible.next();
//       var indx;

//       if ($next[0]) {
//         indx = $next.index();
//       } else {
//         $next = $photos.eq(0)
//         indx = 0;
//       }

//       $next.fadeIn(500);
//       renderPhotoInformation(indx);
//       getCommentsFor(photos[indx].id)
//     } else {
//       var $prev = $currentVisible.prev();
//       var indx;

//       if ($prev[0]) {
//         indx = $prev.index();
//       } else {
//         $prev = $photos.eq(-1);
//         indx = $photos.length - 1;
//       }

//       $prev.fadeIn(500);
//       renderPhotoInformation(indx);
//       getCommentsFor(photos[indx].id);
//     }
//   }
