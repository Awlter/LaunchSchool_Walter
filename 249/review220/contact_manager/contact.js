$(function() {
  var templates = {};
  var contacts;
  var lastID = +localStorage.getItem('lastID');
  console.log(+localStorage.getItem('lastID'))
  var $form = $('form');
  var $contacts = $('.contacts');
  var $templates = $("[type='text/x-handlebar']");

  $templates.each(function(i) {
    templates[$templates.eq(i)[0].id] = Handlebars.compile($templates.eq(i).html())
  })

  $("[data-type='partial']").each(function(i, item) {
    Handlebars.registerPartial(item.id, item.innerHTML);
  })

  contacts = JSON.parse(localStorage.getItem('contacts')) || [];

  if (contacts.length) {
    $('.contacts-container').html(templates.contacts_temp({contacts: contacts}));
  }

  showContacts()

  function showContacts() {
    if (contacts.length) {
      $('.empty-contacts-placeholder').hide()
    } else {
      $('.empty-contacts-placeholder').show()
    }
  }


  $('.add').on('click', function(e, contactTobeEdit) {
    e.preventDefault();

    if (contactTobeEdit) {
      $('#name').val(contactTobeEdit.name);
      $('#email').val(contactTobeEdit.email);
      $('#number').val(contactTobeEdit.number);
      $form.find('[type=hidden]').val(contactTobeEdit.id);
    } else {
      console.log(lastID)
      $form.find('[type=hidden]').val(lastID);
    }

    $form.animate({
      height: "toggle"
    }, 600);

    $contacts.animate({
      height: "toggle"
    }, 600);

    showContacts()
  });

  $form.on('click', '.cancel', function(e) {
    e.preventDefault();

    $form.animate({
      height: "toggle"
    }, 400);

    $contacts.animate({
      height: "toggle"
    }, 400);

    $form.find('dd input').val(undefined);
    showContacts()
  });

  $form.on('submit', function(e) {
    e.preventDefault();
    var $e = $(this);

    var contact = {};
    $e.serializeArray().forEach(function(item) {
      contact[item.name] = item.value
    });

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

    $form.find('.cancel').click();
    $form.find('dd input').val(undefined);
    lastID += 1;

    localStorage.setItem('contacts', JSON.stringify(contacts))

    showContacts();
  });

  $('.contacts-container').on('click', '.delete', function(e) {
    e.preventDefault();

    var $e = $(this);

    var indx = $e.closest('li').remove().data('id');

    contacts = contacts.filter(function(item) {
      return +item.id !== indx;
    })


    localStorage.setItem('contacts', JSON.stringify(contacts));
    showContacts();
  });

  $('.contacts-container').on('click', '.edit', function(e) {
    e.preventDefault();

    var $e = $(this);

    var indx = $e.closest('li').data('id');

    var contact = contacts.filter(function(item) {
      return +item.id === indx;
    })

    $('.add').eq(0).trigger('click', contact)
  })

  $('#search').on('keydown', function(e) {
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

  $(window).unload(function() {
    localStorage.setItem('lastID', lastID)
  })

});
