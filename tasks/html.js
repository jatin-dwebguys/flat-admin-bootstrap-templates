'use strict';

import gulp from 'gulp';
import fileinclude from 'gulp-file-include';

gulp.task('html', () => {
  return gulp.src(['src/html/**/*.html', '!src/html/include/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('temp/html/'))
});

gulp.task('build:html', () => {
  return gulp.src(['src/html/**/*.html', '!src/html/include/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('dist/html/'))
});
