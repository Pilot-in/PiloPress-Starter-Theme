<?php
get_header();
if ( function_exists( 'get_pip_header' ) ) {
    get_pip_header();
}
?>

    <section>
        <h1>404 page</h1>
    </section>

<?php
if ( function_exists( 'get_pip_footer' ) ) {
    get_pip_footer();
}
get_footer();
