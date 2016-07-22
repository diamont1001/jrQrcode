/**
 * Created by Administrator on 2015/2/10.
 */

module.exports = function (grunt) {
    // 项目配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
                preserveComments: 'some' //保留注释 false==删除所有注释， all==保留所有注释 some==保留 (/*! /)这种多行注释
            },
            "my_target": {
                "files": {
                    'release/jr-qrcode.js': ['lib/qrcode.js', 'lib/jr-qrcode.js']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // 默认任务
    grunt.registerTask('default', ['uglify']);
}
