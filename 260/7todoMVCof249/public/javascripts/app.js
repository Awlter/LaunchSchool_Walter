var App = {
  templates: JST,
  updateStorage: function() {
    localStorage.setItem('todos', JSON.stringify(this.todos.toJSON()));
  },
  setupRouter: function() {
    Backbone.history.start({pushState: true});
  },
  bind: function() {
    _.extend(this, Backbone.Events);
    this.on('addTodo', this.todos.addItem.bind(this.todos));
    this.on('selectSection', this.todos.selectSection.bind(this.todos));
    this.on('checkTodo', this.todos.checkTodo.bind(this.todos));
    this.on('deleteTodo', this.todos.deleteTodo.bind(this.todos));

    window.addEventListener('unload', this.updateStorage.bind(this));
  },
  init: function() {
    this.todos = new Todos();
    this.router = new Router();
    this.bind();
    this.setupRouter();
  }
}