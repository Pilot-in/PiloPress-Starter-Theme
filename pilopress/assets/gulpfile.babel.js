/** Gulp modules */
import gulp from 'gulp';

/** Build modules */
import { clean_assets, clean_layouts_assets, clean_assets_CSS, clean_assets_JS } from './build-config/helpers.js';
import images from './build-config/images.js';
import fonts from './build-config/fonts.js';
import scripts from './build-config/scripts.js';
import styles from './build-config/styles.js';
import server from './build-config/server.js';

const compile = gulp.series(clean_assets_CSS, clean_assets_JS, clean_layouts_assets, gulp.parallel(styles, scripts, fonts, images));
const main = gulp.series(compile, server);

/** Gulp Tasks */
gulp.task('default', main); // "gulp"
