var App = {
  templates: JST,
  $el: $('main'),
  renderIndex: function() {
    this.indexView = new IndexView();
    this.renderAlbums();
    this.createCart();
    this.bindEvents();
  },
  renderAlbums: function() {
    this.albums.each(this.renderAlbumView);
  },
  createCart: function() {
    this.cart = new CartItems();
    this.cart.view = new CartView({
      collection: this.cart
    })
  },
  renderAlbumView: function(album) {
    new AlbumView({
      model: album
    })
  },
  newAlbum: function() {
    new NewAlbumView();
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.listenTo(this.indexView, "add_album", this.newAlbum);
    this.on("add_to_cart", this.cart.addItem.bind(this.cart))
  }
};

Handlebars.registerHelper("format_price", function(price) {
  return (+price).toFixed(2);
})