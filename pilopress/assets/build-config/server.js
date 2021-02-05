/** Third-party modules */
import browserSync from 'browser-sync';

/** Gulp modules */
import gulp from 'gulp';

/** Build modules */
import { clean_assets_CSS, clean_assets_JS, clean_layouts_assets_CSS, clean_layouts_assets_JS } from './helpers.js';
import scripts from './scripts.js';
import styles from './styles.js';

/** Config */
import config from './config';

export const server = browserSync.create();

/**
 *  Server
 *  - Init Browser Sync & handle watch / live reload of files
 */
export default function init_BS() {

    /** Init Browser Sync server */
    server.init({
        notify: false,
        proxy: config.app.url,
        host: config.app.url,

        /** Disable "clicks, scroll, submits" by default on others devices */
        ghostMode: false,

        /** Open "localhost" in browser when ready */
        open: 'local',

        /** Reload server when updating php, sass, js files */
        files: [
            config.php.src,
        ],

        /** Reload on those specifics events */
        watchEvents: ['change', 'add', 'addDir', 'unlink', 'unlinkDir']
    });

    /** Watch those files and launch tasks if they change */
    gulp.watch(config.assets.src.js, gulp.series(clean_assets_JS, scripts, reload_BS));
    gulp.watch(config.assets.src.scss, gulp.series(clean_assets_CSS, styles, reload_BS));
    gulp.watch(config.layouts.src.scss, gulp.series(clean_layouts_assets_CSS, styles, reload_BS));
    gulp.watch(config.layouts.src.js, gulp.series(clean_layouts_assets_JS, scripts, reload_BS));
}

/**
 *  Server
 *  - Reload Browser Sync
 */
export function reload_BS(cb) {
    server.reload();
    cb();
}
