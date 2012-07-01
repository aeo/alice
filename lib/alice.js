// Alice.js
// ========
//
// A Javascript library for attaching callbacks to scroll positions.
// Functionality can be triggered based on the user scrolling (up or down)
// past a specific point, only once past a point in a specific direction,
// while the scroll position is within a certain range, or via a custom test.

(function( win, undef ) {
  "use strict";

  // Setup global dependency references.
  var g$ = win.$
    , g_ = win._
    , gShim = win.aliceShim
      // Where should alice live? Assume jQuery.
      // If we are using a shim for jQuery, she will just become a global.
    , hook = g$
  ;

  // Check that frameworks (or shims) exist.
  if (g$ == undef) {
    g$ = gShim && gShim.$;
    hook = win;
  }
  if (g_ == undef) {
    g_ = gShim && gShim._;
  }
  if (g$ == undef || g_ == undef) {
    throw "Batteries not included!";
  }

  var $win = g$(win)
    , aliceEvts = []
    , lastPos = 0
    , checkScroll = g_.throttle(function() {
        // Check the scroll position and determine if the user is scrolling
        // up or down the page.
        var sPos = $win.scrollTop()
          , goingDown = sPos > lastPos
        ;

        // Save the current scroll position to determine direction later
        lastPos = sPos;

        // For each Alice _event_ run a check and feed the value into the
        // event's callback function.
        for (var i = 0, j = aliceEvts.length; i < j; i++) {
          aliceEvts[i].callback(aliceEvts[i].check(sPos), goingDown);
        }
      }, 17)
  ;

  // Attach the handler to check scroll position to `window` on `scroll` and
  // `resize` with an "alice" namespace.
  $win.on("scroll.alice resize.alice", checkScroll);

  // `positionTester` generates a test function. The constitutes the most
  // common scroll position `check`. The `check` function returns the
  // difference between the current position (`scrollPos`) and the key
  // position (`keyPos`).
  function positionTester( keyPos ) {
    return function( scrollPos ) {
      return scrollPos - keyPos;
    };
  }

  // Define the general purpose functional Alice usage.
  hook.alice = function( cb, test ) {
    // If passed a number for `test`, use `positionTester` to create a the
    // standard diff function for testing.
    if (typeof test === "number") {
      test = positionTester(test);
    }

    // Add a new _event_ to Alice's event list.
    // The _event_ has two properties: `check` - the tester function
    // and `callback` - the handler function.
    return aliceEvts.push({
        check: test
      , callback: cb
    });
  };

  // TODO: Add a simple `remove` method.

})(window);
