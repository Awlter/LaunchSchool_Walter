var inventory;

(function() {
  inventory = {
    lastID: 0,
    collection: [],
    setDate: function() {
      var date = new Date();
      $('#order_date').text(date.toUTCString());
    },
    cacheTemplate: function() {
      this.template = Handlebars.compile($('#inventory_item').html());
    },
    add: function() {
      this.lastID += 1;

      var item = {
        id: this.lastID,
        name: '',
        stockNumber: '',
        quantity: '1'
      };

      this.collection.push(item);
    },
    addItem: function(e) {
      e.preventDefault();
      this.add();
      $('#inventory').append(this.template({id: this.lastID}))
    },
    delete: function(indx) {
      this.collection = this.collection.filter(function(item) {
        return item.id !== indx;
      });
    },
    deleteItem: function(e) {
      var $tr = this.findParent(e).remove();
      var indx = this.findID($tr);
      this.delete(indx);
    },
    updateItem: function(e) {
      var $tr = this.findParent(e);
      var indx = this.findID($tr);
      var item = this.getItemOf(indx);

      item.name = $tr.find('[name^=item_name]').val();
      item.stockNumber = $tr.find('[name^=item_stock]').val();
      item.quantity = $tr.find('[name^=item_quantity]').val();

    },
    getItemOf: function(indx) {
      var foundItem;
      this.collection.forEach(function(item) {
        if (item.id === indx) {
          foundItem = item;
          return false;
        }
      });

      return foundItem
    },
    findID: function($e) {
      return +$e.find('[type=hidden]').val();
    },
    findParent: function(e) {
      var $e = $(e.target);
      return $e.closest('tr');
    },
    addEvents: function() {
      $('#add_item').on('click', this.addItem.bind(this));
      $('#inventory').on('click', '.delete', this.deleteItem.bind(this));
      $('#inventory').on('blur', ':input', this.updateItem.bind(this));
    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.addEvents();
    },
  }
})();

$(inventory.init.bind(inventory));