<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package black
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
<link rel="icon" href="<?php echo get_template_directory_uri();?>/images/favicon.ico" type="image/x-icon" />
    <script src='/wp-content/themes/black/scripts/map.js?ver=1.0.0' id='black-map-js'></script>
    <?php wp_head(); ?>
</head>

<body>
<header class="header">
    <div class="container flex-row-between">
        <a href="/"> <img class="logo" src="<?php echo get_template_directory_uri(); ?>/images/logo.svg" alt="logo"></a>
        <nav class="flex-row mobile-menu">
            <?php
            wp_nav_menu([
                'theme_location' => '',
                'menu' => 'menu-1',
                'container' => 'ul',
                'container_class' => '',
                'container_id' => '',
                'menu_class' => 'flex-row',
                'menu_id' => '',
                'echo' => true,
                'fallback_cb' => 'wp_page_menu',
                'before' => '',
                'after' => '',
                'link_before' => '<span data-text="$">',
                'link_after' => '</span>',
                'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                'depth' => 0,
                'walker' => '',
                'list_item_class' => 'nav-item',
                'link_class' => 'nav-link m-2 menu-item nav-active'
            ]);
            ?>
<!--            <p class="flex-row col"><span class="padding language-switcher active-switcher">EN</span><span-->
<!--                        class=" language-switcher">JPN</span></p>-->
            <div class="flex-row hidden row ">
                <?php showSocialIcons();?>
            </div>

        </nav>
        <img class="mobile-menu-switcher hidden "
             src="<?php echo get_template_directory_uri(); ?>/images/menu_mobile.svg" alt="mobile-menu">
    </div>

</header>




