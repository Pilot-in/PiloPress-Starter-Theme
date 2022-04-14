/** Third-party modules */
import del from 'del';
import fs from 'fs';
import path from 'path';

/** Config */
import config from './config';

/**
 *  Clean
 *  - Remove assets css folder
 */
export function clean_assets_CSS() {

    /** Force: true because we delete a parent folder */
    return del([config.assets.css], { force: true });
}

/**
 *  Clean
 *  - Remove layouts generated assets
 */
export function clean_layouts_assets(done) {

    const layouts = getFolders(config.layouts.path);
    if (layouts.length === 0)
        return done(); // nothing to do!

    /** For each layout folder, process files in it. */
    const tasks = layouts.map(layout => {
        const layoutDir = path.join(config.layouts.path, layout);

        /** Force: true because we delete a parent folder */
        const deletedPaths = del.sync([
            path.join(layoutDir, '/*.map'),
            path.join(layoutDir, '/*.min.*'),
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

    const layouts = getFolders(config.layouts.path);
    if (layouts.length === 0)
        return done(); // nothing to do!

    /** For each layout folder, process files in it. */
    const tasks = layouts.map(layout => {
        const layoutDir = path.join(config.layouts.path, layout);

        /** Force: true because we delete a parent folder */
        const deletedPaths = del.sync([
            path.join(layoutDir, '/*.css.map'),
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

    const layouts = getFolders(config.layouts.path);
    if (layouts.length === 0)
        return done(); // nothing to do!

    /** For each layout folder, process files in it. */
    const tasks = layouts.map(layout => {
        const layoutDir = path.join(config.layouts.path, layout);

        /** Force: true because we delete a parent folder */
        const deletedPaths = del.sync([
            path.join(layoutDir, '/*.min.js'),
            path.join(layoutDir, '/*.js.map'),
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
export function getFolders(dir) {
    return fs.readdirSync(dir)
        .filter(function (file) {
            return fs.statSync(path.join(dir, file)).isDirectory();
        });
}
