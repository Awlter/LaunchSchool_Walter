$(function() {
  var $slides = $('#slides');

  var gallery = {
    templates: {},
    cacheTemplates: function() {
      var self = this;
      $("[type=\"text/x-handlebars\"]").each(function() {
        self.templates[$(this).attr('id')] = Handlebars.compile($(this).html());
      })
    },
    registerPartial: function() {
      var self = this;
      $("[data-type=\"partial\"]").each(function() {
        Handlebars.registerPartial($(this).attr('id'), $(this).html());
      })
    },
    renderComments: function(id) {
      var self = this;

      $.ajax({
        url: "/comments?photo_id=" + id
      })
      .done(function(comments) {
        $('#comments > ul').html(self.templates.comments({comments: comments}));
      })
    },
    renderPhotoInfo: function(id) {
      var photo = this.photos.filter(function(item) {
        return item.id === +id;
      })[0];
      $('section header').html(this.templates.photo_information(photo));
    },
    renderPhotos: function() {
      $slides.html(this.templates.photos({ photos: this.photos}));
    },
    renderPage: function(id) {
      $('form input[type=hidden]').val(id);
      this.renderComments(id);
      this.renderPhotoInfo(id);
    },
    getPhotos: function() {
      var self = this;

      $.ajax({
        url: "/photos"
      })
      .done(function(photos) {
        self.photos = photos;
        self.renderPhotos();
        self.renderPhotoInfo(photos[0].id);
      })
    },
    prev: function(e) {
      e.preventDefault();
      var prev = $('figure:visible').fadeOut(500).prev('figure');

      if (!prev[0]) {
        prev = $('#slides figure:last-child');
      }

      prev.delay(500).fadeIn(500);

      var id = +prev.data('id');

      this.renderPage(id);
    },
    next: function(e) {
      e.preventDefault();
      var next = $('figure:visible').fadeOut(500).next('figure');

      if (!next[0]) {
        next = $('#slides figure').first();
      }

      next.delay(500).fadeIn(500);
      var id = +next.data('id');

      this.renderPage(id);
    },
    updateInfo: function(e) {
      e.preventDefault();
      var $e = $(e.target);

      $.ajax({
        url: $e.attr('href'),
        type: 'POST',
        data: 'photo_id=' + $e.attr('data-id')
      })
      .done(function(json) {
        $e.text(function(i, txt) {
          return txt.replace(/\d+/, json.total)
        })
      })
    },
    updateComment: function(e) {
      e.preventDefault();
      var $f = $(e.target);
      var self = this;

      $.ajax({
        url: $f.attr('action'),
        type: $f.attr('method'),
        data: $f.serialize()
      })
      .done(function(comment) {
        $('#comments ul').append(self.templates.comment(comment));
      })

      $f.find('input[type=text], input[type=email], textarea').val('');
    },
    bindEvents: function() {
      $(".prev").on('click', this.prev.bind(this));
      $(".next").on('click', this.next.bind(this));
      $('section > header').on('click', '.actions a', this.updateInfo.bind(this));
      $('form').on('submit', this.updateComment.bind(this));
    },
    init: function() {
      this.cacheTemplates();
      this.registerPartial();
      this.getPhotos();
      this.renderComments(1);
      this.bindEvents();
    }
  };

  gallery.init();
});