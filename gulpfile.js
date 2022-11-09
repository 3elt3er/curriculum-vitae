const {src, dest} = require('gulp')
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return src('./src/sass/**.sass')
      .pipe(sass())
      .pipe(dest('./build/styles'))
}

exports.buildStyles = buildStyles;