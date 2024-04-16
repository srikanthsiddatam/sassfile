const { src,dest,watch,series}=require("gulp")
const sass=require('gulp-sass')(require('sass'))

function buildStyles(){
    return src('index1.scss')
    .pipe(sass())
    .pipe(dest('css'))
}


function watchTask(){
    watch(['index1.scss'],buildStyles)
}

exports.default=series(bulidStyles,watchTask)