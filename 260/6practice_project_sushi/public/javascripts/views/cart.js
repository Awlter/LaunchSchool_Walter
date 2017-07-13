var CartView = Backbone.View.extend({
  el: '#cart',
  template: App.templates.cart,
  events: {
    "click .empty_cart": "empty",
  },
  render: function() {
    this.$el.html(this.template());
    this.$el.hide();
    if (this.collection.length !== 0) {
      this.$el.show();
    }
    this.loadExistingItems();
  },
  loadExistingItems: function() {
    this.collection.each(this.addItem.bind(this));
  },
  getTotal: function() {
    return this.collection.reduce(function(total, item) {
      return total + Number(item.get('quantity')) * Number(item.get('price'));
    }, 0);
  },
  updateTotal: function() {
    $('.total').html('$' + this.getTotal());
  },
  addItem: function(item) {
    this.cartList = this.cartList || this.$el.find('ul');
    if (this.cartList) {
      this.$el.slideDown(300);
    }
    var cartItemView = new CartItemView({model: item});
    cartItemView.$el.appendTo(this.cartList);
    this.updateTotal();
  },
  empty: function(e) {
    e.preventDefault();
    this.collection.reset();
    this.cartList.empty();
    this.$el.hide();
  },
  initialize: function() {
    this.collection.view = this;
    this.listenTo(this.collection, 'add', this.addItem);
    this.render();
  }
})