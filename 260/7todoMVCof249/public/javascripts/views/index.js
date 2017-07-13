var IndexView = Backbone.View.extend({
  el: 'body',
  template: App.templates.index,
  events: {
    "click [for='new_item']": 'showForm',
    'click #modal_layer': 'closeForm',
    'submit': 'addTodo',
  },
  showForm: function() {
    this.$('#modal_layer').fadeIn(500);
    this.$('#form_modal').css({'top': $(window).scrollTop() + 150}).fadeIn(500);
  },
  showEditForm: function(id) {
    this.edittingId = id;

    var todo = App.todos.get(id);
    var title = todo.get('title');
    var dueDay = todo.get('dueDay');
    var dueMonth = todo.get('dueMonth');
    var dueYear = todo.get('dueYear');
    var description = todo.get('description');

    this.$('#form_modal').find("input[type='text']").val(title);
    this.$('#dueDay').find("option[value='" + dueDay +"']").prop('selected', true);
    this.$('#dueMonth').find("option[value='" + dueMonth +"']").prop('selected', true);
    this.$('#dueYear').find(`option:contains(${dueYear})`).prop('selected', true);
    this.$('textarea').val(description);

    this.showForm();
  },
  arrayToObj: function(arr) {
    var obj = {};
    arr.forEach(function(ele) {
      obj[ele.name] = ele.value
    });
    return obj;
  },
  addTodo: function(e) {
    e.preventDefault();
    var $e = $(e.target);
    var inputObj = this.arrayToObj($e.serializeArray());

    if (this.edittingId) {
      inputObj.id = this.edittingId;
    }

    App.trigger('addTodo', inputObj);

    this.closeForm();
    this.edittingId = null;
  },
  closeForm: function() {
    this.$('#form_modal').find("input[type='text']").val('');
    this.$("select").each(function() { this.selectedIndex = 0 });
    this.$('textarea').val('');

    this.$('#form_modal').fadeOut(500);
    this.$('#modal_layer').fadeOut(500);
  },
  render: function() {
    this.$el.html(this.template());
  },
  initialize: function() {
    this.listenTo(App, 'editTodo', this.showEditForm)
    this.render();
  }
})