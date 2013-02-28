"use strict";

module.exports = function( grunt ) {

  // Project configuration.
  grunt.initConfig({
      jshint: {
        options: {
            browser: true
          , jquery: true
          , laxcomma: true
        }
      , all: [
            "lib/*.js"
          , "shim/*.js"
        ]
      }
    , uglify: {
          dist: {
              src: [
                  "copy.js"
                , "lib/alice.js"
                , "lib/helpers.js"
              ]
            , dest: "dist/alice.min.js"
          }
        , core: {
              src: [
                  "copy.js"
                , "lib/alice.js"
              ]
            , dest: "dist/alice-core.min.js"
          }
        , no_: {
              src: [
                  "copy.js"
                , "shim/_.js"
                , "lib/alice.js"
                , "lib/helpers.js"
              ]
            , dest: "dist/alice-no_.min.js"
          }
        , shim: {
              src: [
                  "copy.js"
                , "shim/$.js"
                , "shim/_.js"
                , "lib/alice.js"
                , "lib/helpers.js"
              ]
            , dest: "dist/alice-shim.min.js"
          }
        , "core-shim": {
              src: [
                  "copy.js"
                , "shim/$.js"
                , "shim/_.js"
                , "lib/alice.js"
              ]
            , dest: "dist/alice-core-shim.min.js"
          }
      }
  });

  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-jshint");

  grunt.registerTask("default", [ "jshint", "uglify" ]);

};
