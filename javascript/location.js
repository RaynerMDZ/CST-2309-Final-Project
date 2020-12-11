function initMap() {
    const rmgym = { lat: 40.6954, lng: -73.9879 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: rmgym,
    });
    const marker = new google.maps.Marker({
        position: rmgym,
        map: map,
    });
}