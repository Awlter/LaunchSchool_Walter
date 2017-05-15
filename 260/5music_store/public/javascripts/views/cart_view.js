var CartView = Backbone.View.extend({
  el: $("#cart").get(0),
  template: App.templates.cart,
  events: {
    "click a": 'destroy'
  },
  destroy: function(e) {
    e.preventDefault();
    var $e = $(e.target);
    this.collection.trigger("destroy", +$e.attr("data-id"));
    this.render();
  },
  render: function() {
    this.$el.html(this.template({
      quantity: this.collection.getQuantity(),
      items: this.collection.toJSON(),
      total: this.collection.getTotal()
    }))
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, "cart_updated", this.render)
  }
})