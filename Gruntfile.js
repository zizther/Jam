var _ = require('lodash');

var modernizrConfig = {
    // @see https://github.com/Modernizr/grunt-modernizr#config-options
    dist: {
        // [REQUIRED] Path to the build you're using for development.
        "devFile" : 'public/assets/js/src/modernizr.js',
        
        // Path to save out the built file.
        "outputFile" : 'public/assets/js/dist/modernizr.js',
        
        // Based on default settings on http://modernizr.com/download/
        "extra" : {
            shiv : true,
            printshiv : false,
            load : true,
            mq : false,
            cssclasses : true
        },
        
        // Based on default settings on http://modernizr.com/download/
        "extensibility" : {
            addtest : false,
            prefixed : false,
            teststyles : false,
            testprops : false,
            testallprops : false,
            hasevents : false,
            prefixes : false,
            domprefixes : false
        },
        // By default, source is uglified before saving
        "uglify" : true,

        // Define any tests you want to implicitly include.
        "tests" : [],
        
        // By default, this task will crawl your project for references to Modernizr tests.
        // Set to false to disable.
        "parseFiles" : true,

        // When parseFiles = true, this task will crawl all *.js, *.css, *.scss and *.sass files,
        // except files that are in node_modules/.
        // You can override this by defining a "files" array below.
        "files" : {
            "src": ['public/assets/css/**', 'public/assets/js/src/**']
        },
        
        // This handler will be passed an array of all the test names passed to the Modernizr API, and will run after the API call has returned
        // "handler": function (tests) {},

        // When parseFiles = true, matchCommunityTests = true will attempt to
        // match user-contributed tests.
        "matchCommunityTests" : false,

        // Have custom Modernizr tests? Add paths to their location here.
        "customTests" : []
    }
};

var shellConfig = {
    shell: {
        start: {
            command: [
                'echo',
                'echo --------------------------------------------------',
                'echo',
                'echo Yo!',
                'echo Here is a list of the tasks avaliable to you:',
                'echo',
                'echo 1. grunt - This will perform the watch task and deal with the files as you develop.',
                'echo 2. grunt build - This is for production. It will concatinate, optimise and do other cool shit for you.',
                'echo 3. grunt info - This will list all the avaliable options to you',
                'echo',
                'echo --------------------------------------------------',
                'echo'
            ].join('&&')
        },
        updateCanIUse: {
            command: 'npm update caniuse-db'
        }
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
                browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie 9'],
                livereload: true
            },
            files: ['public/assets/css/*.css'],
            tasks: ['autoprefixer'],
        },
        images: {
            options: {
                livereload: true
            },
            files: ['public/assets/graphics/**/*.{png,jpg,gif,svg}']
        },
        js: {
            options: {
                livereload: true
            },
            files: ['public/assets/js/*.js']
        },
    },
    imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'public/assets/graphics/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'public/assets/graphics/'
            }]
        }
    },
    svgmin: {
        multiple: {
            options: {
                plugins: [
                    {
                        removeViewBox: false
                    },
                    {
                        removeUselessStrokeAndFill: false
                    }
                ]
            },
            files: [{
                //'public/assets/graphics/**/*.svg': 'public/assets/graphics/'
                expand: true,
                cwd: 'public/assets/graphics/',
                src: ['**/*.svg'],
                dest: 'public/assets/graphics/'
            }]
        }
    },
    concurrent: {
        dev: {
            tasks: ['shell:updateCanIUse', 'compass:dev', 'watch'] // 'browserSync'
        },
        build: {
            tasks: ['compass:dist', 'autoprefixer', 'imagemin', 'svgmin']
        },
        options: {
            logConcurrentOutput: true
        }
    }
};

var ProjectTasks = function (grunt) {
    var npmTasks = ['grunt-shell', 'grunt-modernizr'],
        defaultTasks = [],
        devTasks = [],
        buildTasks = [],
        config = {
            pkg: grunt.file.readJSON('package.json'),
            globalConfig: {
                public_folder: 'public'
            },
            modernizr: modernizrConfig
        };
    
    require('time-grunt')(grunt);

    // Project configuration
    grunt.initConfig(_.extend(config, shellConfig, jamConfig));
    

    var jamPkgs = [
        'grunt-notify',
        'grunt-concurrent',
        'grunt-contrib-concat',
        'grunt-contrib-nodeunit',
        'grunt-contrib-watch',
        'grunt-contrib-imagemin',
        'grunt-svgmin',
        'grunt-contrib-compass',
        'grunt-autoprefixer',
        'grunt-browser-sync'
    ];

    npmTasks = npmTasks.concat(jamPkgs);

    // Concurrent: multiple tasks at the same time
    devTasks.push('concurrent:dev');
    buildTasks.push('concurrent:build');


    // Concatenate, uglify
    buildTasks.push('requirejs:build'); 
    // To be used with post-install script from Bower to update require.js config 
    grunt.registerTask('bower-requirejs', ['bower']);


    defaultTasks.push('shell:start');

    // Do the modernizr task
    // Leave modernizr to build after the requirejs stuff and other parts are done otherwise it gets overwritten.
    buildTasks.push('modernizr');
    
    // Load packages
    _.each(npmTasks, grunt.loadNpmTasks, grunt);

    // grunt / grunt default
    grunt.registerTask('default', _.uniq(devTasks));

    // grunt build
    grunt.registerTask('build', _.uniq(buildTasks));

    // grunt info
    grunt.registerTask('info', _.uniq(defaultTasks));

};

module.exports = ProjectTasks;