# grunt-header [![Build Status](https://travis-ci.org/sindresorhus/grunt-header.svg?branch=master)](https://travis-ci.org/sindresorhus/grunt-header)

> Add a header to files


## Install

```
$ npm install --save-dev grunt-header
```


## Usage

```js
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
	info: 'header text',
	header: {
		dist: {
			options: {
				text: '<%= info %>'
			},
			files: {
				'dist/main.js': 'src/main.js'
			}
		}
	}
});

grunt.registerTask('default', ['header']);
```


## Options

### text

Type: `string`

Text to be prepended to files.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
