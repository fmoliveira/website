var gutil = require('gulp-util'),
	through = require('through2'),
	marked = require('marked'),
	fs = require('fs'),
	handlebars = require('handlebars');

module.exports = function (options) {
	return through.obj(function (file, encoding, callback) {
		if (file.isNull()) {
			callback(null, file);
			return;
		}

		if (file.isStream()) {
			callback(new gutil.PluginError('gulp-marksite', 'Streaming not supported'));
			return;
		}

		if (!options || !options.layout) {
			callback(new gutil.PluginError('gulp-marksite', 'No layout has been supplied'));
		}

		marked(file.contents.toString(), options, function (err, data) {
			if (err) {
				callback(new gutil.PluginError('gulp-marksite', err, { fileName: file.path }));
			}

			fs.readFile(options.layout, 'utf8', function (err, source) {
				if (err) {
					callback(new gutil.PluginError('gulp-marksite', 'Failure reading layout file'));
					return;
				}

				var template = handlebars.compile(source);
				var context = {
					title: 'Gulp marksite here!',
					body: data
				};
				var html = template(context);

				file.contents = new Buffer(html);
				file.path = gutil.replaceExtension(file.path, '.html');

				callback(null, file);
			});
		});
	});
}
