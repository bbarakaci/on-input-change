/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    meta: {
        version: '0.1.0'
    },
    banner: '/*! On Input Change - v<%= meta.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '* http://github.com/bbarakaci/on-input-change\n' +
      '* Licensed under the MIT license. ' + '*/\n',
    lint: {
      files: ['Gruntfile.js', 'src/on-input-change.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint qunit'
    },
    concat: {
      dist: {
        src: ['<file_strip_banner:src/on-input-change.js>'],
        dest: 'dist/on-input-change.js'
      }
    },
    min: {
      dist: {
        src: ['<config:concat.dist.dest>'],
        dest: 'dist/on-input-change.min.js'
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    jshint: {
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
        browser: true
      },
      globals: {
        jQuery: true
      }
    }
  });

  // Default task.
  grunt.registerTask('default', 'lint qunit');
  grunt.registerTask('make', 'lint qunit concat min');

};
