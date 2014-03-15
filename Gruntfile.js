module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          port: 9002,
          protocol: 'http',
          hostname: '0.0.0.0',

          keepalive: true,
          open: true
        }
      }
    },

    watch: {
      less: {
        files: ["css/src/main.less"],
        tasks: ["less"]
      }
    },

    less: {
      options: {

      },
      development: {
        files: {
          "./css/main.css": "./css/src/main.less"
        }
      }
    }

  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ["watch"]);

};
