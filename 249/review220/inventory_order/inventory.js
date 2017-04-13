var inventory;

(function() {
  inventory = {
    lastId: 0,
    collection: [],
    setDate: function() {
      var date = new Date().toUTCString();
      $('#order_date').text(date);
    },
    cacheTemplate: function() {
      this.template = Handlebars.compile($("#inventory_item").html());
    },
    addItem: function(e) {
      var template = this.template({id: this.lastId});
      $(template).appendTo('#inventory');

      var newItem = {
        id: this.lastId,
        name: '',
        stockNumber: '',
        quantity: 1
      };

      this.collection.push(newItem);

      this.lastId += 1;
    },
    findItem: function(indx) {
      return this.collection.filter(function(item) {
        return item.id === indx;
      })
    },
    findParent: function(e) {
      var $e = $(e.target);
      return $e.closest('tr')
    },
    updateInventory: function(e) {
      var $e = this.findParent(e);
      var indx = +$e.find('[type=hidden]').val();
      var item = this.findItem(indx);

      var name = $e.find('[name^=item_name]').val();
      var stockNumber = $e.find('[name^=item_stock]').val();
      var quantity = $e.find('[name^=item_quantity]').val();

      item.name = name;
      item.stockNumber = stockNumber;
      item.quantity = quantity;
    },
    deleteInventory: function(e) {
      e.preventDefault;
      var $e = this.findParent(e).remove();
      var indx = +$e.find('[type=hidden]').val();

      this.collection = this.collection.filter(function(item) {
        return item.id !== indx;
      });
    },
    bind: function() {
      $('#add_item').on('click', this.addItem.bind(this));
      $('#inventory').on('blur', 'input', this.updateInventory.bind(this));
      $('#inventory').on('click', '.delete', this.deleteInventory.bind(this));
    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bind();
    }
  };
})();

$(inventory.init.bind(inventory));