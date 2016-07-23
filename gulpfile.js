const gulp = require('gulp');
const spritesmith = require('gulp.spritesmith');

function onError(error) {
    console.log(error);
    this.emit('end');
}

gulp.task('sprite', function () {
    var spriteData = gulp.src('source_img/*.png') // Source images
        .pipe(spritesmith({
            imgName: 'sprite.png', // Name of the final sprite
            imgPath: 'sprite.png', // Path to the final sprite
            cssName: 'sprite.css', // Name of the CSS file that will be generated
            cssTemplate: 'sprite.mustache' // Path to the mustache template (used to build the CSS file)
        }));

    var imgStream = spriteData.img
        .pipe(gulp.dest('.')); // Path to the final sprite

    return cssStream = spriteData.css
        .pipe(gulp.dest('.')); // Path to the generated CSS file
});
