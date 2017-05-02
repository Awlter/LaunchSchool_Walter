module.exports = function(grunt) {

  // Add your plugin initializations and options in the initConfig call
  grunt.initConfig({

    // Attach your plugin's options. For example, the grunt-bower-concat
    // plugin expects its options to be added to the property "bower_concat"


    // bower_concat: {
    //   all: {
    //     dest: 'public/javascripts/all.js',
    //     cssDest: 'public/stylesheets/bower.css'
    //   }
    // }

    jasmine: {
      src: 'jasmine_standalone/src/*.js',
      options: {
        specs: 'jasmine_standalone/spec/*.js'
      }
    }


  });

  // Load any Grunt plugins by name here
  // grunt.loadNpmTasks("grunt-bower-concat");
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Register task names here. These are run by calling the task by name when
  // using the Grunt CLI. The "default" task is run when running the Grunt CLI
  // without a task name.
  grunt.registerTask("default", ["jasmine"]);
};