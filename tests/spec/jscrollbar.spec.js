describe('jScrollbar', function() {
  it('is a jQuery plugin', function() {
    expect($.fn.jScrollbar).toBeDefined();
    expect(jQuery('<div />').jScrollbar).toBeDefined();
  });
});