var less = require('gulp-less');

var watchableFiles   = {
    less: [
        "./less/*.less",
        "./less/**/*.less",
    ]
}

var destinations 	= {
	less: "./css"
}

// less Task
gulp.task('less',function() {

    gulp.src(watchableFiles.less)
    	.pipe( less({errLogToConsole: true}) )
    	.pipe(gulp.dest(destinations.less));
});