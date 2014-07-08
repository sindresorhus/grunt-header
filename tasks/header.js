'use strict';
module.exports = function (grunt) {
	grunt.registerMultiTask('header', 'Add a header', function () {
		var options = this.options({
			text: ''
		});

		this.files.forEach(function (el) {
			grunt.file.write(el.dest, options.text + grunt.file.read(el.src[0]));
		});
	});
};
