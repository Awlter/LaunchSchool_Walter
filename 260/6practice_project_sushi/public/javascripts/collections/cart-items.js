var CartItems = Backbone.Collection.extend({
  addItem: function(item) {
    var item = this.findWhere({id: item.id}) || item.clone();
    if (item.has('quantity')) {
      item.set('quantity', Number(item.get('quantity')) + 1);
      this.view.update();
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
  getTotal: function() {
    return this.reduce(function(total, item) {
      return total + Number(item.get('quantity')) * Number(item.get('price'));
    }, 0);
  },
  readeStorage: function() {
    var storgedItems = JSON.parse(localStorage.getItem('cartItems'));
    this.reset(storgedItems);
  },
  initialize: function() {
    this.readeStorage();
  }
})