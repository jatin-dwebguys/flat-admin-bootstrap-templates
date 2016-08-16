'use strict';

import gulp from "gulp";
import concat from "gulp-concat";

const jsLibs = [
  'bower_components/jquery/dist/jquery.min.js',
  'bower_components/bootstrap/dist/js/bootstrap.min.js',
  'bower_components/select2/dist/js/select2.full.min.js',
  'bower_components/datatables.net/js/jquery.dataTables.min.js',
  'bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js',
  'bower_components/chartist/dist/chartist.min.js',
  'bower_components/chartist-plugin-pointlabels/dist/chartist-plugin-pointlabels.min.js',
  'bower_components/highlightjs/highlight.pack.min.js'
]

const cssLibs = [
  'bower_components/bootstrap/dist/css/bootstrap.min.css',
  'bower_components/font-awesome/css/font-awesome.min.css',
  'bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css',
  'bower_components/chartist/dist/chartist.min.css',
  'bower_components/highlightjs/styles/androidstudio.css'
]

const ngLibs = [
  'bower_components/angular/angular.min.js',
  'bower_components/angular-ui-router/release/angular-ui-router.min.js'
]

gulp.task('vendor', ['vendor:js', 'vendor:css', 'vendor:angularjs']);

gulp.task('vendor:js', function () {
  return gulp.src(jsLibs)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('temp/js'))
});

gulp.task('vendor:css', function () {
  return gulp.src(cssLibs)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('temp/css'))
});

gulp.task('vendor:angularjs', function () {
  return gulp.src(ngLibs)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('temp/angularjs/js'))
});