/*
 * Variables
 */
var basePaths = {
    root: './',
    frontend: './frontend/',
    dist: './dist/'
};
var paths = {
    graphics: {
        src: basePaths.dist + 'graphics/'
    },
    scripts: {
        src: basePaths.frontend + 'js/',
        dest: basePaths.dist + 'js/'
    },
    styles: {
        scss: basePaths.frontend + 'scss/',
        css: basePaths.dist + 'css/'
    }
};


/*
 * NPM Packages
 */
var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    exec = require('child_process').exec,
    pump = require('pump'),,
	autoprefixer = require('autoprefixer'),
	browserSync = require('browser-sync');

const $ = gulpLoadPlugins(); // Load all plugins which start with 'gulp-'. Reference using $.


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
    	.pipe($.modernizr())
		.pipe(gulp.dest(paths.scripts.dest))
		.pipe($.uglify())
		.pipe(gulp.dest(paths.scripts.dest))
});

// Sass
gulp.task('sass', function() {
    gulp.src(paths.styles.scss + '**/*.scss')
    	.pipe($.sass({
	    	precision: 10,
	    	sourceComments: true,
	    	outputStyle: 'nested'
    	}).on('error', $.sass.logError))
		.pipe(gulp.dest(paths.styles.css))
        .pipe($.livereload())
        .pipe($.notify({ message: 'Sass task complete' }));
});

// Sass dev
gulp.task('sass-dev', ['sass', 'exec-postcss'], function(){});

// Sass production
gulp.task('sass-production', ['sass', 'exec-postcss', 'compress-css'], function(){});

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

// Image compression
gulp.task('images', function() {
  return gulp.src(paths.graphics.src + '*.{jpg,jpeg,png}')
    .pipe($.imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest(paths.graphics.src))
    .pipe($.notify({ message: 'Graphics task complete' }));
});

// Concat and Uglify JS
gulp.task('concat-js', function(cb){
    pump(
        [
            gulp.src(paths.scripts.src + '**/*.js'),
            $.concat('main.min.js'),
            $.uglify(),
            gulp.dest(paths.scripts.dest),
            $.notify({ message: 'Scripts task complete' })
        ],
        cb
    );
});

// Sass watch
gulp.task('sass-watch', ['sass-dev'], browserSync.reload);

// Watch
gulp.task('watch', function() {
  	browserSync({
	  	server: {
		  	baseDir: basePaths.root
	  	}
  	});

    $.livereload.listen({ basePath: basePaths.root });

    gulp.watch(paths.styles.scss + '**/*.scss', ['sass-watch']); // watch the same files in our sass task
});

// Default task
gulp.task('default', ['watch']);

// Build task
gulp.task('build', ['modernizr', 'sass-production', 'concat-js', 'images'], function() {});
