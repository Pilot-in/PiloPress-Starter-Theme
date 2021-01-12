<?php

if ( !class_exists( 'Project' ) ) {

    /**
     * Class Project
     */
    class Project {

        /**
         * Project constructor.
         */
        public function __construct() {
            // WP hooks
            add_action( 'init', array( $this, 'init_hook' ) );
            add_action( 'wp_enqueue_scripts', array( $this, 'enqueue' ) );
            add_action( 'admin_enqueue_scripts', array( $this, 'enqueue' ) );

            // Pilo'Press hooks
            add_filter( 'pip/tailwind/css/after_components', array( $this, 'add_custom_css' ) );
        }

        /**
         * Init hook.
         */
        public function init_hook() {
            // Your code here
        }

        /**
         * Enqueue styles and scripts
         */
        public function enqueue() {
            // AlpineJS
            // wp_enqueue_script( 'alpine-js', '//cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.0/dist/alpine.min.js', array( 'jquery' ), '2.8.0', true );
        }

        /**
         * Add custom CSS for Tailwind compilation
         *
         * @return string
         */
        public function add_custom_css() {
            return file_get_contents( get_stylesheet_directory() . '/style.css' );
        }

    }

    /**
     * Instantiate class
     * Use "acf_get_instance( 'Project' )" to get class and use functions inside it
     *
     * @see acf_new_instance()
     * @see acf_get_instance()
     */
    if ( function_exists( 'acf_new_instance' ) ) {
        acf_new_instance( 'Project' );
    }
}
