function Vehicle(options) {
  this.model = options.model || '';
  this.make = options.make || ''
}

Vehicle.prototype.toString = function() {
  return this.make + ' ' + this.model
}

Vehicle.prototype.honkHorn = function() {
  return 'Beep beep!'
}

