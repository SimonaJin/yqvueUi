// 打包样式
const gulpSass = require('gulp-sass');
const dartSass = require('sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const path = require('path');

const { series, src, dest } = require('gulp');

// sass编译处理
function compile() {
	const sass = gulpSass(dartSass);
	return src(path.resolve(__dirname, './src/style/*.scss'))
					.pipe(sass.sync())
					.pipe(autoprefixer())
					.pipe(cleanCss())
					.pipe(dest('./lib/css'));
}
// font 拷贝
function copyfont() {
	return src(path.resolve(__dirname, 'src/fonts/*'))
					.pipe(cleanCss())
					.pipe(dest('./lib/fonts'));
}
// 把所有文件包括到外面的lib目录
function copyfullStyle() {
	return src(path.resolve(__dirname, 'lib/**'))
					.pipe(dest(path.resolve(__dirname, '../../lib/theme-chalk')));
}
exports.build = series(
	compile,
	copyfont,
	copyfullStyle
);
