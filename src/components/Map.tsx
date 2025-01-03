import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import OSM from "./provider/osm-provider";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const [center] = useState({
    lat: 8.484850986252226,
    lng: 124.65665999809528,
  });
  const [zoomLevel] = useState(15);

  return (
    <div className="w-72 rounded-md shadow-lg overflow-hidden">
      <MapContainer
        center={center}
        zoom={zoomLevel}
        style={{ height: "40vh" }}
        className="leaflet-container"
        zoomSnap={1}
        zoomDelta={1}
      >
        <TileLayer
          url={OSM.maptiler.url}
          attribution={OSM.maptiler.attribution}
          tileSize={256}
          detectRetina={true}
        />
      </MapContainer>
    </div>
  );
};

export default Map;
