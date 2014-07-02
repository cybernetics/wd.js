var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  path = require('path');

var sourceFiles = ['src/es5-shim/**.js'],
  destFilepath = 'dest',
  destFilename = 'wd.js',
  destMinifiedFilename = 'wd.min.js';

gulp.task('concat', function() {
  return gulp.src(sourceFiles)
    .pipe(concat(destFilename))
    .pipe(gulp.dest(destFilepath));
});

gulp.task('uglify', ['concat'], function() {
  return gulp.src(path.join(destFilepath, destFilename))
    .pipe(uglify())
    .pipe(rename(destMinifiedFilename))
    .pipe(gulp.dest(destFilepath))
});

gulp.task('build', ['uglify'], function() {

});