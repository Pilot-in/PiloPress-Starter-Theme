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
 * Enable single meta save for options pages
 */
//add_action( 'acf/init', 'pip_single_meta' );
function pip_single_meta() {
    acf_update_setting( 'pip/options/single_meta', true );
}
