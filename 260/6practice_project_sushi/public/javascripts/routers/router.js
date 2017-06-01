var Router = Backbone.Router.extend({
  routes: {
    'checkout': 'renderCheckbox',
    ':id' : 'renderDetail'
  },
  renderDetail: function(id) {
    var itemDetail = new DetailView({
      model: App.items.get(id)
    });
    itemDetail.render();
  },
  renderCheckbox: function() {
    var checkoutView;
    if (checkoutView) {
      checkoutView.undelegateEvents();
    };
    checkoutView = new CheckoutView();
    checkoutView.render();
  },
  index: function() {
    this.indexView = new IndexView();
    this.itemsView = new ItemsView({collection: App.items});
    this.itemsView.$el.appendTo('#content');
    this.cartView = new CartView({collection: App.cart});
  },
  initialize: function() {
    this.route(/^\/?$/, 'index')
  }
});