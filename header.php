<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-title" content="<?php bloginfo( 'name' ); ?> - <?php bloginfo( 'description' ); ?>">
    <meta name="theme-color" content="#F7F7F7">

    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<header>
    <?php $menu_items = wp_get_nav_menu_items( 'Main menu' ); ?>

    <?php if ( $menu_items ): ?>
        <nav>
            <ul class="flex items-center w-full h-16 bg-white shadow">

                <li class="mx-10">
                    <a href="<?php echo home_url() ?>">
                        <img class="h-12" src="<?php echo wp_upload_dir( '2020/04' )['url'] ?>/logo-pilot-in.png" alt="">
                    </a>
                </li>

                <?php foreach ( $menu_items as $menu_item ) : ?>

                    <?php
                    $li_class = '';
                    $a_class  = 'text-gray-500';
                    if ( acf_get_current_url() === $menu_item->url ) {
                        $li_class = 'border-b-2 border-blue-500';
                        $a_class  = 'text-gray-700';
                    }
                    ?>

                    <li class="mr-3 h-full flex items-center <?php echo $li_class; ?>">
                        <a class="py-5 px-4 font-semibold <?php echo $a_class ?>" href="<?php echo $menu_item->url; ?>">
                            <?php echo $menu_item->title; ?>
                        </a>
                    </li>
                <?php endforeach; ?>
            </ul>
        </nav>
    <?php endif; ?>
</header>
<?php wp_body_open(); ?>