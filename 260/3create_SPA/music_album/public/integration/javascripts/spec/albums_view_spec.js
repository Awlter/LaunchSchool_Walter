describe('Albums View', function() {
  beforeEach(function() {
    this.view = new AlbumsView({collection: albums_scaffold})
  });

  it("should have a collection property assigned", function() {
    expect(this.view.collection).toBeDefined();
    expect(this.view.collection.length).toBe(albums_scaffold.length)
  });

  it("should have a handlebars template compiled", function() {
    expect(this.view.template).toBeDefined();
  });

  it("should render an #albums containor when render called", function() {
    this.view.render();
    expect($('#albums li').length).toBe(albums_scaffold.length);
  });

  it("should re-render the view when the collection changes", function() {
    var model = albums_scaffold.findWhere({artist: "Tori Kelly"});
    var new_html, ori_html;

    ori_html = $('#albums').html();
    model.set({title: 'Tech Javascripts'});
    new_html = $('#albums').html();
    expect(new_html).not.toEqual(ori_html);
  });
})