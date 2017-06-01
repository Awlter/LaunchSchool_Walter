module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'public/javascripts/vender/all.js': ['public/javascripts/vender/all.js'],
        },
      },
    },
    bower_concat: {
      all: {
        dest: 'public/javascripts/vender/all.js',
        dependencies: {
          'underscore': 'jquery',
          'backbone': 'underscore',
        },
      },
    },
    handlebars: {
      all: {
        files: {
          "public/javascripts/handlebar_templates.js": ["handlebars/**/*.hbs"],
        },
        options: {
          processContent: removeWhitespace,
          processName: extractFilename
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-contrib-handlebars');

  grunt.registerTask('default', ['bower_concat', 'uglify']);
};

function removeWhitespace(content) {
  return content.replace(/ {2,}/mg, '').replace(/\r|\n/mg, '');
}

function extractFilename(path) {
  return path.match(/\/(.+)\.hbs$/).pop()
}