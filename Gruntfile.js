module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

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
    },

    browserSync: {
      development: {
        options: {
          server: { 
            baseDir: "./"
          },
          ports: {
            min: 3000,
            max: 3002
          },
          watchTask: true
        },
        files: {
          src: "css/main.css"
        }
      }
    },

    bowercopy: {
      options: {
        // Task-specific options go here
      },
      js: {
        options: {
          destPrefix: 'js/vendor'
        },
        files: {
          'verge.js': 'verge/src/verge.js',
          'jquery.ba-throttle-debounce.js': 'jquery-throttle-debounce/jquery.ba-throttle-debounce.js'
        }
        // Target-specific file lists and/or options go here
      }
    }

  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-bowercopy');

  // Default task(s).
  grunt.registerTask('default', ["watch"]);

  grunt.registerTask('dev', ["browserSync", "watch"])

};
