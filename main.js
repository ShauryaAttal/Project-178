var latitude = 34.043294439653145;
var longitude = -84.21825863944609;

var schoollat = 34.04921029126367
var schoollong =  -84.20871353711033

var storelat = 34.04549932829653
var storelong = -84.22163555715579

var gaslat = 34.04032999638826
var gaslong =   -84.21901123658415

var parklat = 34.04143371952996
var parklong = -84.21773268572362

//initialise mapbox

mapboxgl.accessToken =
  "pk.eyJ1IjoieWFtdW5hMTIzIiwiYSI6ImNsMWRhcHY3ejA4ZGoza24zazdrNmNmaGwifQ.t-kPX15gsZG7azvrzyHfZA";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [longitude, latitude],
  zoom: 16,
});

// map.addControl(
//   new mapboxgl.GeolocateControl({
//     positionOptions: {
//       enableHighAccuracy: true,
//     },
//     trackUserLocation: true,
//   })
// );

map.addControl(
  new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
  })
  //"top-left"
);

// setting home image icon
var image1 = document.querySelector("#home");
var marker1 = new mapboxgl.Marker({
  element: image1,
})

  .setLngLat([longitude, latitude])

  .addTo(map);

// setting school icon
var image2 = document.querySelector("#school");
var marker2 = new mapboxgl.Marker({
  element: image2,
})

  .setLngLat([schoollong, schoollat])

  .addTo(map);

// setting store icon
var image3 = document.querySelector("#store");
var marker3 = new mapboxgl.Marker({
  element: image3,
})

  .setLngLat([storelong, storelat])

  .addTo(map);

// setting park icon
var image4 = document.querySelector("#park");
var marker4 = new mapboxgl.Marker({
  element: image4,
})

  .setLngLat([parklong, parklat])

  .addTo(map);

// setting gas station icon
var image5 = document.querySelector("#gas-station");
var marker5 = new mapboxgl.Marker({
  element: image5,
})

  .setLngLat([gaslong, gaslat])

  .addTo(map);
