grunt.loadNpmTasks('grunt-bower-task');

grunt.initConfig({
  bower: {
    install: {
      options: {
        targetDir: './lib',
        layout: 'byType',
        install: true,
        verbose: false,
        cleanTargetDir: false,
        cleanBowerDir: false,
        bowerOptions: {
		
	}
      }
    }
  }
});
