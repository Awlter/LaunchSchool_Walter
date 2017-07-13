var AllListView = Backbone.View.extend({
  el: "#all_lists",
  template: App.templates.allListTemplate,
  events: {
    'click dl': 'selectSection'
  },

  selectSection: function(e) {
    var $e = $(e.currentTarget);
    $('.active').removeClass('active');
    $e.addClass('active');
    App.trigger('selectSection', {title: $e.data('title'), data: $e.data('total')});
  },
  render: function() {
    this.$el.html(this.template({todosByDate: this.collection}));
  },
  initialize: function() {
    this.render();
  }
})