/*jshint supernew:true */

// Throttle shim created from lodash source
// github.com/bestiejs/lodash

(function( window ) {
  "use strict";

  var aliceShim = window.aliceShim;
  if (!aliceShim) {
    aliceShim = window.aliceShim = {};
  }

  aliceShim._ = {
      throttle: throttle
  };

  function throttle(func, wait) {
    var args
      , result
      , thisArg
      , timeoutId
      , lastCalled = 0
    ;

    function trailingCall() {
      lastCalled = Date();
      timeoutId = null;
      func.apply(thisArg, args);
    }

    return function() {
      var now = Date()
        , remain = wait - (now - lastCalled)
      ;

      args = arguments;
      thisArg = this;

      if (remain <= 0) {
        lastCalled = now;
        result = func.apply(thisArg, args);
      } else if (!timeoutId) {
        timeoutId = setTimeout(trailingCall, remain);
      }

      return result;
    };
  }

})(window);
