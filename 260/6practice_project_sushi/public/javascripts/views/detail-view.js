var DetailView = Backbone.View.extend({
  id: "item_details",
  template: App.templates.detail,
  events: {
    'click .prev': 'renderPrev',
    'click .next': 'renderNext',
    'click .add_cart': 'addToCart',
  },
  addToCart: function(e) {
    e.preventDefault();
    App.trigger("addCartItem", this.model);
  },
  getId: function() {
    return Number(this.model.get('id'));
  },
  changeRouter: function() {
    this.remove();
    App.router.navigate(this.id.toString(), {trigger: true});
  },
  renderPrev: function() {
    var currentId = this.getId();
    if (currentId - 1 > 0) {
      this.id = currentId - 1;
      this.changeRouter();
    }
  },
  renderNext: function() {
    var currentId = this.getId();
    if (currentId < App.items.length + 1) {
      this.id = currentId + 1;
      this.changeRouter();
    }
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    $("#content").html(this.$el);
  },
})