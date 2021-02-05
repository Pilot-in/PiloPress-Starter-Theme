/** Third-party modules */
import path from 'path';

/** Gulp modules */
import gulp from 'gulp';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';

/** Webpack version (test) */
// import named from 'vinyl-named';
// import webpack from 'webpack-stream';

/** Build modules */
import { get_folders } from './helpers.js';

/** Config */
import config from './config';

/**
 *  Scripts
 *  - Handle export of Assets JS
 */
export function assets_scripts() {

    /**
     *  Gulp version
     */
    return gulp
        .src(config.assets.src.js, { sourcemaps: true })

        /** Compile Babel code (ES6+) */
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))

        /** Compress Javascript code */
        .pipe(uglify())

        /** Rename generated Javascript minified code */
        .pipe(rename({
            suffix: '.min'
        }))

        /** Export Javascript compiled / minified code */
        .pipe(gulp.dest(config.assets.dist.js, { sourcemaps: '.' }));

    /**
     *  Webpack version (test)
     */
    // return gulp
    //     .src(config.assets.src.js)

    //     .pipe(named())
    //     .pipe(webpack({
    //         module: {
    //             rules: [
    //                 {
    //                     test: /\.js$/,
    //                     use: {
    //                         loader: 'babel-loader',
    //                         options: {
    //                             presets: ['@babel/preset-env']
    //                         }
    //                     }
    //                 }
    //             ]
    //         },
    //         mode: 'production',
    //         devtool: 'source-map',
    //         output: {
    //             filename: '[name].min.js'
    //         },
    //         externals: {
    //             jquery: 'jQuery'
    //         },
    //     }))

    //     /** Export Javascript compiled / minified code */
    //     .pipe(gulp.dest(config.assets.dist.js));

}

/**
 *  Scripts
 *  - Handle export of Assets JS lib / vendor
 */
export function assets_scripts_lib() {
    return gulp
        .src(config.assets.src.jsLib)
        .pipe(gulp.dest(config.assets.dist.jsLib));
}

/**
 *  Scripts
 *  - Put all Javascript codes in a single file
 */
export function bundle_assets_scripts() {
    return gulp
        .src(config.assets.dist.jsMin, { sourcemaps: true })

        /** Put all Javascript codes in a single file */
        .pipe(concat('bundle.min.js'))

        /** Compress Javascript code */
        .pipe(uglify())

        /** Export Javascript bundle code */
        .pipe(gulp.dest(config.assets.dist.js, { sourcemaps: '.' }));
}

/**
 *  Scripts
 *  - Handle export of Layouts JS
 */
export function layouts_scripts(done) {

    const layouts = get_folders(config.layouts.dir);
    if (layouts.length === 0)
        return done(); // nothing to do!

    /** For each layout layout, process files in it. */
    const tasks = layouts.map(layout => {
        const layout_dir = path.join(config.layouts.dir, layout);
        return gulp
            .src(path.join(layout_dir, '/!(*.min).js'), { sourcemaps: true })

            /** Compile Babel code (ES6+) */
            .pipe(babel({
                presets: ['@babel/preset-env']
            }))

            /** Compress Javascript code */
            .pipe(uglify())

            /** Rename generated Javascript minified code */
            .pipe(rename({
                suffix: '.min'
            }))

            /** Export Javascript compiled / minified code */
            .pipe(gulp.dest(layout_dir, { sourcemaps: '.' }));

    });

    done();
    return tasks;
}

/**
 *  Export all tasks as a single task
 */
const compileScripts = gulp.parallel(gulp.series(assets_scripts, assets_scripts_lib, bundle_assets_scripts), layouts_scripts);
export default compileScripts;
