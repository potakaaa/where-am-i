import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import OSM from "./provider/osm-provider";
import "leaflet/dist/leaflet.css";
import { usePosition } from "./provider/global-provider";
import { LocationMarker } from "./functions/LocationFinder";

const Map = () => {
  const [zoomLevel] = useState(15);
  const { pos, setPos } = usePosition();

  return (
    <div className="w-full rounded-md shadow-lg overflow-hidden">
      <MapContainer
        center={pos}
        zoom={zoomLevel}
        style={{ height: "50vh", zIndex: 0 }}
        className="leaflet-container"
        // zoomSnap={1}
        // zoomDelta={1}
      >
        <TileLayer
          url={OSM.maptiler.url}
          attribution={OSM.maptiler.attribution}
          tileSize={256}
          detectRetina={true}
        />
        <LocationMarker />
      </MapContainer>
    </div>
  );
};

export default Map;
