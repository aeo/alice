Alice.js
========

A Javascript library for attaching callbacks to vertical scroll positions.
Functionality can be triggered based on the user scrolling (up or down)
past a specific point, only once past a point in a specific direction,
while the scroll position is within a certain range, or via custom tests.

Alice will attach herself as a jQuery plugin if jQuery exists. If jQuery does
not exist, Alice will create an object `alice` in the global namespace.

With jQuery:

```javascript
$.alice.after(function() {
  // Do something after 80 pixels
}, 80);
```

Without jQuery:

```javascript
alice.after(function() {
  // Do something after 80 pixels
}, 80);
```

_For the remainder of the documentation, the examples will be shown using
syntax with jQuery._


Usage
-----

Alice comes with several fancy helper methods help you get started writing
cool stuff immediately.

### At

The `at` method is simplest way to use Alice. The method takes a pair of
arguments: a function to run once the window is scrolled past a specific top
position and the top position (in pixels).

```javascript
var myElement = $(".attached");

var callback = function( diff, goingDown ) {
      myElement.css("position", goingDown ? "fixed" : "absolute");
    }
  , scrollPosition = 320
;

$.alice.at(callback, scrollPosition);
```

Note that this example leveraged the `goingDown` argument. This second
argument, `goingDown`, is (a boolean value) regarding whether the
window is scrolling up or down at the moment the callback triggers.

### After

The `after` method takes three arguments: a function to run once the window
is scrolled past a specific top position, the top position (in pixels), and
a (boolean) flag representing whether the callback should run repeatedly
(or only once) after the window is scrolled past the specified position.

```javascript
var myElement = $(".attached");

var callback = function( diff, goingDown ) {
      myElement.css("position", "fixed");
    }
  , scrollPosition = 320
  , repeat = false
;

$.alice.after(callback, scrollPosition, repeat);
```

### Before

The `before` method is exactly the same as the `after` method except it works
in the opposite direction.

```javascript
var myElement = $(".attached");

var callback = function( diff, goingDown ) {
      myElement.css("position", "absolute");
    }
  , scrollPosition = 320
  , repeat = false
;

$.alice.before(callback, scrollPosition, repeat);
```

### Range

The `range` method is basically a combination of `after` and `before`, and
thus requires an additional top position to be defined. For this method, the
callback function will run when the window is scrolled between the two given
positions (ie. after the first position but before the second position).

```javascript
var myElement = $(".flyAcross");

var callback = function( diff, goingDown ) {
      var leftAdjust = 200 * diff / (scrollPositionEnd - scrollPositionStart) - 100;
      myElement.css("left", diff + "%");
    }
  , scrollPositionStart = 320
  , scrollPositionEnd = 720
  , repeat = true
;

$.alice.range(callback, scrollPositionStart, scrollPositionEnd, repeat);
```

Note that this example leveraged the `diff` argument. The `diff` argument is
the **relative** scroll position (in pixels) from `scrollPositionStart`.


Getting Alice
-------------

There are multiple production distributions of Alice. The standard build
assumes that your application is already using the [jQuery](jquery.org) and
[lo-dash](lodash.org)/[underscore](underscore.org) libraries, and that you
would like the helper methods (`at`, `after`, `before`, and `range`) included.

Alice + helper methods:
  - [Using jQuery and underscore](https://github.com/aeo/alice/blob/master/dist/alice.min.js) (1.1k)
  - [Using jQuery but not underscore](https://github.com/aeo/alice/blob/master/dist/alice-no_.min.js) (1.4k)
  - [Standalone](https://github.com/aeo/alice/blob/master/dist/alice-shim.min.js) (1.9k)

Core-only versions:
  - [Using jQuery and underscore](https://github.com/aeo/alice/blob/master/dist/alice-core.min.js) (.5k)
  - [Standalone](https://github.com/aeo/alice/blob/master/dist/alice-core-shim.min.js) (1.3k)


License
-------

    * Copyright (c) 2012 Jacob Swartwood & American Eagle Outfitters Inc.
    * Licensed under the MIT license
