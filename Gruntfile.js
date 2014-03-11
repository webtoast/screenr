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
    }

  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task(s).
  grunt.registerTask('default', []);

};
