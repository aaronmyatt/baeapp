(() => {
    "use strict"

    const gulp              = require("gulp")
    const Server            = require("karma").Server
    const angularProtractor = require("gulp-angular-protractor")
    const gulpif            = require("gulp-if")
    const browserSync       = require("browser-sync").create();
    const sass              = require("gulp-sass");

    const env = process.env.NODE_ENV

    const paths = {
        app           : "app/",
        css           : "app/css",
        cssBlob       : "app/css/*.css",
        sass          : "app/sass",
        sassIndex     : "app/sass/index.scss",
        sassBlob      : "app/sass/*.scss",
        scriptsBlob   : "app/**/*.js",
        templatesBlob : "app/**/*.html",
        karma         :  __dirname + "/karma.conf.js",
        e2e           : "e2e/",
        e2eConfig     : "e2e/protractor.config.js",
        e2eBlob       : "e2e/*.js"
    }

    gulp.task("serve", ["sass"], () => {

        browserSync.init({
            server: paths.app
        });

        gulp.watch(paths.sassBlob, ["sass"]);
        gulp.watch(paths.templatesBlob).on("change", browserSync.reload);
    });

    gulp.task("sass", () => {
        return gulp.src(paths.sassIndex)
            .pipe(sass())
            .pipe(gulp.dest(paths.css))
            .pipe(browserSync.stream());
    })

    gulp.task("jasmine", function (done) {
      new Server({
        configFile: paths.karma
      }, done).start()
    });

    gulp.task("protractor", function(callback) {
        gulp
            .src([paths.e2eBlob])
            .pipe(gulpif(env==="TESTUI", angularProtractor({
                "configFile": paths.e2eConfig,
                "debug": false,
                "autoStartStopServer": false
            })))
            .on("error", function(e) {
                console.log(e);
            })
            .on("end", callback)
    });

    gulp.task("run-protractor", function () {
        const watcher = gulp.watch([paths.templatesBlob,
                                    paths.scriptsBlob,
                                    paths.e2eBlob], ["protractor"])
    })

    gulp.task('default', ["serve", "jasmine", "run-protractor"])
})()
