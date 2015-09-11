var gulp    		= require( 'gulp'       		);
var watch   		= require( 'gulp-watch' 		);
var postcss 		= require( 'gulp-postcss'		);

// Postcss plugins 
var autoprefixer 	= require( 'autoprefixer'		); 
var postcssPlugins = [
	autoprefixer({
		remove: true,					// Delete unnecessary (outdated) prefixes if true
		add: true,						// Add prefixes if true
		browsers: ['last 20 versions'],	// Add/removes prefixes bases on these browser queries, more info about browser queries see: https://github.com/ai/browserslist
	}),
]

var watchableFiles   = {
    postcss: [
        "./postcss/*.css",
        "./postcss/**/*.css",
    ]
}

var destinations    = {
    postcss: "./css"
}


// Post Css Task
gulp.task('post-css', function () {
    return gulp.src(watchableFiles.postcss)
        .pipe(postcss(postcssPlugins))
        .pipe(gulp.dest(destinations.postcss));
});

gulp.task('default', ["post-css"]);
gulp.watch(watchableFiles.postcss,['post-css']);