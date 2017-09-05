/*
 * NPM Packages
 */
var gulp = require('gulp'),
    autoprefixer = require('autoprefixer'),
    pump = require('pump');
	postcss = require('gulp-postcss'),
    sass = require('gulp-sass'),
    environments = require('gulp-environments'),
    gcmq = require('gulp-group-css-media-queries'),
    cssnano = require('gulp-cssnano'),
    notify = require('gulp-notify');

/*
 * Variables
 */
var development = environments.development,
    production = environments.production;

var paths = {
    scss: './scss/',
    css: './css/',
};

var autoprefixerBrowsers = ['last 2 versions', 'ie >= 9'],
	sassPrecision = 10;

/*
 * Tasks
 */

 // Sass
 gulp.task('scss', function(cb){
     var processors = [
         autoprefixer({ browsers: autoprefixerBrowsers })
     ];

     pump(
         [
            gulp.src(paths.scss + '**/*.scss'),
            sass({
      	        precision: sassPrecision,
      	        sourceComments: production() ? false : true,
      	        outputStyle: 'nested'
  	        }).on('error', sass.logError),
          	postcss(processors),
            production(gcmq()),
            production(cssnano()),
      		gulp.dest(paths.css),
            notify({ message: 'Scss task complete' })
         ],
         cb
     );
 });

 // Watch
 gulp.task('watch', function() {
     // Watch Scss
 	gulp.watch(paths.scss + '**/*.scss', ['scss']);
 });


 gulp.task('default', ['dev']);

 gulp.task('dev', ['scss', 'watch']);

 gulp.task('build', ['scss']);
