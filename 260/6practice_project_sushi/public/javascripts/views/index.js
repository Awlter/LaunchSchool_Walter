var IndexView = Backbone.View.extend({
  el: 'body',
  template: App.templates.index,
  render: function() {
    this.$el.html(this.template({totalItems: App.cart.length}));
  },
  update: function() {
    $('.count').text(App.cart.length);
  },
  initialize: function() {
    this.render();
    this.listenTo(App.cart, 'add', this.update);
    this.listenTo(App.cart, 'remove', this.update);
  }
})