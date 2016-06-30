var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream());
});

//Watch task
gulp.task('default',function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch('sass/**/*.scss',['styles']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});