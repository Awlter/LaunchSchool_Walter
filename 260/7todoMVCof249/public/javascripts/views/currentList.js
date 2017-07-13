var CurrentListView = Backbone.View.extend({
  el: '#items tbody',
  template: App.templates.listTemplate,
  events: {
    'click .list_item': 'checkTodo',
    'click label': 'editTodo',
    'click .delete': 'deleteTodo'
  },
  getId: function(e) {
    return $(e.target).closest('tr').data('id');
  },
  editTodo: function(e) {
    e.stopPropagation();

    App.trigger('editTodo', this.getId(e));
  },
  checkTodo: function(e) {
    App.trigger('checkTodo', this.getId(e));
  },
  deleteTodo: function(e) {
    App.trigger('deleteTodo', this.getId(e));
  },
  render: function() {
    this.$el.html(this.template({selected: this.collection}))
  },
  initialize: function() {
    this.render();
  }
})