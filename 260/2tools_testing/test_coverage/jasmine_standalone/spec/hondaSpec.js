describe('Honda', function(){
  it("inherits the Vehicle prototype", function() {
    var honda = new Honda('Accord');
    expect(honda.toString()).toEqual('Honda Accord')
  });

  it("sets the model property when a valid model is passed in", function() {
    var honda = new Honda('Accord');
    expect(honda.make).toEqual('Honda');
    expect(honda.model).toEqual('Accord');
  });

  it("throws an error if an invalid model is passed in", function() {
    var makeInvalidCall = function() {
      new Honda('aa')
    }
    expect(makeInvalidCall).toThrowError(Error, "Model aa does not exist.")
  });

  it("returns a list of valid models", function() {
    var models = Honda.getModels();
    expect(models.length).toBeDefined();
    expect(models).toContain('Accord');
  });

  it("calls getPrice when a new car is created", function() {
    spyOn(Honda, 'getPrice');
    var car = new Honda('Accord')
    expect(Honda.getPrice).toHaveBeenCalled();
    expect(Honda.getPrice).toHaveBeenCalledWith('Accord');
  });

  it("returns a price for the passed in model", function() {
    var price = Honda.getPrice('Accord');
    expect(price).toBeGreaterThan(0);
  });

  it("returns a price less than 15000 when a Civic is created", function() {
    expect(Honda.getPrice('Civic')).toBeLessThan(15000);
  });


})