/** Third-party modules */
import autoPrefixer from 'autoprefixer';
import Fiber from 'fibers';
import sassCompiler from 'sass';
import path from 'path';

/** Build modules */
import { get_folders } from './helpers.js';

/** Gulp modules */
import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';
import concat from 'gulp-concat';
import deporder from 'gulp-deporder';
import postCss from 'gulp-postcss';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';

/** Config */
import config from './config';

/**
 *  Styles
 *  - Handle export of Assets SASS / CSS
 */
export function assets_styles() {

    /** Set SASS compiler as Dart Sass (better perfs) */
    sass.compiler = sassCompiler;

    return gulp
        .src(config.assets.src.scss, { sourcemaps: true })

        .pipe(deporder())

        /** Allow SASS globbing import */
        .pipe(sassGlob())

        /** Compile SASS */
        .pipe(sass({fiber: Fiber}).on('error', sass.logError))

        /** Autoprefix CSS */
        .pipe(postCss([autoPrefixer()]))

        /** Minify CSS codes */
        .pipe(cleanCSS())

        /** Rename generated CSS */
        .pipe(rename({
            suffix: '.min'
        }))

        /** Export generated CSS */
        .pipe(gulp.dest(config.assets.dist.css, { sourcemaps: '.' }));
}

/**
 *  Styles
 *  - Put all CSS files in a single file
 */
export function bundle_assets_styles() {
    return gulp
        .src(config.assets.dist.cssMin, { sourcemaps: true })

        /** Minify CSS codes */
        .pipe(cleanCSS())

        /** Put all Javascript codes in a single file */
        .pipe(concat('bundle.min.css'))

        /** Export Javascript bundle code */
        .pipe(gulp.dest(config.assets.dist.css, { sourcemaps: '.' }));
}

/**
 *  Styles
 *  - Handle export of Layouts SASS / CSS
 */
export function layouts_styles(done) {

    /** Set SASS compiler as Dart Sass (better perfs) */
    sass.compiler = sassCompiler;

    const layouts = get_folders(config.layouts.dir);
    if (layouts.length === 0)
        return done(); // nothing to do!

    /** For each layout folder, process files in it. */
    const tasks = layouts.map(layout => {
        const layout_dir = path.join(config.layouts.dir, layout);
        return gulp
            .src(path.join(layout_dir, '*.scss'), { sourcemaps: true })

            .pipe(deporder())

            /** Allow SASS globbing import */
            .pipe(sassGlob())

            /** Compile SASS */
            .pipe(sass({fiber: Fiber}).on('error', sass.logError))

            /** Autoprefix CSS */
            .pipe(postCss([autoPrefixer()]))

            /** Minify CSS codes */
            .pipe(cleanCSS())

            /** Rename generated CSS */
            .pipe(rename({
                suffix: '.min'
            }))

            /** Export generated CSS */
            .pipe(gulp.dest(layout_dir, { sourcemaps: '.' }));

    });

    done();
    return tasks;
}

/**
 *  Export all tasks as a single task
 */
const compileStyle = gulp.parallel(gulp.series(assets_styles, bundle_assets_styles), layouts_styles);
export default compileStyle;
