<?php

/**
 *  Theme standard - Retro-compatibility > 5.2
 */
if ( !function_exists( 'wp_body_open' ) ) {
    function wp_body_open() {
        do_action( 'wp_body_open' );
    }
}

/**
 *  Includes
 */
require_once get_stylesheet_directory() . '/includes/class-project.php';
