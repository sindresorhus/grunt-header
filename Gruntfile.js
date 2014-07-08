'use strict';
module.exports = function (grunt) {
	grunt.initConfig({
		fixture: 'bar',
		header: {
			test: {
				options: {
					text: '<%= fixture %>'
				},
				files: {
					'test/tmp/fixture': 'test/fixture'
				}
			}
		},
		clean: {
			test: ['test/tmp/**']
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('default', ['clean', 'header']);
};
