var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

/* Task to compile less */
gulp.task('compile-less', function() {  
  gulp.src('./less/style.less')
    .pipe(sourcemaps.init())  
    .pipe(less())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./mainfile/css/'));
}); 
/* Task to watch less changes */
gulp.task('watch-less', function() {  
  gulp.watch('./less/**/*.less' , ['compile-less']);
});
 
gulp.task('serve', function () {
    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./mainfile/"
        }
    }); 
    gulp.watch("./less/*.less").on("change", reload);
    gulp.watch("./mainfile/*.html").on("change", reload);
});
 
/* Task when running `gulp` from terminal */
gulp.task('default', ['watch-less', 'serve', 'compile-less']);