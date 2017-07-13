var CartItems = Backbone.Collection.extend({
  addItem: function(item) {
    this.updateTotal(item);
    var item = this.findWhere({id: item.id}) || item.clone();
    if (item.has('quantity')) {
      item.set('quantity', Number(item.get('quantity')) + 1);
      this.view.updateTotal();
    } else {
      item.set('quantity', 1);
      this.add(item);
    };
  },
  reduceItem: function(item) {
    if (item.get('quantity') === 1) {
      this.remove(item);
    } else {
      item.set('quantity', Number(item.get('quantity')) - 1);
    }
  },
  updateTotal: function(item) {
    this.total = this.total || 0;
    this.total = this.total + Number(item.get('price'));
  },
  readeStorage: function() {
    var storgedItems = JSON.parse(localStorage.getItem('cartItems'));
    this.reset(storgedItems);
  },
  initialize: function() {
    this.readeStorage();
  }
})