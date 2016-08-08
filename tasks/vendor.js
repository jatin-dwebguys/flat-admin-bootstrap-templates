'use strict';

import gulp from "gulp";

const libs = [ 'bower_components/chartist-plugin-pointlabels/dist/chartist-plugin-pointlabels.min.js']

gulp.task('vendor', ['vendor:js']);

gulp.task('vendor:js', function () {
  return gulp.src(libs)
    .pipe(gulp.dest('temp/vendor/js'))
});