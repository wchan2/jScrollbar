describe('jScrollbar', function() {
  it('is a jQuery plugin', function() {
    expect($.fn.jScrollbar).toBeDefined();
    expect(jQuery('<div />').jScrollbar).toBeDefined();
  });

  it('has options', function() {
    expect($.fn.jScrollbar.options).toBeDefined();
  });
});