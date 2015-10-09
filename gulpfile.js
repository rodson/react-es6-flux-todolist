var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function() {
  return browserify({
      entries: './js/app.js',
      debug: true
    })
    .transform(babelify.configure({
      stage: 0
    }))
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('./js/**/*.js', ['build']);
});

gulp.task('default', ['build', 'watch']);
