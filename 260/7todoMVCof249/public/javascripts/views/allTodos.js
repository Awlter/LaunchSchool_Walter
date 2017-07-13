var AllTodosView = Backbone.View.extend({
  el: "#all_todos",
  template: App.templates.allTodosTemplate,
  events: {
    'click header': 'selectSection'
  },

  selectSection: function() {
    var $e = this.$('header');
    $('.active').removeClass('active');
    $e.addClass('active');

    App.trigger('selectSection', {title: $e.data('title'), data: $e.data('total')});
  },
  render: function () {
    this.$el.html(this.template({todos: App.todos}));
    this.renderTodosByDate();
  },
  renderTodosByDate: function() {
    if(this.allList) {
      this.allList.undelegateEvents();
    };

    this.allList = new AllListView({collection: this.collection.todosByDate()});
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'add change remove', this.render);
    this.selectSection();
  }
})