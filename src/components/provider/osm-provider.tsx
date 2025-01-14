import L from "leaflet";

const OSM = {
  maptiler: {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
};

export const redIcon = new L.Icon({
  iconUrl:
    "https://img.icons8.com/?size=100&id=jknBzscY86kt&format=png&color=000000", // You can use a custom red marker image here
  iconSize: [40, 45], // Default size of the marker
  iconAnchor: [16, 38], // Anchors the icon to the bottom
  popupAnchor: [1, -34], // Popup position relative to the icon
});

export default OSM;
