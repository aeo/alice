/*globals it describe alice */

(function( alice ) {
  "use strict";

  if (!alice) {
    throw "Alice is missing!";
  }

  function waitAndDo( cb ) {
    setTimeout(cb, 60);
  }

  // Test after -------------------------------------------
  describe("Alice", function() {

    describe("#after()", function() {
      it("should trigger once when scrolling down once", function( done ) {
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
            youDidIt.should.equal(true);
            youDidItAgain.should.equal(false);

            done();
          });
        });
      });
    });

    describe("#after()", function() {
      it("should trigger once when scrolling down once and up once", function( done ) {
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
              youDidIt.should.equal(true);
              youDidItAgain.should.equal(false);

              done();
            });
          });
        });
      });
    });

    describe("#after()", function() {
      it("should trigger once when scrolling down twice", function( done ) {
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
              youDidIt.should.equal(true);
              youDidItAgain.should.equal(false);

              done();
            });
          });
        });
      });
    });

    describe("#after() with repeat", function() {
      it("should trigger twice scrolling down twice", function( done ) {
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
              youDidIt.should.equal(true);
              youDidItAgain.should.equal(true);

              done();
            });
          });
        });
      });
    });
  });

})((window.jQuery || window).alice);
