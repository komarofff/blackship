<?php
if ( is_user_logged_in() ) {
    show_admin_bar(true);
}
$keyAPI = 'AIzaSyDMYrZZhMGlK5PKOMQRQMVffXnUJwgyatY';

function show_map(){
    global  $keyAPI;
    echo '
    <script  src="https://maps.googleapis.com/maps/api/js?key='.$keyAPI.'&callback=initMap&v=weekly"  async></script>
    ';
}


$linkedin_link='#';
$instagram_link = '#';
$facebook_link = '#';
$post_mail = '#';