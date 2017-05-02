var models = ["Accord", "Civic", "Crosstour", "CR-V", "CR-Z", "Fit", "HR-V", "Insight", "Odyssey", "Pilot"];
var prices = [ 16500,    14500,   21000,       15800,  12000,  13100, 16000,  18100,     22500,     19300]

function Honda(model) {
  var current_model = this.verify(model);

  if (!current_model) {
    throw new Error("Model " + model + " does not exist.");
  }

  this.model = model;
  this.make = 'Honda';
  this.price = Honda.getPrice(model);
};

Honda.prototype = Object.create(Vehicle.prototype);

Honda.prototype.verify = function(model) {
  return models.indexOf(model) !== -1;
};

Honda.getPrice = function(model) {
  return prices[models.indexOf(model)]
};

Honda.getModels = function() {
  return models.slice()
}

Honda.prototype.constructor = Honda;
