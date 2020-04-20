<?php

/**
 *  Theme standard - Retrocompatibility > 5.2
 */
if ( !function_exists('wp_body_open') ) {
    function wp_body_open() {
        do_action( 'wp_body_open' );
    }
}

/**
 * Enqueue front style
 */
add_action( 'wp_enqueue_scripts', 'enqueue_pilopress_styles' );
function enqueue_pilopress_styles() {
    pip_enqueue();
}

/**
 * Enqueue admin style
 */
add_action( 'admin_enqueue_scripts', 'admin_enqueue_pilopress_styles' );
function admin_enqueue_pilopress_styles() {
    pip_enqueue_admin();
}

/**
 * Enable single meta save for options pages
 */
//add_action( 'acf/init', 'pip_single_meta' );
function pip_single_meta() {
    acf_update_setting( 'pip/options/single_meta', true );
}
