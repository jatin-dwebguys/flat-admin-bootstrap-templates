'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import source from 'vinyl-source-stream';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import concat from 'gulp-concat';
import autoprefixer from 'autoprefixer';
import stripCssComments from 'gulp-strip-css-comments';

gulp.task("sass", () => {
  return gulp.src("./src/app.sass")
    .pipe(plumber({errorHandler: notify.onError(
      {
        title: "CSS Error: Line <%= error.line %>",
        message: "<%= error.message %>"
      })
    }))
    .pipe(sass())
    .pipe(postcss([ 
      autoprefixer({ browsers: ['last 2 versions'] })
    ]))
    .pipe(concat('flat-admin.css'))
    .pipe(stripCssComments())
    .pipe(gulp.dest('./temp/html/assets/css/'))
    .pipe(gulp.dest('./temp/angularjs/assets/css/'))
});


gulp.task("build:sass", () => {
  return gulp.src("./src/app.sass")
    .pipe(sass())
    .pipe(postcss([ 
      autoprefixer({ browsers: ['last 2 versions'] })
    ]))
    .pipe(concat('flat-admin.css'))
    .pipe(stripCssComments())
    .pipe(gulp.dest('./dist/html/assets/css/'))
    .pipe(gulp.dest('./dist/angularjs/assets/css/'))
});