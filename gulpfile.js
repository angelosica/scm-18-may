var gulp    = require('gulp');
var htmlmin = require('gulp-htmlmin');
var bs      = require('browser-sync').create();
var rename  = require('gulp-rename');

// styles
gulp.task('minify', function() {
  return gulp.src('src/index.html')
    .pipe(htmlmin({collapseWhitespace: true, minifyCSS: true, minifyJS: true, removeComments: true, removeCommentsFromCDATA: true, removeEmptyAttributes: true}))
    .pipe(rename({
            suffix: '.min'
        }))
    .pipe(gulp.dest('./'))
});

gulp.task('browser-sync', function() {
  bs.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch('src/index.html', ['minify']);
  gulp.watch("src/index.html").on('change', bs.reload);
});
