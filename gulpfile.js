/*
 * Variables
 */
var paths = {
        styles: {
            scss: './scss/',
            css: './css/'
        }
    },
    autoprefixerBrowsers = ['last 4 versions', 'ie >= 10'],
    sassPrecision = 10;


/*
 * NPM Packages
 */
var gulp = require('gulp'),
	notify = require('gulp-notify'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	sass = require('gulp-sass'),
	gcmq = require('gulp-group-css-media-queries'),
    cssnano = require('gulp-cssnano'),
    pump = require('pump');


/*
 * Tasks
 */
// Scss
gulp.task('scss', function(cb){
    var processors = [
            autoprefixer({
                browsers: autoprefixerBrowsers
            })
        ];

    pump(
        [
            gulp.src(paths.styles.scss + '**/*.scss'),
	        sass({
    	        precision: sassPrecision,
    	        sourceComments: false,
    	        outputStyle: 'compressed'
	        }).on('error', sass.logError),
        	postcss(processors),
            gcmq(),
            cssnano(),
    		gulp.dest(paths.styles.css),
            notify({ message: 'Scss task complete' })
        ],
        cb
    );
});

// Watch
gulp.task('watch', ['scss'], function() {
    gulp.watch(paths.styles.scss + '**/*.scss', ['scss']); // watch the same files in our sass task
});

// Default task
gulp.task('default', ['watch']);

// Build task
gulp.task('build', ['scss']);
