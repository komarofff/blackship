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

    <?php wp_head(); ?>
</head>

<body>
<header class="header">
    <div class="container flex-row-between">
        <img class="logo" src="<?php echo get_template_directory_uri(); ?>/images/logo.svg" alt="logo">
        <nav class="flex-row mobile-menu">
<!--            <ul class="flex-row ">-->
<!--                <li><a class="text-menu text-menu-animation" href="#"><span data-text="About Us">About Us</span></a>-->
<!--                </li>-->
<!--                <li><a class="text-menu text-menu-animation" href="#"><span data-text="Advantages">Advantages</span></a>-->
<!--                </li>-->
<!--                <li><a class="text-menu text-menu-animation" href="#"><span data-text="Contact Us">Contact Us</span></a>-->
<!--                </li>-->
<!--                <li><a class="text-menu text-menu-animation" href="#"><span data-text="Location">Location</span></a>-->
<!--                </li>-->
<!--            </ul>-->
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
            <p class="flex-row col"><span class="padding language-switcher active-switcher">EN</span><span
                        class=" language-switcher">JPN</span></p>
            <div class="flex-row hidden row">
                <a href="#"><img src="<?php echo get_template_directory_uri(); ?>/images/linkedin.svg" alt=""></a>
                <a href="#"><img src="<?php echo get_template_directory_uri(); ?>/images/facebook.svg" alt=""></a>
                <a href="#"><img src="<?php echo get_template_directory_uri(); ?>/images/instagram.svg" alt=""></a>
            </div>

        </nav>
        <img class="mobile-menu-switcher hidden "
             src="<?php echo get_template_directory_uri(); ?>/images/menu_mobile.svg" alt="mobile-menu">
    </div>

</header>




