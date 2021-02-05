/** Gulp modules */
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import newer from 'gulp-newer';

/** Config */
import config from '../pitconfig.json';

/**
 *  Images
 *  - Handle images
 */
function compress_images() {
    return gulp
        .src(config.assets.src.img)

        /** Check only "newer" images files */
        .pipe(newer(config.assets.dist.img))

        /** Compress images (gif, jpg, png, svg) using "imagemin" lib */
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ], {
            verbose: true
        }))

        /** Export compressed images */
        .pipe(gulp.dest(config.assets.dist.img));
}

export default compress_images;
