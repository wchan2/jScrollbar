;(function( $ ) {
  'use strict';

  var jScrollbar = {
    defaults: {
      scrollbarLocation: 'top',
      scrollbarClass: 'jscrollbar',
      scrollbarBodyClass: 'jscrollbarBody',
      contentWrapperClass: 'jscrollWrapper'
    },
    init: function(contentDiv, options) {
      this.options        = $.extend({}, this.defaults, options);
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
      // CSS for top scrollbar body (default is top)
      var scrollbarCSS = {
        width: this.$contentDiv.width() + 3,
        overflowX: 'scroll'
      };
      if (this.options.scrollbarLocation === 'left') {
        scrollbarCSS = {
          height: this.$contentDiv.height(),
          overflowY: 'scroll',
          display: 'inline-block'
        };
      }
      return scrollbarCSS;
    },
    setUpScrollbarBodyCSS: function() {
      // CSS for top scrollbar body (default is top)
      var scrollbarBodyCSS = {
        width: this.$contentDiv[0].scrollWidth,
        paddingTop: '1px'
      };
      if (this.options.scrollbarLocation === 'left') {
        scrollbarBodyCSS = {
          height: this.$contentDiv[0].scrollHeight,
          paddingLeft: '1px'
        };
      }

      return scrollbarBodyCSS;
    },
    attachEvents: function() {
      var $contentDiv = this.$contentDiv,
          $scrollbar = this.$scrollbar,
          scrollDirection = (this.options.scrollbarLocation === 'left') ? 'scrollTop' : 'scrollLeft';

      $scrollbar.on('scroll', function() {
        $contentDiv.get(0)[scrollDirection] = this[scrollDirection];
      });
      $contentDiv.on('scroll', function() {
        $scrollbar.get(0)[scrollDirection] = this[scrollDirection];
      });
    }
  };
  
  $.fn.jScrollbar = function(options) {
    var selector = this.selector;
    var scrollbarCSS = {
      display: 'inline-block',
      paddingTop: '1px',
      overflowX: 'hidden'
    };

    if (options && options.scrollbarLocation && options.scrollbarLocation === 'left') {
      scrollbarCSS.paddingLeft = '1px';
      scrollbarCSS.overflowY = 'hidden';
    }
    $(this).css(scrollbarCSS);
    
    return this.each(function() {
      var scrollview = Object.create(jScrollbar);
      scrollview.init(selector, options);
    });
  };

}( jQuery ));