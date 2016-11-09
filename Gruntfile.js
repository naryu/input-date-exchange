
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
		watch: {
        html: {
            files: ['**/**/*.html'],
            tasks: [''],
		        options: {
		            livereload: true
		        }
        }
    },
    // grunt-contrib-connectの設定(Webサーバの設定)
    connect: {
      server: {
        options:{
          port:8000,
          base:'docs',
          keepalive:true,
          hostname:'localhost',
          livereload: true
        }
      }
    }
  });

  // Load tasks(grunt実行時に読み込むプラグイン)
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks("grunt-contrib-watch");

  // Default tasks(grunt実行時に実行するタスク)
  grunt.registerTask('default', ['connect','watch']);
};
