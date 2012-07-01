function dash( testSuite, outputId ) {
  "use strict";

  var log = function( msg ) {
        if (console && console.log) {
          console.log(msg);
        }
      }
  ;

  if (outputId) {
    var outEl = document.getElementById(outputId);
    if (outEl) {
      log = function( msg ) {
        outEl.innerHTML += msg + "<br>";
      };
    }
  }

  function startNext() {
    if (testSuite.length) {
      runTest(testSuite.shift(), startNext);
    } else {
      log("All done!");
    }
  }

  function runTest( test, done ) {
    test(function( result ) {
      log(result ? " Pass " : " Fail ");
      done();
    });
  }

  startNext();
}
