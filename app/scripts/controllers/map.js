var IOP = new google.maps.LatLng(32.8007336, -79.7646715);
var Awendaw = new google.maps.LatLng(32.940138, -79.657388);
var Folly = new google.maps.LatLng(32.6526523, -79.9481098);
var St. Helena = new google.maps.LatLng(32.3650467, -80.4545612);
var Hilton Head = new google.maps.LatLng(32.565651, -80.7488113);
var Edisto = new google.maps.LatLng(32.940138, -80.3089455);
var Awendaw = new google.maps.LatLng(32.4837918, -80.4028803);
var marker;
var map;

function initialize() {
  var mapOptions = {
    zoom: 13,
    center: Folly
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
          mapOptions);

  marker = new google.maps.Marker({
    map:map,
    draggable:true,
    animation: google.maps.Animation.DROP,
    position: parliament
  });
  google.maps.event.addListener(marker, 'click', toggleBounce);
}

function toggleBounce() {

  if (marker.getAnimation() != null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

google.maps.event.addDomListener(window, 'load', initialize);