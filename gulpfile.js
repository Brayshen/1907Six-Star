var gulp = require('gulp');
var sass = require('gulp-sass');
var server =require('browser-sync');


gulp.task('sass',function(){
    gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css/'))
});

gulp.task('listen',function(){
    gulp.watch('./sass/*.scss',['sass'])
});

gulp.task('server',function(){
    server.init({
        server:'./',
        port:3002,
    });
    gulp.watch('./*.html').on('change',server.reload)
});
