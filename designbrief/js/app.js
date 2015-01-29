function initialize() {
  var mapOptions = {
    center: { lat: 47.858888, lng: -122.220801},
    zoom: 10
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  var lynnwood = new google.maps.LatLng(47.884887, -122.278785);
  var everett = new google.maps.LatLng(47.967659, -122.200759);
  var mountVernon = new google.maps.LatLng(48.427859, -122.334453);
  var marker = new google.maps.Marker({
    position: lynnwood,
    map: map,
    title:"Lynnwood"
});

    var marker = new google.maps.Marker({
    position: everett,
    map: map,
    title:"Everett"
});

    var marker = new google.maps.Marker({
    position: mountVernon,
    map: map,
    title:"Mount Vernon"
});

}
google.maps.event.addDomListener(window, 'load', initialize);

