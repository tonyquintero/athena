// include gulp
var gulp = require('gulp');

// include plugins
var sass = require('gulp-sass');

// compile sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

// watch files for changes
gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['sass']);
});

// default task
gulp.task('default', ['sass', 'watch']);
