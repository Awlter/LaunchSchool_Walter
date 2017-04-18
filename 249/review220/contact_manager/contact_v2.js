var $templates = $("[type='text/x-handlebar']");
var $buttonAdd = $('.add');

var $contactForm = $('form.contacts-form');
var $contactsSheet = $('.contacts');
var $contact = $('.contacts-container');

var $tagForm = $(".tagging form");

function ContactConstructor(input) {
  this.id = input.id
  this.name = input.name;
  this.email = input.email;
  this.number = input.number;
  this.tags = input.tags;
};

ContactConstructor.prototype = {
  setVisible: function() {
    var $li = $("li[data-id=" + this.id + "]")
    function match(tag) {
      return tag.status === 'active';
    }

    if (this.tags.some(match)) {
      $li.show();
    } else {
      $li.hide();
    }
  }
}

contacts = {
  lastID: 0,
  list: [],
  load: function() {
    var list = JSON.parse(localStorage.getItem('contactList')) || [];
    list.forEach(function(contact) {
      var result = [];
      contact.tags.forEach(function(tag) {
        result.push(tags.listObj[tag.tagName]);
      })
      contact.tags = result;
    })
    this.list = list.map(function(contact) {
      return new ContactConstructor(contact);
    });
    this.lastID = +localStorage.getItem('contact_lastID') || 0;
    return this.list;
  },
  findContact: function(indx) {
    return this.list.filter(function(contact) {
      return +contact.id === +indx
    })[0]
  },
  addTags: function(input) {
    var tagsForContact = [];

    for (var key in input) {
      if (key.match(/tag/)) {
        tagsForContact.push(tags.listObj[input[key]]);
      }
    }

    input.tags = tagsForContact;
  },
  addContact: function(inputArray) {
    var input = this.toObject(inputArray);
    input.id = this.lastID++;
    this.addTags(input);

    this.list.push(new ContactConstructor(input));

    return input;
  },
  editContact: function(inputArray) {
    var input = this.toObject(inputArray);
    var orinInput = this.findContact(input.id);
    orinInput.name = input.name;
    orinInput.email = input.email;
    orinInput.number = input.number;
    return orinInput;
  },
  deleteContact: function(indx) {
    this.list = this.list.filter(function(item) {
      return item.id !== indx;
    })
  },
  toObject: function(inputArray) {
    var obj = {};
    inputArray.forEach(function(item) {
      obj[item.name] = item.value
    });
    return obj
  },
  displayVisible: function() {
    this.list.forEach(function(contact) {
      contact.setVisible();
    });

    if (!$('.tags .selected').length) {
      $('.contacts-container li').show();
    };
  },
  save: function() {
    localStorage.setItem('contactList', JSON.stringify(this.list));
    localStorage.setItem('contact_lastID', this.lastID);
  },
};

function TagConstructor(input) {
  this.id = input.id;
  this.name = input.name;
  this.tagName = input.tagName;
  this.status = 'inactive';
};

var tags = {
  lastID: 0,
  listObj: {},
  forTemp: [],
  load: function() {
    this.forTemp = JSON.parse(localStorage.getItem('forTemp')) || [];
    this.listObj = JSON.parse(localStorage.getItem('listObj')) || {};
    this.lastID = +localStorage.getItem('tag_lastID') || 0;
    return this.forTemp
  },
  addTag: function(inputString) {
    var tag = { name: inputString.split('=')[1] };
    tag.tagName = tag.name.toLowerCase();
    tag.id = this.lastID++;

    this.listObj[tag.tagName] = new TagConstructor(tag);
    this.forTemp.push(tag);
    return tag;
  },
  findTag: function(name) {
    return this.list.filter(function(tag) {
      return tag.name === name;
    })[0];
  },
  toggleActive: function(name) {
    var tag = this.listObj[name];
    if (tag.status === 'active') {
      tag.status = 'inactive';
    } else {
      tag.status = 'active';
    }
  },
  save: function() {
    localStorage.setItem('forTemp', JSON.stringify(this.forTemp));
    localStorage.setItem('listObj', JSON.stringify(this.listObj));
    localStorage.setItem('tag_lastID', this.lastID);
  },
};

