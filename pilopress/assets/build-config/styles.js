/** Third-party modules */
import autoprefixer from 'autoprefixer';
import Fiber from 'fibers';
// import sassCompiler from 'sass';
import path from 'path';

/** Build modules */
import { getFolders } from './helpers';
import adminConfig from '../admin-config/postcss.config';
import frontConfig from '../front-config/postcss.config';

/** Gulp modules */
import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';
import concat from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';
// import deporder from 'gulp-deporder';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';

/** Config */
import config from './config';

/**
 *  Styles
 *  - Handle export of Assets SASS / CSS
 */
export function assets_styles() {

    /** Set SASS compiler as Dart Sass (better perfs) */
    // sass.compiler = sassCompiler;

    return gulp
        .src(config.assets.css, { sourcemaps: true })

        // .pipe(deporder())

        /** Allow SASS globbing import */
        // .pipe(sassGlob())

        /** Compile SASS */
        // .pipe(sass({fiber: Fiber}).on('error', sass.logError))

        // .pipe(sourcemaps.init())

        /** Autoprefix CSS */
        .pipe(postcss(frontConfig.plugins))

        // .pipe(sourcemaps.write('.'))

        /** Minify CSS codes */
        .pipe(cleanCSS())

        /** Rename generated CSS */
        .pipe(rename({
            suffix: '.min'
        }))

        /** Export generated CSS */
        .pipe(gulp.dest(config.assets.path, { sourcemaps: '.' }));
}

/**
 *  Styles
 *  - Handle export of Assets SASS / CSS
 */
export function assets_styles_admin() {

    /** Set SASS compiler as Dart Sass (better perfs) */
    // sass.compiler = sassCompiler;

    return gulp
        .src(config.assets.css, { sourcemaps: true })

        // .pipe(deporder())

        /** Allow SASS globbing import */
        // .pipe(sassGlob())

        /** Compile SASS */
        // .pipe(sass({fiber: Fiber}).on('error', sass.logError))

        .pipe(sourcemaps.init())

        /** Autoprefix CSS */
        .pipe(postcss(adminConfig.plugins))

        .pipe(sourcemaps.write('.'))

        /** Minify CSS codes */
        .pipe(cleanCSS())

        /** Rename generated CSS */
        .pipe(rename({
            suffix: '.min'
        }))

        /** Export generated CSS */
        .pipe(gulp.dest(config.assets.path, { sourcemaps: '.' }));
}

/**
 *  Styles
 *  - Put all CSS files in a single file
 */
export function bundle_assets_styles() {
    return gulp
        .src(config.assets.css, { sourcemaps: true })

        /** Minify CSS codes */
        .pipe(cleanCSS())

        /** Put all Javascript codes in a single file */
        .pipe(concat('bundle.min.css'))

        /** Export Javascript bundle code */
        .pipe(gulp.dest(config.assets.path, { sourcemaps: '.' }));
}

/**
 *  Styles
 *  - Handle export of Layouts SASS / CSS
 */
export function layouts_styles(done) {

    /** Set SASS compiler as Dart Sass (better perfs) */
    // sass.compiler = sassCompiler;

    const layouts = getFolders(config.layouts.path);
    if (layouts.length === 0)
        return done(); // nothing to do!

    /** For each layout folder, process files in it. */
    const tasks = layouts.map(layout => {

        const layoutDir = path.join(config.layouts.path, layout);

        return gulp
            .src(path.join(layoutDir, '!(*.min).css'))

            // .pipe(deporder())

            /** Allow SASS globbing import */
            // .pipe(sassGlob())

            /** Compile SASS */
            // .pipe(sass({fiber: Fiber}).on('error', sass.logError))

            /** Autoprefix CSS */
            .pipe(postcss(frontConfig.plugins))

            /** Minify CSS codes */
            .pipe(cleanCSS())

            /** Rename generated CSS */
            .pipe(rename({
                suffix: '.min'
            }))

            /** Export generated CSS */
            .pipe(gulp.dest(layoutDir, { sourcemaps: '.' }));

    });

    done();
    return tasks;
}

/**
 *  Export all tasks as a single task
 */
const compileStyle = gulp.parallel(gulp.series(assets_styles, bundle_assets_styles), layouts_styles);
export default compileStyle;
