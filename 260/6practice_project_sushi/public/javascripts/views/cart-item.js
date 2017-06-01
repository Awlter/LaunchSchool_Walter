var CartItemView = Backbone.View.extend({
  tagName: 'li',
  template: App.templates.cartItem,
  render: function() {
    var id = this.model.get('id');
    this.$el.attr("data-id", id);
    this.$el.html(this.template(this.model.attributes));
  },
  initialize: function() {
    this.listenTo(this.model, 'change:quantity', this.render)
    this.render();
  }
})