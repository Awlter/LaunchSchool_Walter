DEFAULTPARENT = 'all_todos';
DEFAULTTITLE = 'All Todos';

function Todo(input) {
  this.id = input.id;
  this.completed = false;
  this.title = input.title;
  this.dueDay = input.dueDay;
  this.dueMonth = input.dueMonth;
  this.dueYear = input.dueYear;
  this.description = input.description;
}

(function() {
  this.processDueDate = function() {
    function notNum(string) {
      return Number.isNaN(+string);
    }
    if ([this.dueDay, this.dueMonth, this.dueYear].some(notNum)) {
      this.dueDate = 'No due Date';
    } else {
      this.dueDate = this.dueMonth + '/' + this.dueYear.slice(-2);
    }
  }
}).call(Todo.prototype)

var Todos = {
  lastId: 0,
  selectedParent: DEFAULTPARENT,
  selectedTitle: DEFAULTTITLE,
  todos: [],
  loadStorage: function() {
    this.lastId = +localStorage.getItem('lastId') || 0;
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
  },
  groupByDueDate: function(arr) {
    var obj = {};
    arr.forEach(function(todo) {
      obj[todo.dueDate] = obj[todo.dueDate] || [];
      obj[todo.dueDate].push(todo);
    });
    return obj;
  },
  todosByDate: function() {
    var todosObjects = this.groupByDueDate(this.todos);
    return this.sortByDate(todosObjects);
  },
  done: function() {
    return this.todos.filter(function(todo) {
      return todo.completed;
    });
  },
  doneTodosByDate: function() {
    var doneTodosObjects = this.groupByDueDate(this.done());
    return this.sortByDate(doneTodosObjects);
  },
  selected: function() {
    if (this.selectedTitle === DEFAULTTITLE) {
      return this.todos;
    } else if (this.selectedTitle === 'Completed') {
      return this.done();
    } else if (this.selectedParent === 'completed_lists') {
      return this.doneTodosByDate()[this.selectedTitle];
    } else {
      return this.todosByDate()[this.selectedTitle];
    }
  },
  sortedSelected: function() {
    var uncompleted = [];
    var completed = [];
    var self = this;

    this.selected().forEach(function(todo) {
      if (todo.completed === true) {
        completed.push(todo);
      } else {
        uncompleted.push(todo);
      }
    })

    function localSort(input) {
      return input.sort(function(v1, v2) {
        return self.toSort(v1.dueDate, v2.dueDate);
      })
    }

    uncompleted = localSort(uncompleted)
    completed = localSort(completed);

    return uncompleted.concat(completed);
  },
  sortByDate: function(input) {
    var obj = {}
    var self = this;
    Object.keys(input).sort(self.toSort).forEach(function(key) {
      obj[key] = input[key];
    });
    return obj
  },
  toSort: function(key1, key2) {
    var month1 = +key1.split('/')[0];
    var year1 = +key1.split('/')[1];

    var month2 = +key2.split('/')[0];
    var year2 = +key2.split('/')[1];

    if (year1 === year2) {
      return month1 - month2;
    }
    return year1 - year2
  },
  add: function(input) {
    var todo = new Todo(input);
    todo.processDueDate();
    this.todos.push(todo);
  },
  checkTodo: function(id, state) {
    this.todos.forEach(function(todo) {
      if (todo.id === id) { todo.completed = state };
    });
  },
  delete: function(id) {
    this.todos = this.todos.filter(function(todo) {
      return todo.id !== id;
    })

    if (!this.selected()) {
      this.selectedParent = DEFAULTPARENT;
      this.selectedTitle = DEFAULTTITLE;
    }
  },
  findTodo: function(id) {
    return this.todos.filter(function(todo) {
      return todo.id === id;
    })[0];
  }
}

