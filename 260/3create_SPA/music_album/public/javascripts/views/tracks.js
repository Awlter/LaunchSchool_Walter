var $overlay = $('#overlay');

var TracksView = Backbone.View.extend({
  attributes: {
    id: 'tracks_modal'
  },
  duration: 500,
  template: Handlebars.compile($("[data-name='tracks']").html()),
  events: {
    "click a.close": 'close'
  },
  open: function() {
    this.$el.add($overlay).fadeIn(this.duration)
  },
  close: function(e) {
    e.preventDefault();
    this.fadeOut();
    history.back();
  },
  fadeOut: function() {
    $overlay.fadeOut(this.duration);
    this.$el.fadeOut(this.duration, function() {
      this.remove();
    }.bind(this));
  },
  render: function() {
    this.$el.html(this.template({
      album: this.album,
      tracks: this.collection.toJSON()
    }));
    this.open();
  },
  initialize: function(options) {
    this.album = options.album;
    this.$el.appendTo(document.body)
  }
})