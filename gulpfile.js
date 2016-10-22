var gulp = require('gulp');
var Server = require('karma').Server;
var angularProtractor = require('gulp-angular-protractor');



/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start()
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start()
});

gulp.task('protractor', function(callback) {
    gulp
        .src(['e2e/*.js'])
        .pipe(angularProtractor({
            'configFile': 'e2e/protractor.config.js',
            'debug': false,
            'autoStartStopServer': false
        }))
        .on('error', function(e) {
            console.log(e);
        })
        .on('end', callback)
});

gulp.task('run-protractor', function () {
    const watcher = gulp.watch(['app/**/*.js', 'e2e/*.js'], ['protractor'])
})

gulp.task('default', ['tdd', 'run-protractor']);
