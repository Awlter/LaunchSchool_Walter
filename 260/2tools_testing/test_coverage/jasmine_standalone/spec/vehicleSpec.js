describe('Vehicle', function() {
  var vehicle;

  beforeEach(function() {
    vehicle = new Vehicle({model: 'hehe', make: 'cool'})
  })

  it('sets the make and model properties when an object is passed in', function() {
    expect(vehicle.model).toEqual('hehe');
    expect(vehicle.make).toEqual('cool');
  });

  it("returns a concatenated string with make and model", function() {
    expect(vehicle.toString()).toEqual('cool hehe');
  });

  it("returns a message when the horn is honked", function() {
    expect(vehicle.honkHorn).toMatch('Beep beep!')
  })
})