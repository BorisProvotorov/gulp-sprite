const gulp = require('gulp');
const spritesmith = require('gulp.spritesmith');

function onError(error) {
    console.log(error);
    this.emit('end');
}

gulp.task('sprite', function () {
    var spriteData = gulp.src('source_img/*.png')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            imgPath: 'sprite.png',
            cssName: 'sprite.css',
            cssTemplate: 'sprite.mustache'
        }));

    var imgStream = spriteData.img
        .pipe(gulp.dest('.'));

    return cssStream = spriteData.css
        .pipe(gulp.dest('.'));
});
