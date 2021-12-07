
function initMap() {
    let lat = 47.609799
    let lng = -122.331989
    let div = "<h5>Paragon Real Estate Advisors</h5>600 University St, Suite 2018. </br>Seattle, WA 98101<br>T: 206 623-8880<br>F: 206 623-7435";
    let icon_image = "http://paragon.vasterra.com/wp-content/uploads/2021/10/marker-image.png"

    const center = {lat: lat, lng: lng}

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: center
    });
    const contentString = `<div>${div}</div>`;
    const infowindow = new google.maps.InfoWindow({
        content: contentString,
    });


    const marker = new google.maps.Marker({
        position: center,
        map,
        title: "Paragon Real Estate Advisors",
        icon: icon_image
    });
    infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
    });
    marker.addListener("click", () => {
        infowindow.open({
            anchor: marker,
            map,
            shouldFocus: false,
        });
    });


}
