/** Gulp modules */
import gulp from 'gulp';

/** Build modules */
import { clean_assets_CSS, clean_layouts_assets } from './build-config/helpers.js';
import scripts from './build-config/scripts.js';
import styles from './build-config/styles.js';
import server from './build-config/server.js';

const compile = gulp.series(clean_assets_CSS, clean_layouts_assets, gulp.parallel(styles, scripts));
const main = gulp.series(compile, server);

/** Gulp Tasks */
gulp.task('default', main); // "gulp"
gulp.task('build-admin', main); // "gulp build-front"
gulp.task('build-front', main); // "gulp build-admin"
