
function initMap() {
    let lat = 35.649701
    let lng = 139.720911
    let div = "<h5>Blackship Realty Inc.</h5>Hiroo Five 602, 5-8-12 , Shibuya-ku, Tokyo <br>T: 206 623-8880<br>F: 206 623-7435";
    let icon_image = "/wp-content/themes/black/images/map-marker.png"

    const center = {lat: lat, lng: lng}

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: center,
        styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
    });
    // const contentString = `<div>${div}</div>`;
    // const infowindow = new google.maps.InfoWindow({
    //     content: contentString,
    // });


    const marker = new google.maps.Marker({
        position: center,
        map,
        title: "Blackship Realty Inc.",
        icon: icon_image
    });
    // infowindow.open({
    //     anchor: marker,
    //     map,
    //     shouldFocus: false,
    // });
    // marker.addListener("click", () => {
    //     infowindow.open({
    //         anchor: marker,
    //         map,
    //         shouldFocus: false,
    //     });
    // });


}
