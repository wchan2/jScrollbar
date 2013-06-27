// for vertical scrolling
// http://stackoverflow.com/questions/3253199/remove-html-scrollbars-but-allow-mousewheel-scrolling

// horizontal scrolling
// http://stackoverflow.com/questions/2274627/how-can-i-get-horizontal-scrollbars-at-top-and-bottom-of-a-div

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
    // placing it here so that its quicker to load
    var selector = this.selector;

    $(this).css({
      paddingTop: '1px',
      overflowX: 'hidden'
    });

    return this.each(function() {
      var scrollview = Object.create(jScrollbar);
      scrollview.init({ contentDiv: selector });
    });
  };

  // initializing the options
  $.fn.jScrollbar.options = {};

}( jQuery ));