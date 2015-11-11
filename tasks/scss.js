var sass = require('gulp-sass');


var watchableFiles   = {
    sass: [
        "./scss/*.scss",
        "./scss/**/*.scss",
    ]
}

var destinations    = {
    sass: "./css"
}

// Sass Task
gulp.task('sass',function() {

    gulp.src(watchableFiles.sass)
    	.pipe(sass().on('error', sass.logError))
    	.pipe(gulp.dest(destinations.sass));
   
});
