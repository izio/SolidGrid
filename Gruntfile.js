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
                    "css/base.css": "less/base.less",
                    "css/grid.css": "less/grid.less"
                }
            }
        },
        cssmin: {
            development: {
                files: {
                    "css/base.min.css": "css/base.css",
                    "css/grid.min.css": "css/grid.css",
                    "css/combined.min.css": ["css/base.css", "css/grid.css"]
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