var manager = {
  editting: false,
  templates: {},
  showContacts: function() {
    if (contacts.list.length) {
      $('.empty-contacts-placeholder').hide()
    } else {
      $('.empty-contacts-placeholder').show()
    }
  },
  toggleSheetAndForm: function() {
    $contactForm.animate({
      height: "toggle"
    }, 400);
    $contactsSheet.animate({
      height: "toggle"
    }, 400);
  },
  cacheTemplate: function() {
    var self = this;
    $templates.each(function(i) {
      self.templates[this.id] = Handlebars.compile(this.innerHTML)
    });
    $("[data-type='partial']").each(function(i) {
      Handlebars.registerPartial(this.id, this.innerHTML);
    });
  },
  fillForEdit: function(indx) {
    var contact = contacts.findContact(indx);
      $('#name').val(contact.name);
      $('#email').val(contact.email);
      $('#number').val(contact.number);
      contact.tags.forEach(function(tag) {
        $('#tag_' + tag.id).prop('checked', true)
      })
  },
  popContactForm: function(e, editIndx) {
    var indx = contacts.lastID;

    if (e) {
      e.preventDefault();
    } else {
      indx = editIndx;
      this.fillForEdit(indx);
    }

    $contactForm.find('[type=hidden]').val(indx);
    this.toggleSheetAndForm();
  },
  cancelContactForm: function(e) {
    e.preventDefault();
    this.clearForm();
    this.editting = false;
    this.toggleSheetAndForm();
  },
  clearForm: function() {
    $contactForm.find('dd input').val(undefined);
    $contactForm.find('input:checkbox').prop('checked', false);
  },
  addContact: function(e) {
    e.preventDefault();
    var $e = $(e.target);
    var input;

    if (this.editting) {
      input = contacts.editContact($e.serializeArray());
      $('[data-id=' + input.id + ']').replaceWith(this.templates.contact_temp(input));
    } else {
      input = contacts.addContact($e.serializeArray());
      $contact.append(this.templates.contact_temp(input));
    }

    this.editting = false;
    this.clearForm();
    this.toggleSheetAndForm();
    this.showContacts();
  },
  deleteContact: function(e) {
    e.preventDefault();
    var $e = $(e.target);
    var indx = $e.closest('li').remove().data('id');

    contacts.deleteContact(indx);
    this.showContacts();
  },
  popEditForm: function(e) {
    e.preventDefault();
    var $e = $(e.target);
    var indx = $e.closest('li').data('id');
    this.popContactForm(undefined, indx);
    this.editting = true;
  },
  stringTobeSearch: function(e) {
    var value = $(e.target).val();

    if (e.key === 'Backspace') {
      value = value.slice(0, value.length - 1);
    } else if (e.key.length === 1) {
      value = value + e.key;
    }

    return value
  },
  search: function(e) {
    var string = this.stringTobeSearch(e);

    $contact.find('li h3').each(function(i, item) {
      var $item = $(item);
      var $li = $item.closest('li');
      if($item.text().match(string)) {
        $li.show();
      } else {
        $li.hide();
      }
    })

    if (!!string && !$contact.find('li:visible').length) {
      $('.empty-search-placeholder').html('<h3>There is no contacts starting with ' + string+ '.</h3>').show();
    } else {
      $('.empty-search-placeholder').hide();
    }
  },
  addTag: function(e) {
    e.preventDefault();
    var $e = $(e.target);
    var tag = tags.addTag($e.serialize());

    $tagForm.find('dd input').val('');
    $('.tags').append(this.templates.search_tag_temp(tag));
    $contactForm.find('ul').append(this.templates.form_tag_temp(tag))
  },
  searchByTag: function(e) {
    $e = $(e.target);
    var name = $e.data('tag');
    $e.toggleClass('selected');
    tags.toggleActive(name);
    contacts.displayVisible();
  },
  save: function(e) {
    contacts.save();
    tags.save();
  },
  load: function(e) {
    var tagsForTemp = tags.load();
    var contactsList = contacts.load();

    $('.tags').html(this.templates.search_tags_temp({tags: tagsForTemp}));
    $contactForm.find('ul').html(this.templates.form_tags_temp({tags: tagsForTemp}));

    $contact.html(this.templates.contacts_temp({contacts: contactsList}));

    this.showContacts();
  },
  bind: function() {
    $buttonAdd.on('click', this.popContactForm.bind(this));
    $contactForm.find('.cancel').on('click', this.cancelContactForm.bind(this));
    $contactForm.on('submit', this.addContact.bind(this));
    $contact.on('click', '.delete',this.deleteContact.bind(this));
    $contact.on('click', '.edit', this.popEditForm.bind(this));
    $('#search').on('keydown', this.search.bind(this));
    $tagForm.on('submit', this.addTag.bind(this));
    $('.tagging').on('click', 'li', this.searchByTag.bind(this));
    $(window).on('unload', this.save.bind(this));
  },
  init: function() {
    this.cacheTemplate();
    this.load();
    this.bind();
  }
}

$(manager.init.bind(manager));