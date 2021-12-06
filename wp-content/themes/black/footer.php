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
                <ul class="footer-flex-row">
                    <li><a class="text-menu-footer text-menu-animation " href="#"><span
                                    data-text="About Us">About Us</span></a>
                    </li>
                    <li><a class="text-menu-footer text-menu-animation " href="#"><span data-text="Advantages">Advantages</span></a>
                    </li>
                    <li><a class="text-menu-footer text-menu-animation " href="#"><span data-text="Contact Us">Contact Us</span></a>
                    </li>
                    <li><a class="text-menu-footer text-menu-animation " href="#"><span
                                    data-text="Location">Location</span></a>
                    </li>
                </ul>
            </nav>
            <div class="flex-col hidden">
                <a href="#"><img src="<?php echo get_template_directory_uri(); ?>/images/linkedin.svg" alt=""></a>
                <a href="#"><img src="<?php echo get_template_directory_uri(); ?>/images/facebook.svg" alt=""></a>
                <a href="#"><img src="<?php echo get_template_directory_uri(); ?>/images/instagram.svg" alt=""></a>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>

</body>
</html>
