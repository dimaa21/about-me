const gulp = require('gulp');
const minifyCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const minifyJS = require('gulp-minify');
const browserSync = require('browser-sync').create();

gulp.task('minCSS', async function () {
  gulp.src('./app/css/main.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.stream());
});

gulp.task('minJS', async function () {
  gulp.src('./app/js/main.js')
    .pipe(minifyJS({ ext: { min: '-min.js' }, noSource: true }))
    .pipe(gulp.dest('public/js'))
    .pipe(browserSync.stream());
});

gulp.task('watchAll', function () {
  gulp.watch('./app/css/*.scss', gulp.series('minCSS'));
  gulp.watch('./app/js/*.js', gulp.series('minJS'));
});

gulp.task('browserSync', function () {
  browserSync.init({
    server: { baseDir: './' }
  });
  gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('browserSync', 'watchAll'));
