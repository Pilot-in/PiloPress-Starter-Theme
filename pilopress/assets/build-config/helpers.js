/** Third-party modules */
import del from 'del';
import fs from 'fs';
import path from 'path';

/** Config */
import config from '../pitconfig.json';

/**
 *  Clean
 *  - Remove assets generated folder
 */
export function clean_assets() {

    /** Force: true because we delete a parent folder */
    return del([config.assets.dist.dir], { force: true });
}

/**
 *  Clean
 *  - Remove assets css folder
 */
export function clean_assets_CSS() {

    /** Force: true because we delete a parent folder */
    return del([config.assets.dist.css], { force: true });
}

/**
 *  Clean
 *  - Remove assets js folder
 */
export function clean_assets_JS() {

    /** Force: true because we delete a parent folder */
    return del([config.assets.dist.js], { force: true });
}

/**
 *  Clean
 *  - Remove layouts generated assets
 */
export function clean_layouts_assets(done) {

    const layouts = get_folders(config.layouts.dir);
    if (layouts.length === 0)
        return done(); // nothing to do!

    /** For each layout folder, process files in it. */
    const tasks = layouts.map(layout => {
        const layout_dir = path.join(config.layouts.dir, layout);

        /** Force: true because we delete a parent folder */
        const deletedPaths = del.sync([
            path.join(layout_dir, '/*.css'),
            path.join(layout_dir, '/*.map'),
            path.join(layout_dir, '/*.min.*'),
        ], { force: true });

        /** Console logs deleted files */
        // console.log(deletedPaths.join('\n'));
        return;
    });

    done();
    return tasks;
}

/**
 *  Clean
 *  - Remove layouts generated assets
 */
export function clean_layouts_assets_CSS(done) {

    const layouts = get_folders(config.layouts.dir);
    if (layouts.length === 0)
        return done(); // nothing to do!

    /** For each layout folder, process files in it. */
    const tasks = layouts.map(layout => {
        const layout_dir = path.join(config.layouts.dir, layout);

        /** Force: true because we delete a parent folder */
        const deletedPaths = del.sync([
            path.join(layout_dir, '/*.css'),
            path.join(layout_dir, '/*.css.map'),
        ], { force: true });

        /** Console logs deleted files */
        // console.log(deletedPaths.join('\n'));
        return;
    });

    done();
    return tasks;
}

/**
 *  Clean
 *  - Remove layouts generated assets
 */
export function clean_layouts_assets_JS(done) {

    const layouts = get_folders(config.layouts.dir);
    if (layouts.length === 0)
        return done(); // nothing to do!

    /** For each layout folder, process files in it. */
    const tasks = layouts.map(layout => {
        const layout_dir = path.join(config.layouts.dir, layout);

        /** Force: true because we delete a parent folder */
        const deletedPaths = del.sync([
            path.join(layout_dir, '/*.min.js'),
            path.join(layout_dir, '/*.js.map'),
        ], { force: true });

        /** Console logs deleted files */
        // console.log(deletedPaths.join('\n'));
        return;
    });

    done();
    return tasks;
}

/**
 *  Folders
 *  - Get folders from path
 */
export function get_folders(dir) {

    return fs.readdirSync(dir)
        .filter(function (file) {
            return fs.statSync(path.join(dir, file)).isDirectory();
        });
}
