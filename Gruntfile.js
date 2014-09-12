var _ = require('lodash');

var modernizrConfig = {
    // @see https://github.com/Modernizr/grunt-modernizr#config-options
    dist: {
        devFile : 'public/assets/js/src/modernizr.js',
        outputFile : 'public/assets/js/dist/modernizr.js',
        extra : {
            shiv : true,
            printshiv : false,
            load : true,
            mq : false,
            cssclasses : true
        },
        extensibility : {
            addtest : false,
            prefixed : false,
            teststyles : false,
            testprops : false,
            testallprops : false,
            hasevents : false,
            prefixes : false,
            domprefixes : false
        },
        uglify : true,
        tests : [],
        parseFiles : true,
        matchCommunityTests : false,
        customTests : []
    }
};

var jamConfig = {
    compass: {
        dist: {
            options: {
                basePath: 'public/assets/',
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
                basePath: 'public/assets/',
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
            src: 'public/assets/css/*.css',
            dest: 'public/assets/css/'
        }
    },
    watch: {
        styles: {
            options: {
                browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie 8', 'ie 9'],
                livereload: true
            },
            files: ['public/assets/css/*.css'],
            tasks: ['autoprefixer']
        },
        js: {
            files: ['public/assets/js/*.js'],
            options: {
                livereload: true,
            }
        }
    },
    imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'public/assets/graphics/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'public/assets/graphics/dist' 
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
    var npmTasks = ['grunt-modernizr'],
        devTasks = [],
        buildTasks = ['modernizr'],
        config = {
            pkg: grunt.file.readJSON('package.json'),
            globalConfig: {
                public_folder: 'public'
            },
            modernizr: modernizrConfig
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




    var requireJsPkgs = [
        'grunt-contrib-concat',
        'grunt-contrib-uglify',
        'grunt-bower-requirejs',
        'grunt-contrib-requirejs'
    ];

    npmTasks = npmTasks.concat(requireJsPkgs);

    
    // Load packages
    _.each(npmTasks, grunt.loadNpmTasks, grunt);

    // grunt dev
    grunt.registerTask('dev', _.uniq(devTasks));

    // grunt build
    grunt.registerTask('build', _.uniq(buildTasks));

};

module.exports = ProjectTasks;