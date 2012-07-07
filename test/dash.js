function dash( testSuite, logger, summarize ) {
  "use strict";

  var testIndex = 0
    , startTime = Date.now()
    , summary = {
          tests: []
        , passing: 0
        , failing: 0
      }
  ;

  if (typeof logger !== "function") {
    logger = function( data ) {
      if (console && console.log) {
        console.log((data.index + 1) + (data.name ? " (" + data.name + ")" : "") + (data.result ? " Pass" : " Fail"));
      }
    };
  }

  if (typeof summarize !== "function") {
    summarize = function( data ) {
      if (console && console.log) {
        console.log("Done in " + (data.duration / 1000) + "s. " + data.passing + " passing, " + data.failing + " failing.");
      }
    };
  }

  function startNext() {
    if (testSuite.length) {
      runTest(testSuite.shift(), startNext);
    } else {
      summary.duration = Date.now() - startTime;
      summarize(summary);
    }
  }

  function runTest( test, done ) {
    test(function( result ) {
      summary.tests.push({
          name: test.name
        , result: result
      });

      summary[result ? "passing" : "failing"]++;

      logger({
          index: testIndex++
        , name: test.name
        , result: result
      });

      done();
    });
  }

  startNext();
}
