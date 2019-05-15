/*
 * Variables
 */
const paths = {
        scss: './scss/',
        css: './css/'
    },
    autoprefixerBrowsers = ['last 2 versions', 'ie > 10'],
    sassPrecision = 10;


/*
 * NPM Packages
 */
const gulp = require('gulp'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    pump = require('pump'),
	notify = require('gulp-notify'),
	postcss = require('gulp-postcss'),
	sass = require('gulp-sass'),
	gcmq = require('gulp-group-css-media-queries');


/*
 * Functions
 */
function scss(cb) {

    var plugins = [
        autoprefixer({
            browsers: autoprefixerBrowsers
        }),
        cssnano()
    ];

    pump(
        [
            gulp.src(paths.scss + '**/*.scss'),
	        sass({
    	        precision: sassPrecision,
    	        sourceComments: false,
    	        outputStyle: 'compressed'
	        }).on('error', sass.logError),
            gcmq(),
        	postcss(plugins),
    		gulp.dest(paths.css),
            notify({ message: 'Scss task complete' })
        ],
        cb
    );

}// END scss

function watch() {

    // Watch Sass
	gulp.watch(paths.scss + '**/*.scss', scss);

}// END watchFiles


// Export tasks
exports.default = gulp.parallel(scss, watch);
exports.build = scss;
