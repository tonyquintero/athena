// include gulp
var gulp = require('gulp');

// include plugins
var sass = require('gulp-sass');
var mustache = require('gulp-mustache');

gulp.task('test', function() {
    return gulp.src('source/defaults/**/*.json')
        .pipe(gulp.dest('dist/css'));
});

// aggregate your variables into a single object
// gulp.task('aggregate-css-variables', function() {
//    return gulp.src('source/defaults/**/*.json')
//        .pipe(mustache({
//        }))
//        .pipe(gulp.dest('dist/css'));
//});
/*
// use mustache to compile vars from json into sass
gulp.task('insert-css-variables', function() {
    var mustache_variables = 
    return gulp.src('source/scss/*.scss')
        .pipe(mustache({
        }))
        .pipe(gulp.dest('dist/css'));
});

// compile sass into final css
gulp.task('sass', function() {
    return gulp.src('source/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

// watch files for changes
gulp.task('watch', function() {
    gulp.watch('source/scss/*.scss', ['sass']);
});
*/
// default task
gulp.task('default', ['test']);


