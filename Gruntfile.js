var _ = require('lodash');

var jamConfig = {
    compass: {
        dist: {
            options: {
                basePath: 'assets/',
                httpPath: '../',
                environment: 'production',
                sassDir: 'css/sass',
                imagesDir: 'graphics',
                cssDir: 'css',
                boring: true,
                noLineComments: true,
                outputStyle: 'compressed'
            }
        },
        dev: {
            options: {
                basePath: 'assets/',
                httpPath: '../',
                sassDir: 'css/sass',
                imagesDir: 'graphics',
                cssDir: 'css',
                noLineComments: true,
                outputStyle: 'nested',
                watch: true
            }
        },
    },
    autoprefixer: {
        multiple_files: {
            expand: true,
            flatten: true,
            src: 'assets/css/*.css',
            dest: 'assets/css/'
        }
    },
    watch: {
        styles: {
            options: {
                browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie 8', 'ie 9'],
                livereload: true
            },
            files: ['assets/css/*.css'],
            tasks: ['autoprefixer']
        },
        js: {
            files: ['assets/js/*.js'],
            options: {
                livereload: true,
            }
        }
    },
    imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'assets/graphics/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'assets/graphics/dist' 
            }]
        }
    },
    concurrent: {
        dev: {
            tasks: ['compass:dev', 'watch']
        },
        build: {
            tasks: ['compass:dist', 'imagemin']
        },
        options: {
            logConcurrentOutput: true
        }
    }
};

var ProjectTasks = function (grunt) {
    var npmTasks = [],
        devTasks = [],
        buildTasks = [],
        config = {
            pkg: grunt.file.readJSON('package.json'),
            globalConfig: {}
        };
    
    require('time-grunt')(grunt);

    // Project configuration
    grunt.initConfig(_.extend(config, jamConfig));
    

    var jamPkgs = [
        'grunt-notify',
        'grunt-shell',
        'grunt-concurrent',
        'grunt-contrib-concat',
        'grunt-contrib-nodeunit',
        'grunt-contrib-watch',
        'grunt-contrib-imagemin',
        'grunt-contrib-compass',
        'grunt-autoprefixer'
    ];

    npmTasks = npmTasks.concat(jamPkgs);

    // Concurrent: multiple tasks at the same time
    devTasks.push('concurrent:dev');
    buildTasks.push('concurrent:build');

    
    // Load packages
    _.each(npmTasks, grunt.loadNpmTasks, grunt);

    // grunt dev
    grunt.registerTask('dev', _.uniq(devTasks));

    // grunt build
    grunt.registerTask('build', _.uniq(buildTasks));

};

module.exports = ProjectTasks;