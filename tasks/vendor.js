'use strict';

import gulp from "gulp";
import concat from "gulp-concat";

const jsLibs = [
  'bower_components/jquery/dist/jquery.js',
  'bower_components/bootstrap/dist/js/bootstrap.js',
  'bower_components/select2/dist/js/select2.full.js',
  'bower_components/datatables.net/js/jquery.dataTables.js',
  'bower_components/datatables.net-bs/js/dataTables.bootstrap.js',
  'bower_components/chartist/dist/chartist.js',
  'bower_components/chartist-plugin-pointlabels/dist/chartist-plugin-pointlabels.js',
  'bower_components/highlightjs/highlight.pack.js'
]

const cssLibs = [
  'bower_components/bootstrap/dist/css/bootstrap.css',
  'bower_components/font-awesome/css/font-awesome.css',
  'bower_components/datatables.net-bs/css/dataTables.bootstrap.css',
  'bower_components/chartist/dist/chartist.css',
  'bower_components/highlightjs/styles/androidstudio.css'
]

const ngLibs = [
  'bower_components/chartist/dist/chartist.js',
  'bower_components/chartist-plugin-pointlabels/dist/chartist-plugin-pointlabels.js',
  'bower_components/angular/angular.js',
  'bower_components/angular-ui-router/release/angular-ui-router.js',
  'node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
  'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
  'node_modules/angular-chartist.js/dist/angular-chartist.js'
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