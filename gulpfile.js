const {src, dest, watch } = require('gulp'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  browserify = require('browserify'),
  source = require("vinyl-source-stream"),
  uglify = require('gulp-uglify'),
  buffer = require("vinyl-buffer"),
  babel = require('gulp-babel'),
  concat = require('gulp-concat');


const styleSRC = './themes/adchallenge/src/sass/main.scss',
      styleDIST = './themes/adchallenge/css',
      styleWatch = './themes/adchallenge/src/sass/**/*.scss';

const jsSRC = 'main.js',
      jsFOLDER = './themes/adchallenge/src/js/';
      jsDIST = '././themes/adchallenge/js/',
      jsWatch = './themes/adchallenge/src/js/**/*.js';


function styles() {
  return src(styleSRC)
    .pipe( sass({
      errorLogToConsole: true,
      outputStyle: 'compressed'
    }) )
    .on( 'error', console.error.bind( console ) )
    .pipe( autoprefixer({
      cascade: false
    }) )
    .pipe( rename( {
      basename: "style"
    }))
    .pipe( dest(styleDIST) );
}

function scripts() {
  return (
    browserify({
      entries: jsFOLDER + jsSRC
    })
      .transform("babelify", {presets: ["@babel/preset-env"]})
      .bundle()
      .pipe(source(jsSRC))
      .pipe( rename( {
        basename: "scripts"
      }))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(dest(jsDIST))
  )

}

function liveCompile() {
  watch(styleWatch, styles);
  watch(jsWatch, scripts);
}


exports.scripts = scripts;
exports.styles = styles;
exports.default = liveCompile;
