var CompletedTodosView = Backbone.View.extend({
  el: '#completed_todos',
  template: App.templates.completedTodosTemplate,
  events: {
    'click header': 'selectSection'
  },

  selectSection: function() {
    var $e = this.$('header');
    $('.active').removeClass('active');
    $e.addClass('active');

    App.trigger('selectSection', {title: $e.data('title'), data: $e.data('total')});
  },
  render: function() {
    this.$el.html(this.template({done: this.collection.done()}));
    this.renderDonesByDate();
  },
  renderDonesByDate: function() {
    if(this.completedList) {
      this.completedList.undelegateEvents();
    };

    this.completedList = new CompletedListView({collection: this.collection.doneByDate()});
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'change:completed remove', this.render)
  }
})