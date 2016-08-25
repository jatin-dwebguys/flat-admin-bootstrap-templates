'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';
import markdown from 'gulp-markdown-to-json';

const SERVE_CONFIG = {
  port: 3400,
  server: {
    baseDir: "./temp/",
    index: "/html/index.html"
  },
  ui: {
    port: 3402
  }
}
const server = browserSync.create()

gulp.task("docs:browser-sync", () => {
  server.init(SERVE_CONFIG);
});

gulp.task("docs:refresh", (cb) => {
  return gulp.src("./src/app.js")
    .pipe(server.stream())
})

gulp.task("docs:refresh", (cb) => {
  return gulp.src("./src/app.js")
    .pipe(server.stream())
})

gulp.task("docs:md-to-json", () => {
  gulp.src('./docs/markdown/**/*.md')
    .pipe(markdown({
      pedantic: true,
      smartypants: true
    }))
    .pipe(gulp.dest('.'))
})