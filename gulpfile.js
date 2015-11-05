/*
 * Variables
 */
var basePaths = {
    root: './',
    assets: './assets/'
};
var paths = {
    graphics: {
        src: basePaths.assets + 'graphics/'
    },
    scripts: {
        src: basePaths.assets + 'js/src/',
        dest: basePaths.assets + 'js/dist/'
    },
    styles: {
        sass: root + 'sass/',
        css: basePaths.assets + 'css/'
    }
};

var autoprefixerBrowsers = ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie >= 9'],
	sassPrecision = 10;


/*
 * NPM Packages
 */
var gulp = require('gulp'),
	modernizr = require('gulp-modernizr'),
	notify = require('gulp-notify'),
	cache = require('gulp-cache'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	browserSync = require('browser-sync'),
	sass = require('gulp-sass');


/*
 * Tasks
 */
// Info
gulp.task('info', function(){
	console.log('');
    console.log('--------------------------------------------------');
    console.log('');
    console.log('Yo!');
    console.log('Here is a list of the tasks avaliable to you:');
    console.log('');
    console.log('1. gulp - This will perform the watch task and deal with the files as you develop.');
    console.log('2. gulp build - This is for production. It will concatinate, optimise and do other cool stuff for you.');
    console.log('3. gulp info - This will list all the avaliable options to you');
    console.log('');
    console.log('--------------------------------------------------');
    console.log('');
});

// Modernizr
gulp.task('modernizr', function() {
  	gulp.src(paths.scripts.src + 'app/**/*.js')
    	.pipe(modernizr())
		.pipe(gulp.dest(paths.scripts.dest))
		.pipe(uglify())
		.pipe(gulp.dest(paths.scripts.dest))
});

// Sass dev
gulp.task('sass-dev', function(){
	var processors = [
        autoprefixer({browsers: autoprefixerBrowsers})
    ];
	
	gulp.src(paths.styles.sass + '**/*.scss')
    	.pipe(sass({
	    	precision: sassPrecision,
	    	sourceComments: true,
	    	outputStyle: 'nested'
    	}).on('error', sass.logError))
    	.pipe(postcss(processors))
		.pipe(gulp.dest(paths.styles.css));
});

// Sass production
gulp.task('sass-production', function(){
	var processors = [
        autoprefixer({browsers: autoprefixerBrowsers})
    ];
	
	gulp.src(paths.styles.sass + '**/*.scss')
    	.pipe(sass({
	    	precision: sassPrecision,
	    	sourceComments: false,
	    	outputStyle: 'compressed'
    	}).on('error', sass.logError))
    	.pipe(postcss(processors))
		.pipe(gulp.dest(paths.styles.css));
});

// Sass watch
gulp.task('sass-watch', ['sass-dev'], browserSync.reload);

// Image compression
gulp.task('images', function() {
  return gulp.src(paths.graphics.src + '*.{jpg,jpeg,png}')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest(paths.graphics.src))
    .pipe(notify({ message: 'Graphics task complete' }));
});

// Concat and Uglify JS
gulp.task('concat', function(){
    return gulp.src(paths.scripts.src + '**/*.js')
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(notify({ message: 'Scripts task complete' }));
});

// Watch
gulp.task('watch', function() {
  	browserSync({
	  	server: {
		  	baseDir: basePaths.root
	  	}
  	});
  	
  	gulp.watch(paths.styles.sass + '**/*.scss', ['sass-watch']);
});

// Default task
gulp.task('default', ['watch']);

// Build task
gulp.task('build', ['modernizr', 'sass-production', 'concat', 'images'], function() {});