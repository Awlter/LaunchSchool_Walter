var Todo = Backbone.Model.extend({
  defaults: {
    completed: false
  },
  notNum: function (string) {
    return Number.isNaN(+string);
  },
  processDueDate: function() {
    if ([this.get('dueDay'), this.get('dueMonth'), this.get('dueYear')].some(this.notNum)) {
      this.set('dueDate', 'No due Date');
    } else {
      this.set('dueDate', this.get('dueMonth') + '/' + this.get('dueYear').slice(-2))
    }
  },
  initialize: function() {
    this.processDueDate();
    this.on('change', this.processDueDate);
  }
});