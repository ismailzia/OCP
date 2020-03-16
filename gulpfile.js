/* eslint-disable */
var gulp = require("gulp");
var del = require("del");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var browserify = require("browserify");
var babel = require("babelify");
var postcss = require("gulp-postcss");
var postcssImport = require("postcss-import");
var tailwindcss = require("tailwindcss");
var postcssPresetEnv = require("postcss-preset-env");
var postcssFlexbugsFixes = require("postcss-flexbugs-fixes");

var fileinclude = require("gulp-file-include");

var consolidate = require("gulp-consolidate");
var iconfont = require("gulp-iconfont");
var fontName = "font-icon";

var paths = {
	js: {
		src: "./src/scriptes.js",
		dist: "./dist/js"
	},
	css: {
		src: "./src/styles/styles.scss",
		dist: "./dist/css"
	},
	font: {
		src: "./src/assets",
		dist: "./dist/fonts"
	},
	html: {
		src: "./src/pages",
		dist: "./dist/pages"
	},
	src: "./src"
};

gulp.task("js", function(done) {
	browserify(paths.js.src)
		.transform(babel)
		.bundle()
		.on("error", function(err) {
			console.error(err);
			this.emit("end");
		})
		.pipe(source("bundle.js"))
		.pipe(buffer())
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(sourcemaps.write("./"))
		.pipe(gulp.dest(paths.js.dist))
		.on("end", done);
});

gulp.task("webfont", function() {
	return gulp
		.src(paths.font.src + "/icons/*.svg")
		.pipe(
			iconfont({
				fontName: fontName,
				formats: ["ttf", "eot", "woff"],
				appendCodepoints: true,
				prependUnicode: false,
				normalize: true,
				fontHeight: 1001,
				centerHorizontally: true
			})
		)
		.on("glyphs", function(glyphs, options) {
			gulp
				.src(paths.font.src + "/icons/template/font-icon.scss")
				.pipe(
					consolidate("underscore", {
						glyphs: glyphs,
						fontName: options.fontName,
						fontDate: new Date().getTime(),
						fontPath: "../fonts/",
						cssClass: "icon"
					})
				)
				.pipe(gulp.dest(paths.font.src + "/icons/"));
			gulp
				.src(paths.font.src + "/icons/template/index.html")
				.pipe(
					consolidate("underscore", {
						glyphs: glyphs,
						fontName: options.fontName
					})
				)
				.pipe(gulp.dest(paths.font.src + "/icons/"));
		})
		.pipe(gulp.dest(paths.font.dist));
});

gulp.task("fonts", function() {
	return gulp
		.src(paths.font.src + "/fonts/**/*.*")
		.pipe(gulp.dest(paths.font.dist));
});

gulp.task("clean", function() {
	return del([paths.js.dist, paths.css.dist], { force: true });
});

gulp.task("css", function(done) {
	var postcssProcessors = [
		postcssImport,
		tailwindcss("./src/tailwind.js"),
		postcssPresetEnv({
			autoprefixer: { flexbox: "no-2009" }
		}),
		postcssFlexbugsFixes
	];

	gulp
		.src(paths.css.src)
		.pipe(
			sass({
				includePaths: "./node_modules",
				indentWidth: 4,
				outputStyle: "expanded"
			})
		)
		.pipe(postcss(postcssProcessors))
		.pipe(gulp.dest(paths.css.dist))
		.on("end", done);
});

gulp.task("html", function() {
	gulp
		.src([paths.html.src + "/home.html"])
		.pipe(
			fileinclude({
				prefix: "@@",
				basepath: "@file"
			})
		)
		.pipe(gulp.dest(paths.html.dist));
});

gulp.task("default", ["css", "js", "html"], function() {
	gulp.watch(
		[paths.src + "/styles/**/*.scss", paths.src + "/components/**/*.scss"],
		["css"]
	);
	gulp.watch(["./tailwind.js", paths.src + "/components/**/*.js"], ["js"]);
	gulp.watch(
		[paths.html.src + "/*.html", paths.src + "/components/**/*.html"],
		["html"]
	);
});
