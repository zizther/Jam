/*
 * Variables
 */
var paths = {
    styles: {
        scss: './scss/',
        css: './css/'
    }
};


/*
 * NPM Packages
 */
var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    exec = require('child_process').exec,
    pump = require('pump'),
	autoprefixer = require('autoprefixer');

const $ = gulpLoadPlugins(); // Load all plugins which start with 'gulp-'. Reference using $.


/*
 * Tasks
 */
// NPM Tasks
gulp.task('exec-postcss', function (cb) {
    exec('npm run postcss', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
})

// Scss
gulp.task('scss', function() {
    gulp.src(paths.styles.scss + '**/*.scss')
    	.pipe($.sass({
	    	precision: 10,
	    	sourceComments: false,
	    	outputStyle: 'compressed'
    	}).on('error', $.sass.logError))
		.pipe(gulp.dest(paths.styles.css))
        .pipe($.notify({ message: 'Scss task complete' }));
});

// Compress CSS
gulp.task('compress-css', function(){
    return gulp.src(paths.styles.css + '*.css')
        .pipe($.cleancss({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest(paths.styles.css));
        .pipe($.notify({ message: 'CSS compression task complete' }));
});

// Watch
gulp.task('watch', ['scss', 'exec-postcss'], function() {
    gulp.watch(paths.styles.scss + '**/*.scss', ['scss']); // watch the same files in our sass task
});

// Default task
gulp.task('default', ['watch']);

// Build task
gulp.task('build', ['scss', 'exec-postcss', 'compress-css']);
