/*
 * NPM Packages
 */
const gulp = require('gulp'),
    autoprefixer = require('autoprefixer'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    mqpacker = require('css-mqpacker'),
    cssnano = require('cssnano'),
    pump = require('pump')
    environments = require('gulp-environments'),
    notify = require('gulp-notify'),
    postcss = require('gulp-postcss'),
	sass = require('gulp-sass');

sass.compiler = require('node-sass');


/*
 * Variables
 */
const paths = {
        styles: {
            scss: './scss/',
            css: './css/'
        }
    },
    sassPrecision = 10,
    development = environments.development,
    production = environments.production;


/*
 * Tasks
 */
// Scss
function scss(cb) {

    let pluginsProd = [
            autoprefixer(),
            mqpacker(),
            cssnano()
        ],
        pluginsDev = [
            autoprefixer(),
            mqpacker()
        ];

    pump(
        [
            gulp.src(paths.styles.scss + '**/*.scss'),
	        sass({
    	        precision: sassPrecision,
    	        sourceComments: production() ? false : true,
    	        outputStyle: 'nested'
	        }).on('error', sass.logError),
        	postcss(production() ? pluginsProd : pluginsDev),
    		gulp.dest(paths.styles.css),
            development(browserSync.stream()),
            development(notify({ message: 'Scss task complete' }))
        ],
        cb
    );
}// END css

// Watch
function watch() {

    // Watch SCSS
	gulp.watch(paths.styles.scss + '**/*.scss', scss);

}


/**
* Tasks
*/

// Export tasks
exports.watch = watch;
exports.scss = scss;
exports.default =  gulp.series(scss, watch);
exports.build = scss;