var View = {
  templates: {},
  init: function() {
    $("[data-title='All Todos']").trigger('click');
  },
  showForm: function(e) {
    if (Todos.selectedTitle !== DEFAULTTITLE) {
      $("[data-title='All Todos']").trigger('click');
    }
    $('#modal_layer').fadeIn(500);
    $('#form_modal').css({'top': $(window).scrollTop() + 150}).fadeIn(500);
  },
  hideForm: function(e) {
    function clear() {
      $('#form_modal').find("input[type='text']").val('');
      $("select").each(function() { this.selectedIndex = 0 });
      $('textarea').val('');
    }
    $('#modal_layer').fadeOut(500);
    $('#form_modal').fadeOut(500);
    setTimeout(clear, 500);
  },
  popEditForm: function(id) {
    var todo = Todos.findTodo(id);
    var dueDay = todo.dueDay;
    var dueMonth = todo.dueMonth;
    var dueYear = todo.dueYear;

    $('#form_modal').find("input[type='text']").val(todo.title);
    $('#dueDay').find("option[value='" + dueDay +"']").prop('selected', true);
    $('#dueMonth').find("option[value='" + dueMonth +"']").prop('selected', true);
    $('#dueYear').find(`option:contains(${dueYear})`).prop('selected', true);
    $('textarea').val(todo.description);

    View.showForm();
  },
  hightlightSeleted: function() {
    var parentId = Todos.selectedParent;
    var title = Todos.selectedTitle;
    $("[data-title]").removeClass('active');
    $(`#${parentId} [data-title='${title}']`).addClass('active');
  },
  load: function() {
    var allTodos = this.templates.allTodosTemplate({todos: Todos.todos});
    $('#all_todos').html(allTodos);
    var allList = this.templates.allListTemplate({todosByDate: Todos.todosByDate()});
    $('#all_lists').html(allList);

    var completed = this.templates.completedTodosTemplate({done: Todos.done()});
    $('#completed_todos').html(completed);
    var completedList = this.templates.completedListTemplate({doneTodosByDate: Todos.doneTodosByDate()});
    $('#completed_lists').html(completedList);

    var currentSection = {
      title: Todos.selectedTitle,
      data: Todos.selected().length
    }

    var mainTitle = this.templates.titleTemplate({currentSection: currentSection});
    $('#items header').html(mainTitle);
    var list = this.templates.listTemplate({selected: Todos.sortedSelected()});
    $('#items tbody').html(list);
  }
}

var App = {
  edittingID: undefined,
  cacheTemplate: function() {
    $("[type='text/x-handlebars']").each(function() {
      View.templates[this.id] = Handlebars.compile(this.innerHTML);
    });
    $("[data-type='partial']").each(function() {
      Handlebars.registerPartial(this.id, this.innerHTML);
    });
  },
  loadView: function() {
    View.load();
    View.hightlightSeleted();
  },
  arrayToObj: function(arr) {
    var obj = {};
    arr.forEach(function(ele) {
      obj[ele.name] = ele.value
    });
    return obj;
  },
  submit: function(e) {
    e.preventDefault();
    var $e = $(e.target);
    var inputObj = this.arrayToObj($e.serializeArray());
    if (this.edittingID) {
      inputObj.id = this.edittingID;
      Todos.delete(this.edittingID);
    } else {
      inputObj.id = Todos.lastId++;
    }
    View.hideForm();
    Todos.add(inputObj);
    this.loadView();
    this.edittingID = undefined;
  },
  select: function(e) {
    var $e = $(e.currentTarget);
    Todos.selectedParent = $e.parent().attr('id');
    Todos.selectedTitle = $e.data('title');
    this.loadView();
  },
  checkTodo: function(e) {
    var $e = $(e.currentTarget);
    var todoId = $e.closest('tr').data('id');
    var isChecked = $e.find('input').is(':checked');
    Todos.checkTodo(todoId, !isChecked);
    this.loadView();
  },
  delete: function(e) {
    var $e = $(e.currentTarget);
    var id = $e.closest('tr').data('id');
    Todos.delete(id);
    this.loadView();
  },
  edit: function(e) {
    e.stopPropagation();
    var $e = $(e.currentTarget);
    var id = $e.closest('tr').data('id');
    this.edittingID = id;
    View.popEditForm(id)
  },
  checkOnForm: function(e) {
    if (this.edittingID >= 0) {
      Todos.checkTodo(this.edittingID, true);
      View.hideForm();
      this.loadView();
      this.edittingID = undefined;
    } else {
      alert("Cannot checked uncreated todo");
    }
  },
  saveData: function(e) {
    localStorage.setItem('lastId', Todos.lastId);
    localStorage.setItem('todos', JSON.stringify(Todos.todos));
  },
  bind: function() {
    $("#items label[for='new_item']").on('click', View.showForm.bind(this));
    $('#modal_layer').on('click', View.hideForm.bind(this));
    $('#form_modal').on('submit', this.submit.bind(this));
    $('#sidebar').on('click', "[data-title]", this.select.bind(this));
    $('#items tbody').on('click', 'td.list_item', this.checkTodo.bind(this));
    $('#items tbody').on('click', 'td.delete', this.delete.bind(this));
    $('#items tbody').on('click', 'label', this.edit.bind(this));
    $("button[name='complete']").on('click', this.checkOnForm.bind(this));
    $(window).on('unload', this.saveData.bind(this));
  },
  init: function() {
    this.cacheTemplate();
    Todos.loadStorage();
    this.loadView();
    this.bind();
  }
}

App.init();
