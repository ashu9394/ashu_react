use "srict";

var gulp = require('gulp')
var connect = require('gulp-connect')
var open = require('gulp-open')

// start a local dev server 


gulp.task('connect', () => {
	connect.server({
		root: ['dist'],
		port: appConfig.port,
		base: appConfig.devBaseUrl,
		livereload: true
	})
})

gulp.task('open',['connect'],() => {
	gulp.src
})