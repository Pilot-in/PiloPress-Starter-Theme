<?php
add_action( 'wp_enqueue_scripts', 'enqueue_pilopress_styles' );
function enqueue_pilopress_styles() {
    wp_enqueue_style( 'style-pilopress', get_stylesheet_directory_uri() . '/pilopress/style-pilopress.css', false );
}

add_action( 'admin_enqueue_scripts', 'admin_enqueue_pilopress_styles' );
function admin_enqueue_pilopress_styles() {
    wp_enqueue_style( 'style-pilopress-admin', get_stylesheet_directory_uri() . '/pilopress/style-pilopress-admin.css', false );
}