var ItemsView = Backbone.View.extend({
  tagName: 'ul',
  attributes: {
    id: 'items'
  },
  render: function() {
    this.collection.each(this.renderItem.bind(this));
  },
  renderItem: function(item) {
    var item = new ItemView({
      model: item
    });

    this.$el.append(item.$el);
  },
  initialize: function() {
    this.render();
  }
})