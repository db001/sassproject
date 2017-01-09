module.exports = function(grunt) {
  grunt.initConfig({

    watch: {
      sass: {
        files: "app/scss/*.scss",
        tasks: ['sass']
      }
    },

    eslint: {
      options: {
        configFile: 'eslint.json'
      },
      target: ['app/**/*.js']
    },

    sass: {
      dist: {
        files: {
          // destination          // source file
          "app/css/styles.css" : "app/scss/styles.scss"
        }
      }
    },

    browserSync: {
      default_options: {
        bsFiles: {
          src: [
            "app/css/*.css",
            "*.html"
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "./"
          }
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.registerTask('default', ['eslint', 'sass', 'browserSync', 'watch']);

};

// broswerSync localhost:3000
