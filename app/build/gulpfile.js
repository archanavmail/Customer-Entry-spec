// require gulp
var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
// default task
gulp.task('default', function() {

});

gulp.task('sass', function () {
  return gulp.src('./assets/styles_sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/styles/css'));
});

gulp.task('imagemin',function(){
	return gulp.src('src/../*')
	.pipe(imagemin())
	.pipe(gulp.dest('build/'))
});

