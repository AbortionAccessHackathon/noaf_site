var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('sass', function () {
  gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("assets/css"));
});

gulp.task('watch', function() {
  gulp.watch('styles/main.scss', ['sass']);
});

gulp.task('connect', function() {
  connect.server({
    root: 'assets',
    livereload: true
  })
});

/**
 * Build the project.
 */
gulp.task("build", ['sass'], () => {
    console.log("Building the project ...");
});
