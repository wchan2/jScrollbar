;(function( $ ) {
  
  $.fn.jScrollbar = function() {
    // placing it here so that its quicker to load
    $(this).css({
      paddingTop: '1px',
      overflowX: 'hidden'
    });

    return this.each(function() {
      var $this = $(this),
          $scrollbar = $('<div />'),
          $scrollbarBody = $('<div />');

      $scrollbarBody.css({
        width: $this[0].scrollWidth,
        paddingTop: '1px'
      });

      $scrollbar.css({
        width: $this.width() + 3,
        overflowX: 'auto'
      }).append($scrollbarBody);

      $scrollbar.on('scroll', function(event) {
        $this.get(0).scrollLeft = this.scrollLeft;
      });

      $this.on('scroll', function(event) {
        $scrollbar.get(0).scrollLeft = this.scrollLeft;
      });

      $this.before($scrollbar);
    });
  };

  $.fn.jScrollbar.options = {};


}( jQuery ));