var AlbumView = Backbone.View.extend({
  tagName: 'li',
  events: {
    "click a.button": "addToCart"
  },
  addToCart: function(e) {
    e.preventDefault();
    // why here this.trigger is not used like the addAlbum method in index.js, no arguments?
    App.trigger("add_to_cart", this.model)
  },
  template: App.templates.album,
  render: function () {
    var id = this.model.id;
    this.$el.attr('id', 'album_' + id)
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.appendTo(App.$el.find('ul'));
  },
  initialize: function() {
    this.render();
    this.model.view = this;
  }
});