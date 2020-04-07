<?php
/**
 * Enqueue front style
 */
add_action( 'wp_enqueue_scripts', 'enqueue_pilopress_styles' );
function enqueue_pilopress_styles() {
    wp_enqueue_style(
        'style-pilopress',
        get_stylesheet_directory_uri() . '/pilopress/tailwind/tailwind.min.css',
        false
    );
}

/**
 * Enqueue admin style
 */
add_action( 'admin_enqueue_scripts', 'admin_enqueue_pilopress_styles' );
function admin_enqueue_pilopress_styles() {
    wp_enqueue_style(
        'style-pilopress-admin',
        get_stylesheet_directory_uri() . '/pilopress/tailwind/tailwind-admin.min.css',
        false
    );
}

/**
 * Enable single meta save for options pages
 */
//add_action( 'acf/init', 'pip_single_meta' );
function pip_single_meta() {
    acf_update_setting( 'pip/options/single_meta', true );
}

