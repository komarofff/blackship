
function initMap() {
    let lat = 35.649701
    let lng = 139.720911
    let div = "<h5>Blackship Realty Inc.</h5>Hiroo Five 602, 5-8-12 , Shibuya-ku, Tokyo <br>T: 206 623-8880<br>F: 206 623-7435";
    let icon_image = "/wp-content/themes/black/images/map-marker.png"

    const center = {lat: lat, lng: lng}

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: center,
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
