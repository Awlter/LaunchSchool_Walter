var CheckoutView = Backbone.View.extend({
  el: '#content',
  template: App.templates.checkout,
  events: {
    'submit': 'order',
    "click .fa-minus": "reduceOneItem",
    "click .fa-plus": "addOneItem"
  },
  getId: function(e) {
    return Number($(e.currentTarget).closest('tr').attr('data-id'));
  },
  addOneItem: function(e) {
    var id = this.getId(e);
    App.trigger("addCartItem", App.cart.get(id));
    this.render();
  },
  reduceOneItem: function(e) {
    var id = this.getId(e);
    App.trigger("reduceCartItem", App.cart.get(id));
    this.render();
  },
  order: function(e) {
    e.preventDefault();
    App.cart.reset();
    App.router.navigate('/', { trigger: true });
  },
  render: function() {
    this.$el.html(this.template({
      cartItems: App.cart.toJSON(),
      total: App.cart.getTotal()
    }));
    this.$('#cart').hide();
  }
})