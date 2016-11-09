// ヘッダーを設定するmiddlewareを返す関数を定義
var setHeader = function (headers) {
    return function (req, res, next) {
        var key;
        for (key in headers) {
            if (!headers.hasOwnProperty(key)) {
                continue;
            }
            res.setHeader(key, headers[key]);
        }
        next();
    }
}

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
          base:'public',
          keepalive:true,
          hostname:'localhost',
          livereload: true
          // middlewareオプション
          // リクエストにかますmiddlewareを配列で返す
          /*
          middleware: [
            function myMiddleware(req, res, next) {
              res.end('Hello, world!');
            }
          ],
          middleware: function(connect) {
            return [
              function(req, res, next) {
                res.setHeader('Content-Type', 'text/html; charset=Shift-JIS');
              }
            ];
          }
          */
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