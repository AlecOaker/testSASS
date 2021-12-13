var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');


gulp.task('styles', () => {
    return gulp.src('sass/style.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('css/'));
});
 


gulp.task('watch', function(){
  gulp.watch(['sass/**.sass'], gulp.series('styles'))
});











// gulp.task('default', gulp.series('styles'));