var ftp     = require( 'vinyl-ftp'  );


var watchableFiles   = {
    vinylFtp: [
        "./less/*.less",
        "./less/**/*.less",
    ]
}

var destinations    = {
    vinylFtp: "domains/luminox.oswshop.nl/public_html"
}

// Depoloy to an FTP server
gulp.task( 'deploy', function() {
    console.log('Deploy');
    var conn = ftp.create( {
        host:     '',                                   // domainname.nl
        user:     '',                                   // username
        password: '',                                   // password
        parallel: 10,                                   // Amount of prallel connections
        log: gutil.log                                  // No idea what this is...
    } ),

    //using base = '.' will transfer everything to public_html correctly turn off buffering in gulp.src for best performance
    return gulp.src( watchableFiles.vinylFtp, { base: '.', buffer: false } )
        .pipe( conn.newer( destinations.vinylFtp ) ) // only upload newer files
        .pipe( conn.dest( destinations.vinylFtp ) );

} );