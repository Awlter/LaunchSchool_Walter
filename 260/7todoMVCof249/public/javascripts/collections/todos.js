var Todos = Backbone.Collection.extend({
  model: Todo,
  readStorage: function() {
    var storgedTodos = JSON.parse(localStorage.getItem('todos'));
    this.reset(storgedTodos);
  },
  currentListForAll: function() {
    var sortedByDate = this.sortByDate(this.toJSON());
    var byCompleted = this.partitionByCompleted(sortedByDate);
    return byCompleted;
  },
  partitionByDueDate: function(input) {
    var temp = _.partition(input, function(e) { return e.dueDate !== 'No due Date'});
    return temp[0].concat(temp[1]);
  },
  partitionByCompleted: function(input) {
    var temp = _.partition(input, function(e) {return e.completed === false});
    return temp[0].concat(temp[1]);
  },
  sortByDate: function(input) {
    var byDate = _(input).chain().sortBy('dueMonth').sortBy('dueYear').value();
    return this.partitionByDueDate(byDate);
  },
  todosByDate: function(input) {
    if (!input) {
      input = this.toJSON();
    };

    var sortedByDate = this.sortByDate(input);
    var sortedByCompleted = this.partitionByCompleted(sortedByDate);

    return _.groupBy(sortedByCompleted, 'dueDate');
  },
  done: function() {
    return _.where(this.toJSON(), {completed: true});
  },
  doneByDate: function() {
    return this.todosByDate(this.done());
  },
  addItem: function(item) {
    if (!item.id) {
      var id = this.length + 1;
      item.id = id;
    };

    this.add(item, {merge: true});
  },
  checkTodo: function(id) {
    var model = this.get(id);
    model.set('completed', !model.get('completed'));
  },
  deleteTodo: function(id) {
    this.remove(id);
  },
  selectSection: function(section) {
    this.trigger('selectSection', section);
  },
  initialize: function() {
    this.readStorage();
  }
})