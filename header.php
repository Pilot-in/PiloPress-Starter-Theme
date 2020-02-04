<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <?php
    do_action('pit/theme/core/head/start'); ?>

	<meta charset="<?php bloginfo('charset'); ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-title" content="<?php bloginfo('name'); ?> - <?php bloginfo('description'); ?>">
    <meta name="theme-color" content="#F7F7F7">

    <?php
    wp_head();

    do_action('pit/theme/core/head/end'); ?>
</head>
<body <?php body_class(); ?>>

    <?php
    do_action('pit/theme/core/body/start'); ?>

    <header class="_pit-header header-fixed js-hide-on-scroll">

        <?php
        do_action('pit/theme/core/header/start');

        do_action('pit/theme/core/header/end'); ?>

    </header>
<?php
