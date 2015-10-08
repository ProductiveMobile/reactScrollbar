var gulp = require('gulp');
var webpack = require('gulp-webpack');
var concat = require('gulp-concat');
var less = require('gulp-less');
var webpackConf = require('./webpack.config.js');
var babel = require('gulp-babel');
var connect = require('gulp-connect');
var eslint = require('gulp-eslint');
var jscs = require('gulp-jscs');

var DEMO_PATH = 'examples/basic';
var SOURCE_PATH = 'src';

gulp.task('webpack', function () {
  return gulp.src(DEMO_PATH + '/js/main.js')
    .pipe(webpack( webpackConf ))
    .pipe(concat('main.js'))
    .pipe(gulp.dest(DEMO_PATH))
    .pipe(connect.reload());
});

gulp.task('build-less-examples', function () {
  return gulp.src(DEMO_PATH + '/less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest(DEMO_PATH))
    .pipe(connect.reload());
});

gulp.task('connect', function () {
  connect.server({
    root: DEMO_PATH,
    livereload: true,
    port: 8003
    });
});

gulp.task('lint', ['lint:jscs', 'lint:eslint']);

gulp.task('lint:jscs', function () {
  return gulp.src(SOURCE_PATH).pipe(jscs());
});

gulp.task('lint:eslint', function () {
  return gulp.src(SOURCE_PATH)
    .pipe(eslint())
    .pipe(eslint.format('stylish'))
    .pipe(eslint.failAfterError());
});

gulp.task('default', ['build-less-examples', 'webpack']);

gulp.task('watch', function () {
  connect.server({
     root: DEMO_PATH,
     livereload: true,
     port: 8003
   });
  gulp.watch(['src/js/**/*.js', 'src/js/**/*.jsx'], ['webpack']);
  gulp.watch([DEMO_PATH + '/js/**/*'], ['webpack']);
  gulp.watch(DEMO_PATH + '/less/**/*', ['build-less-demo']);
});
