var Router = Backbone.Router.extend({
  routes: {
  },
  index: function() {
    this.indexView = new IndexView();
    this.allTodosView = new AllTodosView({collection: App.todos});
    this.completedTodosView = new CompletedTodosView({collection: App.todos});
    this.currentTitleView = new CurrentTitleView({collection: App.todos});
    this.allTodosView.selectSection();
  },
  initialize: function() {
    this.route(/^\/?$/, "index");
  }
})