'use strict';

import gulp from 'gulp';
import fileinclude from 'gulp-file-include';

gulp.task('angularjs:html', () => {
  return gulp.src(['src/angularjs/**/*.html', '!src/angularjs/elements/*.html', '!src/angularjs/components/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('temp/angularjs/'))
});
