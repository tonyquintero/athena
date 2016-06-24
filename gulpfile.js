// include gulp
var gulp = require('gulp');

// include fs
var fs = require('fs');

// include plugins
var sass = require('gulp-sass');
var mustache = require('gulp-mustache');

// read the json file to get values for constants
gulp.task('compile-css-variables', function() {
    return gulp.src('source/scss/**/*.scss')
        .pipe(mustache('source/defaults/constants.json',{},{}))
        .pipe(gulp.dest('compiled/scss'));
});

// render the sass files into css
gulp.task('render-css', function() {
    return gulp.src(['compiled/scss/core/**/*.scss',
        'compiled/scss/components/**/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

// watch files for changes
gulp.task('watch', function() {
    gulp.watch('source/scss/*.scss', ['compile-css-variables', 'render-css']);
});
*/
// default task
gulp.task('default', ['compile-css-variables', 'render-css', 'watch']);


