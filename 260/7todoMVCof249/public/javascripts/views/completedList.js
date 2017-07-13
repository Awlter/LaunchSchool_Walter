var CompletedListView = Backbone.View.extend({
  el: '#completed_lists',
  template: App.templates.completedListTemplate,
  events: {
    'click dl': 'selectSection'
  },

  selectSection: function(e) {
    var $e = $(e.currentTarget);
    $('.active').removeClass('active');
    $e.addClass('active');
    App.trigger('selectSection', {title: $e.data('title'), data: $e.data('total'), completed: true});
  },
  render: function() {
    this.$el.html(this.template({doneTodosByDate: this.collection}))
  },
  initialize: function() {
    this.render();
  }
})