jScrollbar
==========

A jQuery plugin that allows scrollbars to be placed in other places besides their default ie. top or the left


options
--------
* **scrollbarLocation**: (default: 'top') Can take a value of 'top' or 'left' where 'top' will give the element selected a 'top' scrollbar and 'left' will give it a 'left' scrollbar
* **scrollbarClass**: (default: 'jscrollbar') The scrollbar div that gets created will inherit this class
* **scrollbarBodyClass**: (default: 'jscrollbarBody') The scrollbar body, which is the hidden content inside the body of the scrollbar inherits this class
* **contentWrapperClass**: (default: 'jscrollWrapper') The div that wraps the selector element will inherit this class

```javascript
$('.test').jScrollbar({
	scrollbarLocation: 'left',
	scrollbarClass: 'jscrollbar',
	scrollbarBodyClass: 'jscrollbarBody',
	contentWrapperClass: 'jscrollWrapper'	
});
```