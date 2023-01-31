const { src, dest, parallel, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

var sourcemaps = require('gulp-sourcemaps');
var minCss = require('gulp-clean-css');
var mode = require('gulp-mode')();





function style() {
    return src('./src/style/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(mode.production(minCss()))
        .pipe(mode.development(sourcemaps.write()))
        .pipe(dest('./dist/'))
}

function html() {
    return src('./src/**/*.html').pipe(dest('./dist/'))
}

function img () {
    return src('./src/**/*.jpg.png.svg').pipe(dest('./dist/'))
}

function watchAll() {
    watch('./src/style/**/*.scss', style);
    watch('./src/**/*.html', html);
}

// 1 Зробити функцю для картинок
// 2 Зробити функцю для Js файлів
// 3 Зробити функцію очистки папки dist

exports.dev = parallel(html, style, watchAll)
exports.build = parallel(html, style)