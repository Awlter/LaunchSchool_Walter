var inventory;

(function() {
  inventory = {
    lastId: 0,
    collection: [],
    setDate: function() {
      var date = new Date();
      $('#order_date').text(date.toUTCString());
    },
    cacheTemplate: function() {
      var $template = $('#inventory_item').remove();
      this.template = $template.html();
    },
    add: function(e) {
      this.lastId++
      var item = {
        id: this.lastId,
        name: '',
        stockNumber: '',
        quantity: 1
      }

      this.collection.push(item);
    },
    remove: function(indx) {
      this.collection = this.collection.filter(function(item) {
        return item.id !== indx
      })
    },
    addItem: function(e) {
      e.preventDefault();
      this.add();
      $("#inventory").append(this.template.replace(/ID/g, this.lastId));
    },
    update: function($item) {
      var id = this.findID($item);
      var item = this.get(id);

      item.name = $item.find('[name^=item_name]').val();
      item.stockNumber = $item.find('[name^=item_stock]').val();
      item.quantity = +$item.find('[name^=item_quantity]').val();
    },
    get: function(id) {
      var foundItem;
      this.collection.forEach(function(item) {
        if (item.id === id) {
          foundItem = item;
          return false;
        }
      });

      return foundItem;
    },
    findParent: function(e) {
      return $(e.target).closest('tr');
    },
    findID: function($item) {
      return +$item.find('input[type=hidden]').val();
    },
    removeItem: function(e) {
      e.preventDefault();
      var $tr = this.findParent(e).remove();
      var id = this.findID($tr);
      this.remove(id);
    },
    updateItem: function(e) {
      var $tr = this.findParent(e);
      this.update($tr);
    },
    bindEvents: function() {
      $('#add_item').on('click', this.addItem.bind(this));
      $('table').on('click', '.delete', this.removeItem.bind(this));
      $('table').on('blur', ':input', this.updateItem.bind(this));
    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    },
  }
})();

$(inventory.init);