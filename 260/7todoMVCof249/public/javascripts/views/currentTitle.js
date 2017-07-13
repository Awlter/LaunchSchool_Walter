var CurrentTitleView = Backbone.View.extend({
  el: '#items header',
  template: App.templates.titleTemplate,

  render: function(currentSection) {
    if (currentSection.title) {
      this.currentSection = currentSection;
    }

    this.$el.html(this.template({currentSection: this.currentSection}));
    this.renderCurrentList(this.currentSection);
  },
  renderCurrentList: function(currentSection) {
    var title = currentSection.title;
    var collection;

    if(this.currentList) {
      this.currentList.undelegateEvents();
    };

    if (title === 'All Todos') {
      collection = this.collection.currentListForAll();
    } else if (title === 'Completed') {
      collection = this.collection.done();
    } else if (currentSection.Completed) {
      collection = this.collection.doneByDate()[title];
    } else {
      collection = this.collection.todosByDate()[title];
    }

    if (!collection[0]) {
      collection = this.collection.all();
    }

    this.currentList = new CurrentListView({collection: collection});
  },
  renderAllTodosTitle: function() {
    this.render({title: 'All Todos', data: this.collection.length});
  },
  initialize: function() {
    this.listenTo(this.collection, 'selectSection change', this.render);
    this.listenTo(this.collection, 'add change', this.renderAllTodosTitle);
    this.listenTo(this.collection, 'change:complete remove', this.render);
  }
})