(function( alice ) {
  "use strict";

  if (!alice) {
    throw "Alice is missing!";
  }

  alice.before = function( cb, breakPos, continuous ) {
    continuous = !!continuous;
    var isBefore = false;

    return alice(function( diff, goingDown ) {
      if ((continuous || !isBefore) && diff < 0) {
        isBefore = true;
        cb(diff, goingDown);
      } else {
        isBefore = false;
      }
    }, Number(breakPos));
  };

  alice.after = function( cb, breakPos, continuous ) {
    continuous = !!continuous;
    var isAfter = false;

    return alice(function( diff, goingDown ) {
      if ((continuous || !isAfter) && diff > 0) {
        isAfter = true;
        cb(diff, goingDown);
      } else {
        isAfter = false;
      }
    }, Number(breakPos));
  };

  alice.range = function( cb, startPos, endPos, continuous ) {
    continuous = !!continuous;
    var isRange = false
      , relativeEndPos = endPos - startPos
    ;

    return alice(function( diff, goingDown ) {
      if ((continuous || !isRange) && diff >= 0 && diff <= relativeEndPos) {
        isRange = true;
        cb(diff, goingDown);
      } else {
        isRange = false;
      }
    }, Number(startPos));
  };

  alice.at = function( cb, breakPos ) {
    var isBefore = false
      , isAfter = false
    ;

    return alice(function( diff, goingDown ) {
      if (diff === 0) {
        cb(diff, goingDown);
        isBefore = isAfter = false;

      } else if (diff < 0) {
        isBefore = true;

        if (isAfter) {
          cb(diff, goingDown);
          isAfter = false;
        }

      } else if (diff > 0) {
        isAfter = true;

        if (isBefore) {
          cb(diff, goingDown);
          isBefore = false;
        }
      }
    }, Number(breakPos));
  };

})((window.jQuery || window).alice);
