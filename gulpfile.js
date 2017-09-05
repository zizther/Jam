/*
 * NPM Packages
 */
<<<<<<< HEAD
var gulp = require('gulp'),
    autoprefixer = require('autoprefixer'),
    pump = require('pump');
	postcss = require('gulp-postcss'),
    sass = require('gulp-sass'),
    environments = require('gulp-environments'),
    gcmq = require('gulp-group-css-media-queries'),
    cssnano = require('gulp-cssnano'),
    notify = require('gulp-notify');
=======
var paths = {
    styles: {
        scss: './scss/',
        css: './css/'
    }
};

>>>>>>> 0ff3b449a092bf83efd31ed1dde4140d8f5533fe

/*
 * Variables
 */
<<<<<<< HEAD
var development = environments.development,
    production = environments.production;
=======
var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    exec = require('child_process').exec,
    pump = require('pump'),
	autoprefixer = require('autoprefixer');
>>>>>>> 0ff3b449a092bf83efd31ed1dde4140d8f5533fe

var paths = {
    scss: './scss/',
    css: './css/',
};

var autoprefixerBrowsers = ['last 2 versions', 'ie >= 9'],
	sassPrecision = 10;

/*
 * Tasks
 */
<<<<<<< HEAD

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
=======
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
        .pipe(gulp.dest(paths.styles.css))
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
>>>>>>> 0ff3b449a092bf83efd31ed1dde4140d8f5533fe
