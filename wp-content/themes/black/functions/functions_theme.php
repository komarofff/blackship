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
    echo '<a target="_blank" href="'.$linkedin_link.'"><img src="'.get_template_directory_uri().'/images/linkedin.svg" alt="yotube link"></a>
                <a target="_blank" href="'.$facebook_link.'"><img src="'.get_template_directory_uri().'/images/facebook.svg" alt="facebook link"></a>
                <a target="_blank" href="'.$instagram_link.'"><img src="'.get_template_directory_uri().'/images/instagram.svg" alt=" instagram link"></a>';
}

add_shortcode('socials','showSocialIcons');


add_filter( 'wpcf7_form_elements', function ( $html ) {

    preg_match( '~<input([^>]+)type=["\']submit["\']([^>/]+)/?>~i', $html, $match );

    if( $match ){
        $input = $match[0];
        $attr = trim( $match[1] . $match[2] );

        preg_match( '/value=["\']([^"\']+)/', $input, $mm );
        $button_text = $mm[1];

        $html = str_replace( $input, "<button $attr>$button_text</button>", $html );
    }

    return $html;

} );

