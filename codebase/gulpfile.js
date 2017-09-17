var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-sass'),
	connect = require('gulp-connect'),
	sassLint = require('gulp-sass-lint');

gulp.task('sass', function () {
  gulp.src('./scss/**/*.scss')
  	.pipe(sassLint())
  	.pipe(sassLint.format())
  	.pipe(sassLint.failOnError())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("assets/css"));
});

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch('**.html', ['html']);
});

gulp.task('html', function() {
  gulp.src('**.html')
  .pipe(gulp.dest('assets'))
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
gulp.task('default', ['sass', 'html', 'connect', 'watch'], () => {
    console.log("Building the project ...");
});
