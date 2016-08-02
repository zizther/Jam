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
        sass: basePaths.root + 'scss/',
        css: basePaths.assets + 'css/'
    }
};


/*
 * NPM Packages
 */
var gulp = require('gulp'),
    exec = require('child_process').exec,
	modernizr = require('gulp-modernizr'),
	notify = require('gulp-notify'),
	cache = require('gulp-cached'),
    remember = require('gulp-remember'),
    cleancss = require('gulp-clean-css'),
	concat = require('gulp-concat'),
	//uglify = require('gulp-uglify'),
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
    console.log('1. gulp info - This will list all the avaliable options to you');
    console.log('2. gulp - This will perform the watch task and deal with the files as you develop.');
    console.log('3. gulp build - This is for production. It will concatinate, optimise and do other cool stuff for you.');
    console.log('');
    console.log('--------------------------------------------------');
    console.log('');
});

// NPM Tasks
gulp.task('exec-postcss', function (cb) {
    exec('npm run postcss', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
})

// Modernizr
gulp.task('modernizr', function() {
  	gulp.src(paths.scripts.src + 'app/**/*.js')
    	.pipe(modernizr())
		.pipe(gulp.dest(paths.scripts.dest))
		.pipe(uglify())
		.pipe(gulp.dest(paths.scripts.dest))
});

// Sass
gulp.task('sass', function() {
    gulp.src(paths.styles.sass + '**/*.scss')
        .pipe(cache('sass')) // only pass through changed files
    	.pipe(sass({
	    	precision: 10,
	    	sourceComments: true,
	    	outputStyle: 'nested'
    	}).on('error', sass.logError))
        .pipe(remember('sass')) // add back all files to the stream
		.pipe(gulp.dest(paths.styles.css));
        .pipe(notify({ message: 'Sass task complete' }));
});

// Sass dev
gulp.task('sass-dev', ['sass', 'exec-postcss'], function(){});

// Sass production
gulp.task('sass-production', ['sass', 'exec-postcss', 'compress-css'], function(){});

// Compress CSS
gulp.task('compress-css', function(){
    return gulp.src(paths.styles.css + '*.css')
        .pipe(cleancss({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest(paths.styles.css));
        .pipe(notify({ message: 'CSS compression task complete' }));
});

// Image compression
gulp.task('images', function() {
  return gulp.src(paths.graphics.src + '*.{jpg,jpeg,png}')
    .pipe(cache('images'))
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(remember('images'))
    .pipe(gulp.dest(paths.graphics.src))
    .pipe(notify({ message: 'Graphics task complete' }));
});

// Concat and Uglify JS
// gulp.task('concat', function(){
//     return gulp.src(paths.scripts.src + '**/*.js')
//         .pipe(concat('main.min.js'))
//         .pipe(gulp.dest(paths.scripts.dest))
//         .pipe(uglify())
//         .pipe(gulp.dest(paths.scripts.dest))
//         .pipe(notify({ message: 'Scripts task complete' }));
// });

// Sass watch
gulp.task('sass-watch', ['sass-dev'], browserSync.reload);

// Watch
gulp.task('watch', function() {
  	browserSync({
	  	server: {
		  	baseDir: basePaths.root
	  	}
  	});

    var sassWatcher = gulp.watch(paths.styles.sass + '**/*.scss', ['sass-watch']); // watch the same files in our sass task

    sassWatcher.on('change', function (event) {
        if (event.type === 'deleted') { // if a file is deleted, forget about it
            delete cache.caches['sass'][event.path];
            remember.forget('sass', event.path);
        }
    });
});

// Default task
gulp.task('default', ['watch']);

// Build task
gulp.task('build', ['modernizr', 'sass-production', 'concat', 'images'], function() {});
