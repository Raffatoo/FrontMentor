const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const { pipe } = require('stdout-stream');

function css() {
  return gulp
    .src('scss/app.scss')

    .pipe(autoprefixer({
      overrideBrowserslist : ['last 2 versions'],
      cascade: false
    }))

    .pipe(sass({
      outputStyle: 'expanded', // nested, compact, compressed
    }))

    .pipe(gulp.dest('css'));

}
 function watchFiles() {
   gulp.watch('scss/*.scss', css);
  //  gulp.watch('index.html');
 }


// estas funciones se regisran como tareas para ser ejecutadas

gulp.task('css', css);
gulp.task('watch', watchFiles);
// esta funcion escucha a dos archivos asi que hace una funcion asincrona
// gulp.task('watch', gulp.parallel(watchFiles));
