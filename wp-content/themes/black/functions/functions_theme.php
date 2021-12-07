<?php

global $linkedin_link;
global $instagram_link;
global $facebook_link;
global $post_mail;

function showSocialIcons(){
    global $linkedin_link;
    global $instagram_link;
    global $facebook_link;
    global $post_mail;
    echo '<a href="'.$linkedin_link.'"><img src="'.get_template_directory_uri().'/images/linkedin.svg" alt=linkedin link""></a>
                <a href="'.$instagram_link.'"><img src="'.get_template_directory_uri().'/images/facebook.svg" alt="facebook link"></a>
                <a href="'.$facebook_link.'"><img src="'.get_template_directory_uri().'/images/instagram.svg" alt=" instagram link"></a>';
}

add_shortcode('socials','showSocialIcons');

