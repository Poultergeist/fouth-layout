const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const path = require('path');
const through2 = require('through2');

function addFileHeader() {
  return through2.obj(function(file, enc, cb) {
    if (file.isBuffer()) {
      const headerComment = `\n\n/* ${path.basename(file.path)} */\n`;
      file.contents = Buffer.concat([
        Buffer.from(headerComment),
        file.contents
      ]);
    }
    cb(null, file);
  });
}

gulp.task('sass', function() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(addFileHeader())
    .pipe(concat('index.css'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function() {
  gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'watch'));
