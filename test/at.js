/*globals it describe alice */
function waitAndDo( cb ) {
  setTimeout(cb, 60);
}

describe("Alice", function() {
  // Test at -------------------------------------------

  describe("#at()", function() {
    it("should trigger once when scrolling past once", function( done ) {
      var youDidIt = false
        , youDidItAgain = false
      ;

      alice.at(function() {
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

  describe("#at()", function() {
    it("should trigger twice when scrolling past twice", function( done ) {
      var youDidIt = false
        , youDidItAgain = false
      ;

      alice.at(function() {
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
            youDidItAgain.should.equal(true);

            done();
          });
        });
      });
    });
  });

  describe("#at()", function() {
    it("should trigger once when scrolling past once then scrolling further", function( done ) {
      var youDidIt = false
        , youDidItAgain = false
      ;

      alice.at(function() {
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
});

