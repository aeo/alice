"use strict";

module.exports = function( grunt ) {

  // Project configuration.
  grunt.initConfig({
      jshint: {
          options: grunt.file.readJSON('.jshintrc')
        , all: [
              "lib/*.js"
            , "shim/*.js"
          ]
      }
    , mocha_phantomjs: {
          all: {
              src: [
                  "test/*.html"
              ]
            , options: {
                  reporter: "xunit"
                , output: "reports/test.xml"
              }
          }
      }
    , blanket_mocha: {
          all: {
              src: [
                  "test/*.html"
              ]
            , options: {
                  reporter: "Spec"
              }
          }
        , options: {
              // Fail tests if coverage is less than 10%
              threshold: 10
          }
      }
    , plato: {
          all: {
              options: {
                jshint: grunt.file.readJSON('.jshintrc')
              }
            , files: {
                reports: [
                    "lib/**/*.js"
                  , "shim/*.js"
                ]
              }
          }
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

  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-mocha-phantomjs");
  grunt.loadNpmTasks("grunt-blanket-mocha");
  grunt.loadNpmTasks("grunt-plato");

  grunt.registerTask("default", [
      "jshint"
    , "uglify"
      // Run XUnit compatible tests for CI
    // , "mocha_phantomjs"
      // Run tests with Blanket coverage
    , "blanket_mocha"
    , "plato"
  ]);

};
