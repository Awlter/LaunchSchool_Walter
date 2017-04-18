$(function() {
  var templates = {};
  var $templates = $("[type='text/x-handlebar']");

  var contacts;
  var $contactForm = $('form.contacts-form');
  var $contacts = $('.contacts');
  var lastID;


  var $tagForm = $(".tagging form");
  var tags;
  var selectedTagNames = [];
  var searchedTagNames = [];

  function showContacts() {
    if (contacts.length) {
      $('.empty-contacts-placeholder').hide()
    } else {
      $('.empty-contacts-placeholder').show()
    }
  }

  function loadLastState() {
    contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    tags = JSON.parse(localStorage.getItem('tags')) || [];
    lastID = +localStorage.getItem('lastID');

    if (contacts.length) {
      $('.contacts-container').html(templates.contacts_temp({contacts: contacts}));
    }

    if (tags.length) {
      $('.tags').html(templates.tags_temp({tags: tags}));
      $contactForm.find('ul').append(templates.tags_temp({tags: tags}))
    }

    showContacts()
  }

  $templates.each(function(i) {
    templates[$templates.eq(i)[0].id] = Handlebars.compile($templates.eq(i).html())
  })
  $("[data-type='partial']").each(function(i, item) {
    Handlebars.registerPartial(item.id, item.innerHTML);
  })

  loadLastState();

  $('.add').on('click', function(e, contactTobeEdit) {
    e.preventDefault();

    if (contactTobeEdit) {
      $('#name').val(contactTobeEdit.name);
      $('#email').val(contactTobeEdit.email);
      $('#number').val(contactTobeEdit.number);
      $contactForm.find('[type=hidden]').val(contactTobeEdit.id);
      selectedTagNames = contactTobeEdit.tags;
      $.each(selectedTagNames, function(i, name) {
        $contactForm.find("[data-tag=" + name + "]").addClass('selected')
      })
    } else {
      $contactForm.find('[type=hidden]').val(lastID);
    }

    $contactForm.animate({
      height: "toggle"
    }, 600);

    $contacts.animate({
      height: "toggle"
    }, 600);

    showContacts()
  });

  $contactForm.on('click', '.cancel', function(e) {
    e.preventDefault();

    /??? toggleSheetAndForm()
    $contactForm.animate({
      height: "toggle"
    }, 400);

    $contacts.animate({
      height: "toggle"
    }, 400);

    selectedTagNames = [];
    $contactForm.find('li').removeClass('selected');
    $contactForm.find('dd input').val(undefined);
    showContacts()
  })

  $contactForm.on('submit', function(e) {
    e.preventDefault();
    var $e = $(this);

    var contact = {};
    $e.serializeArray().forEach(function(item) {
      contact[item.name] = item.value
    });

    contact.tags = selectedTagNames;

    var editing = contacts.filter(function(item) {
      return +item.id === +contact.id
    })[0]

    if (editing) {
      $('[data-id=' + contact.id + ']').replaceWith(templates.contact_temp(contact))
      editing.name = contact.name;
      editing.number = contact.number;
      editing.email = contact.email;
    } else {
      $('.contacts-container').append(templates.contact_temp(contact));
      contacts.push(contact);
    }

    $contactForm.find('.cancel').click();
    $contactForm.find('dd input').val(undefined);
    lastID += 1;

    localStorage.setItem('contacts', JSON.stringify(contacts))

    showContacts();
  })

  $('.contacts-container').on('click', '.delete', function(e) {
    e.preventDefault();

    var $e = $(this);

    var indx = $e.closest('li').remove().data('id');

    contacts = contacts.filter(function(item) {
      return +item.id !== indx;
    })


    localStorage.setItem('contacts', JSON.stringify(contacts));
    showContacts();
  })

  $('.contacts-container').on('click', '.edit', function(e) {
    e.preventDefault();

    var $e = $(this);

    var indx = $e.closest('li').data('id');

    var contact = contacts.filter(function(item) {
      return +item.id === indx;
    })

    $('.add').eq(0).trigger('click', contact)
  })

  $('#search').on('keydown', function(e, nameFromTag) {
    var $e = $(this);
    var value = $e.val();

    if (e.key === 'Backspace') {
      value = value.slice(0, value.length - 1)
    } else if (e.key.length === 1) {
      value = value + e.key;
    }

    $('.contacts-container li h3').each(function(i, item) {
      var $item = $(item);
      var $li = $item.closest('li');
      if($item.text().match(value)) {
        $li.show();
      } else {
        $li.hide();
      }
    })

    if (!!value && !$('.contacts-container li:visible').length) {
      $('.empty-search-placeholder').html('<h3>There is no contacts starting with ' + value+ '.</h3>').show();
    } else {
      $('.empty-search-placeholder').hide();
    }
  })

  $tagForm.on('submit', function(e) {
    e.preventDefault();

    var name = $tagForm.find('dd input').val();
    $tagForm.find('dd input').val('');
    var tagName = name.toLowerCase();

    var tag = {
      name: name,
      tagName: tagName
    };

    tags.push(tag);

    $('.tags').append(templates.tag_temp(tag));
    $contactForm.find('ul').append(templates.tag_temp(tag))
    localStorage.setItem('tags', JSON.stringify(tags));
  })

  $contactForm.find('ul').on('click', 'li', function(e) {
    $e = $(this);
    var name = $e.data('tag');
    $e.toggleClass('selected');

    if ($e.hasClass('selected')) {
      selectedTagNames.push(name)
    } else {
      selectedTagNames.splice(selectedTagNames.indexOf(name), 1);
    }
  })

  $('.tagging').on('click', 'li', function(e) {
    $e = $(this);
    var name = $e.data('tag');
    $e.toggleClass('selected');

    if ($e.hasClass('selected')) {
      searchedTagNames.push(name)
    } else {
      searchedTagNames.splice(searchedTagNames.indexOf(name), 1);
    }

    contacts.forEach(function(contact) {
      function match(tag) {
        return searchedTagNames.indexOf(tag) !== -1
      }

      var $li = $("li[data-id=" + contact.id + "]")
      if (contact.tags.some(match)) {
        $li.show();
      } else {
        $li.hide();
      }
    })

    if (!$('.tags .selected').length && !$('.contacts-container li:visible').length) {
      $('.contacts-container li').show();
    }
  })

  $(window).unload(function() {
    localStorage.setItem('lastID', lastID);
  })
});


