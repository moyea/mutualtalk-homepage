"use strict";
let gulp = require('gulp');
let notify = require('gulp-notify');
//图片处理相关
let imageMin = require('gulp-imagemin');
let pngCrush = require('imagemin-pngcrush');
// var spritesmith = require('gulp.spritesmith');

gulp.task('min-img', function () {
  return gulp.src('src/images/*')
    .pipe(imageMin({
      optimizationLevel: 5,//优化等级0--7，默认3
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngCrush()]
    }))
    .pipe(gulp.dest('./dist/images/'))
    .pipe(notify({message: 'img task ok'}));
});
