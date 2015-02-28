module.exports = function (grunt) {
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
        }
    });

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.registerTask("default", ["less", "cssmin"]);
};