// ADD YOUR MAPBOX ACCESS TOKEN
mapboxgl.accessToken = "pk.eyJ1IjoicHJnZW9yZ2UiLCJhIjoiY20xaW1ubXozMG5saDJscTJhdHVuZGNqMyJ9.QTkAEEHG-PCVb5grFPOqqA"; //YOUR KEY HERE
// CREATE A NEW OBJECT CALLED MAP
const map = new mapboxgl.Map({
  container: "map", // container ID for the map object (this points to the HTML element)
  style: "mapbox://styles/prgeorge/cm1imtzt601kj01pd9dfbbuwo", //YOUR STYLE URL
  center: [-73.9442, 40.6482], // starting position [lng, lat] (google brooklyn)
  zoom: 11, // starting zoom (adjust it as you wish)
  projection: "globe", // display the map as a 3D globe
});
