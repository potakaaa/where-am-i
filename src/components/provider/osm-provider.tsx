import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const OSM = {
  maptiler: {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
  maptiler_satellite: {
    url: "https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.jpg?key=SlZNxUiHmBSoWZ1YUoLb",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.maptiler.com/">MapTiler</a>',
  }
};

export const redIcon = new L.Icon({
  iconUrl:
    "https://img.icons8.com/?size=100&id=jknBzscY86kt&format=png&color=000000",
  //  // You can use a custom red marker image here
  shadowUrl: markerShadow,
  iconSize: [40, 45], // Default size of the marker
  iconAnchor: [16, 38], // Anchors the icon to the bottom
  popupAnchor: [1, -34], // Popup position relative to the icon
  shadowSize: [55, 45],
});

export const defaultMarker = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41], // Default size
  iconAnchor: [12, 41], // Point of the icon that corresponds to the marker's location
  popupAnchor: [1, -34], // Point where the popup should open relative to the iconAnchor
  shadowSize: [41, 41],
});

export default OSM;
