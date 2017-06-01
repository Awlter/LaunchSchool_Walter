var ItemView = Backbone.View.extend({
  template: App.templates.item,
  tagName: 'li',
  events: {
    "click .add_cart": "addToCart",
    "click header": "renderDetail"
  },
  addToCart: function(e) {
    e.preventDefault();
    App.trigger("addCartItem", this.model);
  },
  renderDetail: function(e) {
    var id = this.model.get('id');
    App.router.navigate(id, { trigger: true });
  },
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    this.$el.attr("data-id", this.model.get('id'));
  },
  initialize: function() {
    this.render();
  }
})