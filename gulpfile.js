var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  yuidoc = require('gulp-yuidoc'),
  path = require('path'),
  yuidocConf = require('./yuidoc.json');

var sourceFiles = ['src/core/core.js',
    'src/es5-shim/**.js',
    'src/module/ModuleLoader.js',
    'src/module/module.js'],
  destDir = 'dest',
  destFilename = 'wd.js',
  destMinifiedFilename = 'wd.min.js',
  docDir = 'doc';

gulp.task('concat', function() {
  return gulp.src(sourceFiles)
    .pipe(concat(destFilename))
    .pipe(gulp.dest(destDir));
});

gulp.task('uglify', ['concat'], function() {
  return gulp.src(path.join(destDir, destFilename))
    .pipe(uglify())
    .pipe(rename(destMinifiedFilename))
    .pipe(gulp.dest(destDir))
});

gulp.task('yuidoc', function() {
  return gulp.src(sourceFiles)
    .pipe(yuidoc({
      project: yuidocConf
    }))
    .pipe(gulp.dest(docDir));
});

gulp.task('build', ['concat', 'uglify', 'yuidoc'], function() {

});