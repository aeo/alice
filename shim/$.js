/*jshint supernew:true */

(function( window ) {
  "use strict";

  var aliceShim = window.aliceShim;
  if (!aliceShim) {
    aliceShim = window.aliceShim = {};
  }

  var getScrollPos;

  if ("pageYOffset" in window) {
    getScrollPos = function() {
      return window.pageYOffset;
    };
  } else {
    getScrollPos = function() {
      var doc = window.document
        , dde = doc.documentElement
      ;
      return dde && dde.scrollTop || doc.body.scrollTop;
    };
  }

  aliceShim.$ = function() {
    return {
        scrollTop: getScrollPos
      , on: addAllEvents
    };
  };

  function addAllEvents( evts, handler ) {
    evts = evts.replace(/\.alice/g, "").split(" ");
    for (var i = 0, j = evts.length; i < j; i++) {
      addEvent(evts[i], handler);
    }
  }

  function addEvent( type, handler ) {
    if (window.addEventListener) {
      window.addEventListener(type, handler, false);
    } else if (window.attachEvent) {
      window.attachEvent("on" + type, handler);
    } else {
      throw "Your browser is too old, space monkey!";
    }
  }

})(window);

