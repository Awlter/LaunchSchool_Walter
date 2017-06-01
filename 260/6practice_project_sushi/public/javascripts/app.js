App = {
  templates: JST,
  setupRouter: function() {
    Backbone.history.start({
      pushState: true
    });

    $(document).on('click', 'a[href^="/"]', function(e) {
      e.preventDefault();
      App.router.navigate($(e.currentTarget).attr('href').replace(/^\//, ''), { trigger: true });
    });
  },
  updateStorage: function() {
    localStorage.setItem('cartItems', JSON.stringify(this.cart.toJSON()));
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.on("addCartItem", this.cart.addItem.bind(this.cart));
    this.on("reduceCartItem", this.cart.reduceItem.bind(this.cart));
    window.addEventListener('unload', App.updateStorage.bind(App));
  },
  init: function (items) {
    this.items = new ItemsCollection(items);
    this.cart = new CartItems();
    this.router = new Router();
    this.bindEvents();
    this.setupRouter();
  }
}