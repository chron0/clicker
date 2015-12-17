module.exports = function(config) {
  config.set({
    // list of files / patterns to load in the browser

    // **/*.js: All files with a "js" extension in all subdirectories
    // **/!(jquery).js: Same as previous, but excludes "jquery.js"
    // **/(foo|bar).js: In all subdirectories, all "foo.js" or "bar.js" files

    files: [
      '../node_modules/requirejs/require.js',
      '../node_modules/systemjs/dist/system-polyfills.js',
      '../node_modules/systemjs/dist/system.js',
      '../node_modules/angular2/bundles/router.js',
      '../node_modules/angular2/bundles/http.js',
   //   '../node_modules/es6-promise/dist/es6-promise.js',
    //  'test/system.config.js',
      '../node_modules/angular2/bundles/angular2-polyfills.js',
      '../node_modules/rxjs/bundles/Rx.umd.js',
      '../node_modules/angular2/bundles/angular2.umd.js',
      '../bower_components/angular/angular.js',
      '../bower_components/angular-mocks/angular-mocks.js',
      '../node_modules/ionic-framework/bundles/ionic.js',
      'build/test/test/services/clickers.spec.js'
    ],

    browsers: [
      'PhantomJS'
    ],

    // level of logging: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_WARN,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // web server port
    port: 7676,

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // Additional reporters, such as growl, junit, teamcity or coverage
    reporters: ['progress'],

    // Enable or disable colors in the output (reporters and logs).
    colors: true
  });
};