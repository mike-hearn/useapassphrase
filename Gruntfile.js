module.exports = function(grunt) {

  grunt.initConfig({
    inline: {
      dist: {
        src: 'index.html',
        dest: 'dist/index.html'
      }
    },
    assemble: {
      options: {
        marked: {
          breaks: false,
          gfm: true,
          },
      },
      site: {
        src: ['dist/index.html'],
        dest: 'dist/index.html'
      }
    }
  });

  grunt.loadNpmTasks('grunt-inline');
  grunt.loadNpmTasks('assemble');

  grunt.registerTask('default', ['inline', 'assemble']);

};
