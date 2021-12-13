function initMap() {
    // let lat = 35.64813187549005
    // let lng = 139.72170393192368
    let lat = 35.64813187549005
    let lng = 139.72175
    let div = "<h5>Blackship Realty Inc.</h5>Hiroo Five 602, 5-8-12 , Shibuya-ku, Tokyo <br>T: 206 623-8880<br>F: 206 623-7435";
    let marker_url = "/wp-content/themes/black/images/gif-marker-small.gif" //map-marker.png
    if (document.documentElement.clientWidth > 600) {
        var icon = {
            url: marker_url, // url
            scaledSize: new google.maps.Size(80, 80), // scaled size
            origin: new google.maps.Point(0, 0), // origin
            // anchor: new google.maps.Point(80, 80) // anchor
        };
    } else {
        var icon = {
            url: marker_url, // url
            scaledSize: new google.maps.Size(50, 50), // scaled size
            origin: new google.maps.Point(0, 0), // origin
            // anchor: new google.maps.Point(80, 80) // anchor
        };
    }
    const center = {lat: lat, lng: lng}

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 18,
        center: center,
        styles: [
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
            {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#263c3f" }],
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#6b9a76" }],
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#38414e" }],
            },
            {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ color: "#212a37" }],
            },
            {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9ca5b3" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#746855" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#1f2835" }],
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{ color: "#f3d19c" }],
            },
            {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#2f3948" }],
            },
            {
                featureType: "transit.station",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#17263c" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#515c6d" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#17263c" }],
            },
        ],
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

        infowindow.open({
            anchor: marker,
            map,
            shouldFocus: false,
        });
    });


}


