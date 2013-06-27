;(function( $ ) {

  var jScrollbar = {
    init: function(options) {
      this.options        = $.extend({}, $.fn.jScrollbar.options, options);
      this.$contentDiv    = $(this.options.contentDiv);
      this.$scrollbar     = $('<div />'),
      this.$scrollbarBody = $('<div />')
      delete this.options.contentDiv;

      this.setupDOM();
      this.attachEvents();
    },
    setupDOM: function() {
      this.$scrollbarBody.css({
        width: this.$contentDiv[0].scrollWidth,
        paddingTop: '1px'
      });

      this.$scrollbar.css({
        width: this.$contentDiv.width() + 3,
        overflowX: 'auto'
      }).append(this.$scrollbarBody);

      this.$contentDiv.before(this.$scrollbar);
    },
    attachEvents: function() {
      var $contentDiv = this.$contentDiv,
          $scrollbar = this.$scrollbar;

      $scrollbar.on('scroll', function(event) {
        $contentDiv.get(0).scrollLeft = this.scrollLeft;
      });

      $contentDiv.on('scroll', function(event) {
        $scrollbar.get(0).scrollLeft = this.scrollLeft;
      });
    }
  };
  
  $.fn.jScrollbar = function() {
    var selector = this.selector;

    // placing it here so that its quicker to load
    $(this).css({
      paddingTop: '1px',
      overflowX: 'hidden'
    });

    // creating the scroll view
    return this.each(function() {
      var scrollview = Object.create(jScrollbar);
      scrollview.init({ contentDiv: selector });
    });
  };

  // initializing the options
  $.fn.jScrollbar.options = {};

}( jQuery ));