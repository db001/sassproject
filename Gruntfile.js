module.exports = function(grunt) {
  grunt.initConfig({    

    watch: {
      sass: {
        files: "app/scss/*.scss",
        tasks: ['sass']
      },
      scripts: {
        files: ['app/**/*.js'],
        tasks: ['eslint'],
        options: {
          spawn: false
        },
      },
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

    postcss: {
      options: {
        map: false,
        processors: [
          // require('pixrem')(), //add fallbacks for rem units
          require('autoprefixer')({browsers: 'last 2 versions'}), // add prefixes from specific browsers
          // require('cssnano')() // minify result
        ]
      },
      dist: {
        src: 'app/css/*.css',
        dest: 'app/css/prefixed.css'
      }
    },

    browserSync: {
      default_options: {
        bsFiles: {
          src: [
            "app/css/*.css",
            "*.html",
            "app/scripts/*.js"
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

  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.registerTask('default', ['eslint', 'sass', 'postcss', 'browserSync', 'watch']);

};

// broswerSync localhost:3000
