describe('jScrollbar', function() {
  it('is a jQuery plugin', function() {
    expect($.fn.jScrollbar).toBeDefined();
    expect(jQuery('<div />').jScrollbar).toBeDefined();
  });

  it('has options', function() {
    expect($.fn.jScrollbar.options).toBeDefined();
  });

  it('has default scrollbarLocation option set to top', function() {
    expect($.fn.jScrollbar.options.scrollbarLocation).toEqual('top');
  });
});