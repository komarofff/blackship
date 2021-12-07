<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package black
 */

?>

<footer class="footer footer-text">
    <div class="container container-768 footer-flex-row-between">

        <div class="order3">
            <p class="">© 2021 Blackship Realty Inc.</p>
        </div>
        <div class=" footer-flex-row2">
            <nav>
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

            </nav>
            <div class="flex-col hidden small-icon">
               <?php showSocialIcons();?>
            </div>

        </div>
    </div>
</footer>

<?php
if(is_front_page()){
    show_map();
}


wp_footer(); ?>

</body>
</html>
