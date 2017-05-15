var NewAlbumView = Backbone.View.extend({
  template: App.templates.new_album,
  attributes: {
    id: "album_new"
  },
  events: {
    submit: "create"
  },
  create: function(e) {
    e.preventDefault();
    var $f = $('form');

    $.ajax({
      url: $f.attr('action'),
      type: $f.attr("method"),
      data: $f.serialize(),
      success: function(json) {
        App.albums.add(json);
        App.renderIndex();
      }
    })
  },
  render: function() {
    this.$el.html(this.template());
    App.$el.html(this.$el);
  },
  initialize: function() {
    this.render();
  }
})