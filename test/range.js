/*globals it describe alice */
function waitAndDo( cb ) {
  setTimeout(cb, 60);
}

describe("Alice", function() {
  // Test range -------------------------------------------

  describe("#range()", function() {
    it("should trigger once scrolling within range twice", function( done ) {
      var youDidIt = false
        , youDidItAgain = false
      ;

      alice.range(function() {
        if (youDidIt) {
          youDidItAgain = true;
        }
        youDidIt = true;
      }, 80, 180);

      window.scrollTo(0, 3000);
      waitAndDo(function() {
        window.scrollTo(0, 100);

        waitAndDo(function() {
            window.scrollTo(0, 120);

            waitAndDo(function() {
              youDidIt.should.equal(true);
              youDidItAgain.should.equal(false);

              done();
            });
          });
      });
    });
  });

  describe("#range()", function() {
    it("should trigger once scrolling within range twice and ending after", function( done ) {
      var youDidIt = false
        , youDidItAgain = false
      ;

      alice.range(function() {
        if (youDidIt) {
          youDidItAgain = true;
        }
        youDidIt = true;
      }, 80, 180);

      window.scrollTo(0, 3000);
      waitAndDo(function() {
        window.scrollTo(0, 100);

        waitAndDo(function() {
          window.scrollTo(0, 120);

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
  });

  describe("#range()", function() {
    it("should trigger once scrolling within range twice and ending before", function( done ) {
      var youDidIt = false
        , youDidItAgain = false
      ;

      alice.range(function() {
        if (youDidIt) {
          youDidItAgain = true;
        }
        youDidIt = true;
      }, 80, 180);

      window.scrollTo(0, 3000);
      waitAndDo(function() {
        window.scrollTo(0, 100);

        waitAndDo(function() {
          window.scrollTo(0, 120);

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
  });

  describe("#range()", function() {
    it("should trigger twice scrolling in and out of range twice", function( done ) {
      var youDidIt = false
        , youDidItAgain = false
      ;

      alice.range(function() {
        if (youDidIt) {
          youDidItAgain = true;
        }
        youDidIt = true;
      }, 80, 180);


      window.scrollTo(0, 3000);
      waitAndDo(function() {
        window.scrollTo(0, 100);

        waitAndDo(function() {
          window.scrollTo(0, 10);

          waitAndDo(function() {
            window.scrollTo(0, 120);

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

  describe("#range() with repeat", function() {
    it("should trigger twice scrolling within range twice", function( done ) {
      var youDidIt = false
        , youDidItAgain = false
      ;

      alice.range(function() {
        if (youDidIt) {
          youDidItAgain = true;
        }
        youDidIt = true;
      }, 80, 180, true);


      window.scrollTo(0, 3000);
      waitAndDo(function() {
        window.scrollTo(0, 100);

        waitAndDo(function() {
          window.scrollTo(0, 120);

          waitAndDo(function() {
            window.scrollTo(0, 10);

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
});
