;(function( $ ) {

  var jScrollbar = {
    init: function(contentDiv, options) {
      this.options        = $.extend({}, $.fn.jScrollbar.options, options);
      this.$contentDiv    = $(contentDiv);
      this.$scrollbar     = $('<div />').addClass(this.options.scrollbarClass);
      this.$scrollbarBody = $('<div />').addClass(this.options.scrollbarBodyClass);
      delete this.options.contentDiv;

      this.setupDOM();
      this.attachEvents();
    },
    setupDOM: function() {
      var scrollbarCSS = this.setUpScrollbarCSS(),
          scrollbarBodyCSS = this.setUpScrollbarBodyCSS(),
          contentWrapper = $('<div />').addClass(this.options.contentWrapperClass);

      // use the initialized CSS 
      this.$scrollbarBody.css(scrollbarBodyCSS);
      this.$scrollbar.css(scrollbarCSS).append(this.$scrollbarBody);
      this.$contentDiv.wrap(contentWrapper).before(this.$scrollbar);
    },
    setUpScrollbarCSS: function() {
      if (this.options.scrollbarLocation === 'left') {
        // CSS for left scrollbar
        return {
          height: this.$contentDiv.height(),
          overflowY: 'scroll',
          display: 'inline-block'
        };
      }

      // CSS for top scrollbar (the default is top)
      return {
        width: this.$contentDiv.width() + 3,
        overflowX: 'scroll'
      };
    },
    setUpScrollbarBodyCSS: function() {
      if (this.options.scrollbarLocation === 'left') {
        // CSS for left scrollbar body
        return {
          height: this.$contentDiv[0].scrollHeight,
          paddingLeft: '1px'
        };
      }

      // CSS for top scrollbar body (default is top)
      return {
        width: this.$contentDiv[0].scrollWidth,
        paddingTop: '1px'
      };
    },
    attachEvents: function() {
      var $contentDiv = this.$contentDiv,
          $scrollbar = this.$scrollbar;

      if (this.options.scrollbarLocation === 'left') {
        $scrollbar.on('scroll', function(event) {
          $contentDiv.get(0).scrollTop = this.scrollTop;
        });

        $contentDiv.on('scroll', function(event) {
          $scrollbar.get(0).scrollTop = this.scrollTop;
        });
      } else {
        $scrollbar.on('scroll', function(event) {
          $contentDiv.get(0).scrollLeft = this.scrollLeft;
        });

        $contentDiv.on('scroll', function(event) {
          $scrollbar.get(0).scrollLeft = this.scrollLeft;
        });
      }
    }
  };
  
  $.fn.jScrollbar = function(options) {
    var selector = this.selector;

    // placing it here so that its quicker to load
    // TODO: refactor
    if (options && options.scrollbarLocation && options.scrollbarLocation === 'left') {
      $(this).css({
        paddingLeft: '1px',
        display: 'inline-block',
        overflowY: 'hidden'
      });
    } else {
      $(this).css({
        paddingTop: '1px',
        display: 'inline-block',
        overflowX: 'hidden'
      });  
    }
    
    // creating the scroll view
    return this.each(function() {
      var scrollview = Object.create(jScrollbar);
      scrollview.init(selector, options);
    });
  };

  // initializing the options
  $.fn.jScrollbar.options = {
    scrollbarLocation: 'top',
    scrollbarClass: 'jscrollbar',
    scrollbarBodyClass: 'jscrollbarBody',
    contentWrapperClass: 'jscrollWrapper'
  };

}( jQuery ));