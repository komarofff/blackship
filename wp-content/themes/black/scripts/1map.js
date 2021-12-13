function initMap() {

    let lat = 35.649701
    let lng = 139.720911
    let div = "<h5>Blackship Realty Inc.</h5>Hiroo Five 602, 5-8-12 , Shibuya-ku, Tokyo <br>T: 206 623-8880<br>F: 206 623-7435";
    let icon_image = "/wp-content/themes/black/images/map-marker.png"
    if (document.documentElement.clientWidth > 600) {
        var icon = {
            url: "/wp-content/themes/black/images/map-marker.png", // url
            scaledSize: new google.maps.Size(280, 280), // scaled size
            origin: new google.maps.Point(0, 0), // origin
            anchor: new google.maps.Point(140, 140) // anchor
        };
    } else {
        var icon = {
            url: "/wp-content/themes/black/images/map-marker.png", // url
            scaledSize: new google.maps.Size(160, 160), // scaled size
            origin: new google.maps.Point(0, 0), // origin
            anchor: new google.maps.Point(80, 80) // anchor
        };
    }
    const center = {lat: lat, lng: lng}

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: center,
        styles: [{
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{"saturation": 36}, {"color": "#000000"}, {"lightness": 40}]
        }, {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{"visibility": "on"}, {"color": "#000000"}, {"lightness": 16}]
        }, {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [{"visibility": "off"}]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#000000"}, {"lightness": 20}]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{"color": "#000000"}, {"lightness": 17}, {"weight": 1.2}]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{"color": "#000000"}, {"lightness": 20}]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{"color": "#000000"}, {"lightness": 21}]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{"color": "#000000"}, {"lightness": 17}]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{"color": "#000000"}, {"lightness": 29}, {"weight": 0.2}]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{"color": "#000000"}, {"lightness": 18}]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{"color": "#000000"}, {"lightness": 16}]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{"color": "#000000"}, {"lightness": 19}]
        }, {"featureType": "water", "elementType": "geometry", "stylers": [{"color": "#000000"}, {"lightness": 17}]}]
    });
    const contentString = `<div style="color: black;">${div}</div>`;
    const infowindow = new google.maps.InfoWindow({
        content: contentString,
    });


    const marker = new google.maps.Marker({
        position: center,
        map,
        title: "Blackship Realty Inc.",
        icon: icon,

    });


    // infowindow.open({
    //     anchor: marker,
    //     map,
    //     shouldFocus: false,
    // });
    marker.addListener("click", () => {
        //////
        var counter = 160

        setTimeout(() => {
            changeMarker(counter)
        }, 10)
        //////
        // infowindow.open({
        //     anchor: marker,
        //     map,
        //     shouldFocus: false,
        // });
    });

    function changeMarker(counter) {

        change(counter)

        function change(counter) {
            counter -= 10
            console.log('counter', counter)
            marker.setMap(null);
            let timeout = setTimeout(() => {

                var icon = {
                    url: "/wp-content/themes/black/images/map-marker.png", // url
                    scaledSize: new google.maps.Size(counter, counter), // scaled size
                    origin: new google.maps.Point(0, 0), // origin
                    anchor: new google.maps.Point(counter / 2, counter / 2) // anchor
                };
                var marker = new google.maps.Marker({
                    position: center,
                    map,
                    title: "Blackship Realty Inc.",
                    icon: icon,

                });
                console.log('counter=', counter)

            }, 100)

            if (counter === 0) {
                clearTimeout(timeout)
                return false
            }

            let time2 = setTimeout(() => {
                marker.setMap(null);
                if (counter === 0) {
                    clearTimeout(time2)
                    return false
                }

                change(counter)
            }, 30)

        }

    }


}
