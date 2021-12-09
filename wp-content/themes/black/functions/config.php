<?php
if ( is_user_logged_in() ) {
    show_admin_bar(true);
}
$keyAPI = 'KEY';

function show_map(){
    global  $keyAPI;
    echo '
    <script  src="https://maps.googleapis.com/maps/api/js?key='.$keyAPI.'&callback=initMap&v=weekly"  async></script>

    ';
}


$linkedin_link='https://www.youtube.com/channel/UC9-HzPKJLlZwUYjnc9r9vmg/';
$instagram_link = 'https://www.instagram.com/blackshiprealty/';
$facebook_link = 'https://www.facebook.com/blackshiprealty';
$post_mail = '#';
