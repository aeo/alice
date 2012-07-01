// These tests are pretty quick & dirty
// They should probably be refactored to use QUnit or Mocha
// Also should incorporate with phantomjs + travis-ci

/*globals alice dash */
(function( alice, window ) {
  "use strict";

  function waitAndDo( cb ) {
    setTimeout(cb, 60);
  }

  function testAfter1( done ) {
    var youDidIt = false
      , youDidItAgain = false
    ;

    alice.after(function() {
      if (youDidIt) {
        youDidItAgain = true;
      }
      youDidIt = true;
    }, 80);

    window.scrollTo(0, 0);
    waitAndDo(function() {
      window.scrollTo(0, 100);

      waitAndDo(function() {
        done(youDidIt && !youDidItAgain);
      });
    });
  }

  function testAfter2( done ) {
    var youDidIt = false
      , youDidItAgain = false
    ;

    alice.after(function() {
      if (youDidIt) {
        youDidItAgain = true;
      }
      youDidIt = true;
    }, 80);

    window.scrollTo(0, 0);
    waitAndDo(function() {
      window.scrollTo(0, 100);

      waitAndDo(function() {
        window.scrollTo(0, 10);

        waitAndDo(function() {
          done(youDidIt && !youDidItAgain);
        });
      });
    });
  }

  function testAfter3( done ) {
    var youDidIt = false
      , youDidItAgain = false
    ;

    alice.after(function() {
      if (youDidIt) {
        youDidItAgain = true;
      }
      youDidIt = true;
    }, 80);

    window.scrollTo(0, 0);
    waitAndDo(function() {
      window.scrollTo(0, 100);

      waitAndDo(function() {
        window.scrollTo(0, 300);

        waitAndDo(function() {
          done(youDidIt && !youDidItAgain);
        });
      });
    });
  }

  function testAfter4( done ) {
    var youDidIt = false
      , youDidItAgain = false
    ;

    alice.after(function() {
      if (youDidIt) {
        youDidItAgain = true;
      }
      youDidIt = true;
    }, 80, true);


    window.scrollTo(0, 0);
    waitAndDo(function() {
      window.scrollTo(0, 100);

      waitAndDo(function() {
        window.scrollTo(0, 300);

        waitAndDo(function() {
          done(youDidIt && youDidItAgain);
        });
      });
    });
  }

  function testBefore1( done ) {
    var youDidIt = false
      , youDidItAgain = false
    ;

    alice.before(function() {
      if (youDidIt) {
        youDidItAgain = true;
      }
      youDidIt = true;
    }, 180);

    window.scrollTo(0, 3000);
    waitAndDo(function() {
      window.scrollTo(0, 100);

      waitAndDo(function() {
        done(youDidIt && !youDidItAgain);
      });
    });
  }

  function testBefore2( done ) {
    var youDidIt = false
      , youDidItAgain = false
    ;

    alice.before(function() {
      if (youDidIt) {
        youDidItAgain = true;
      }
      youDidIt = true;
    }, 180);

    window.scrollTo(0, 3000);
    waitAndDo(function() {
      window.scrollTo(0, 100);

      waitAndDo(function() {
        window.scrollTo(0, 300);

        waitAndDo(function() {
          done(youDidIt && !youDidItAgain);
        });
      });
    });
  }

  function testBefore3( done ) {
    var youDidIt = false
      , youDidItAgain = false
    ;

    alice.before(function() {
      if (youDidIt) {
        youDidItAgain = true;
      }
      youDidIt = true;
    }, 180);

    window.scrollTo(0, 3000);
    waitAndDo(function() {
      window.scrollTo(0, 100);

      waitAndDo(function() {
        window.scrollTo(0, 10);

        waitAndDo(function() {
          done(youDidIt && !youDidItAgain);
        });
      });
    });
  }

  function testBefore4( done ) {
    var youDidIt = false
      , youDidItAgain = false
    ;

    alice.before(function() {
      if (youDidIt) {
        youDidItAgain = true;
      }
      youDidIt = true;
    }, 180, true);


    window.scrollTo(0, 3000);
    waitAndDo(function() {
      window.scrollTo(0, 100);

      waitAndDo(function() {
        window.scrollTo(0, 10);

        waitAndDo(function() {
          done(youDidIt && youDidItAgain);
        });
      });
    });
  }

  dash([
      testAfter1
    , testAfter2
    , testAfter3
    , testAfter4
    , testBefore1
    , testBefore2
    , testBefore3
    , testBefore4
  ]);

})((window.jQuery || window).alice, window);
