/*jslint node: true */
module.exports = function (grunt) {
    'use strict';
    grunt.initConfig(
        {
            jslint: {
                scripts: {
                    src: ['wayback.js']
                },
                Gruntfile: {
                    src: ['Gruntfile.js']
                }
            }
        }
    );

    grunt.loadNpmTasks('grunt-jslint');

    grunt.registerTask('lint', ['jslint']);
};
