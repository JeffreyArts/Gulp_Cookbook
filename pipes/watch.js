var watch   = require( 'gulp-watch');

var watchableFiles   = {
	
}

gulp.task('taskname', function() {
	console.log("File changed");
});

gulp.watch(watchableFiles,['taskname']);