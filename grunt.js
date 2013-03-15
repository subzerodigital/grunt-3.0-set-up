/*global module:false*/
module.exports = function(grunt) {
	
  "use strict";
  
  //load npm custom task
  grunt.loadNpmTasks('grunt-css');
  grunt.loadNpmTasks('grunt-ftp-deploy');
  grunt.loadNpmTasks('grunt-jasmine-runner');
  
  //load native custom tasks
  grunt.loadTasks('./dev/grunt/tasks');
  var manifestLoader = require('./dev/grunt/tasks/manifestLoader.js');
  //load config files (custom settings / etc)...
  var buildConfig = grunt.file.readJSON('./dev/grunt/gruntConfig.js');
  
  // Project configuration.
  grunt.initConfig({
	//make manifestLoader avaiable t custom tasks  
	values:{
		manifestLoader:manifestLoader,
		buildConfig:buildConfig
	}, 
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    lint: {
      files: manifestLoader.readManifest('./scripts/jsLint'),
    },
    /*
    qunit: {
      files: []
    },
    */
    concat: {
      all: {
        //src: buildConfig.jsFiles,
    	  src:manifestLoader.readManifest('./scripts/jsIncludes'),  
    	  dest: buildConfig.jsConcatDesc
      },
      wcmsLib: {
    	  src:manifestLoader.readManifest('./scripts/libIncludes'),
    	  dest: buildConfig.concatDest.libIncludes
      },
      wcmsNamespace: {
    	  src:manifestLoader.readManifest('./scripts/nameSpaceIncludes'),
    	  dest: buildConfig.concatDest.nameSpaceIncludes
      }
    },
    min: {
      dist: {
        src: buildConfig.jsMinSrc,
        dest: buildConfig.jsMinDest
      }
    },
    cssmin:{
    	css: {
            src: buildConfig.cssFiles,
            dest: buildConfig.cssMinDest
        }
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint qunit'
    },
    jshint: {
	  directives: { 
        predef: [ 
            "jQuery",
            "$"
        ]
	  },		
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,
        smarttabs:false,
        predef:["$","ABC"]
      },
      globals: {
        jQuery: true
      }
    },
    uglify: {},
    exportManifests:{
    	js:{
    		src:buildConfig.jsMenifestOutput.src,
    		dest:buildConfig.jsMenifestOutput.dest,
    		template:buildConfig.jsMenifestOutput.template,
    		srcPrefix:buildConfig.jsMenifestOutput.srcPrefix
    	}
    },
    
    "ftp-deploy": {
	  build: {
	    auth: {
	      host: 'externalftp',
	      port: 21,
	      authKey: 'key1'
	    },
	    src: 'styles',
	    dest: 'project/INNADP/devYinan/styles1/',
	    exclusions: ['/**/.DS_Store', '/**/Thumbs.db', '/tmp']
	  }
    },
    
    jasmine : {
        // Your project's source files
    	vendor : ['.scripts/lib/jquery-1.9.0.js','.scripts/lib/vendor/klass.js','.scripts/lib/vendor/code.photoswipe.jquery-3.0.5.js','.scripts/lib/vendor/jquery.cj-swipe.js'],
        src :  manifestLoader.readManifest('./scripts/jsIncludes'), 
        specs : 'test/spec/*.js'
        // Your spec helper files
        //helpers : ['.scripts/lib/jquery-1.9.0.js','.scripts/lib/vendor/klass.js','.scripts/lib/vendor/code.photoswipe.jquery-3.0.5.js','.scripts/lib/vendor/jquery.cj-swipe.js']
    }
    
  });

  // Default task.
  grunt.registerTask('default', 'concat min cssmin');
  // Other tasks
  grunt.registerTask('cssMin', 'cssmin');
  grunt.registerTask('all', 'exportJsp concat min cssmin');
  grunt.registerTask('concatJavascript', 'concat');
  grunt.registerTask('exportJsp', 'exportManifests');
  grunt.registerTask('lintJS', 'lint');
  grunt.registerTask('uploadCss','ftp-deploy');
  grunt.registerTask('runTest','jasmine');
  
};
