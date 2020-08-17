import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1Ijoic3RlcGhlbmh1YW5nOSIsImEiOiJja2R5cDRrY2kwZHQxMnJrMHZiaHF1aTh4In0.RHglorhH4yX9pMJOzQFaoA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const createMarker = (type, coordinates) => {
  let dict = {
    activity: "http://i.imgur.com/WbMOfMl.png",
    hotel: "http://i.imgur.com/D9574Cu.png",
    restaurant: "http://i.imgur.com/cqR6pUI.png"
  }

  let node = document.createElement('img');
  node.src = dict[type];
  node.style.width = '50px';
  node.style.height = '50px';

  new mapboxgl.Marker(node).setLngLat(coordinates).addTo(map);
}

export default createMarker;
