/*globals it describe alice */
function waitAndDo( cb ) {
  setTimeout(cb, 60);
}

describe("Alice", function() {
  // Test before -------------------------------------------

  describe("#before()", function() {
    it("should trigger once when scrolling up once", function( done ) {
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
          youDidIt.should.equal(true);
          youDidItAgain.should.equal(false);

          done();
        });
      });
    });
  });

  describe("#before()", function() {
    it("should trigger once when scrolling up twice", function( done ) {
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
            youDidIt.should.equal(true);
            youDidItAgain.should.equal(false);

            done();
          });
        });
      });
    });
  });

  describe("#before()", function() {
    it("should trigger once when scrolling up once", function( done ) {
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
            youDidIt.should.equal(true);
            youDidItAgain.should.equal(false);

            done();
          });
        });
      });
    });
  });

  describe("#before() with repeat", function() {
    it("should trigger once when scrolling up once", function( done ) {
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
            youDidIt.should.equal(true);
            youDidItAgain.should.equal(true);

            done();
          });
        });
      });
    });
  });
});
