var map;
var service;
var infowindow;

function initMap() {
    var mapCenter = new google.maps.LatLng(0, 0);

    map = new google.maps.Map(document.getElementById('map'), {
        center: mapCenter,
        zoom: 15,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        gestureHandling: 'none',
        clickableIcons: false
    });

    var request = {
        query: 'Володимирська, 40А',
        fields: ['photos', 'formatted_address', 'name', 'rating', 'opening_hours', 'geometry'],
    };

    service = new google.maps.places.PlacesService(map);
    service.textSearch(request, callback);
}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        /*for (var i = 0; i < results.length; i++) {
            var place = results[i];
        }*/
        $("#map-adress").text(results[0].formatted_address);
        map.setCenter(results[0].geometry.location);
    }
}