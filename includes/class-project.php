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
        }

        /**
         * Init hook.
         */
        public function init_hook() {
            // Your code here
        }

    }

    /**
     * Instantiate class
     *
     * Use "acf_get_instance( 'Project' )" to get class and use functions inside it
     *
     * @see acf_new_instance()
     * @see acf_get_instance()
     */
    acf_new_instance( 'Project' );

}
