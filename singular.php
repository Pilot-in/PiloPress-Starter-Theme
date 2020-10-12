<?php
get_header();

// If post is protected, show post password form
if ( post_password_required() ) {
    echo get_the_password_form();

// else show post content
} else {

    if ( function_exists( 'the_pip_content' ) ) {
        the_pip_content();
    }

}

get_footer();
