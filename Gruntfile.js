﻿module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: false,
                    yuicompress: false,
                    optimization: 2
                },
                files: {
                    "base.css": "base.less",
                    "grid.css": "grid.less"
                }
            }
        },
        cssmin: {
            development: {
                files: {
                    "base.min.css": "base.css",
                    "grid.min.css": "grid.css",
                    "combined.min.css": ["base.css", "grid.css"]
                }
            }
        },
        watch: {
            files: ["*.less"],
            tasks: ["less", "cssmin"]
        }
    });

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.registerTask("default", ["less", "cssmin"]);
};