import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import OSM from "./provider/osm-provider";
import "leaflet/dist/leaflet.css";
import { usePosition } from "./provider/global-provider";
import { useTheme } from "./provider/theme-provider";

const Map = () => {
  const [zoomLevel] = useState(15);
  const { pos, setPos, posChanged } = usePosition();
  const { theme } = useTheme();
  console.log(theme);

  return (
    <div
      className={`w-full rounded-md ${
        theme === "light"
          ? "shadow-[0px_3px_35px_-6px_rgba(0,_0,_0,_0.35)]"
          : "shadow-[0px_3px_35px_-11px_#ffffff]"
      } overflow-hidden`}
    >
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
        <Marker position={pos}>
          <Popup className="font-bold text-center justify-center items-center">
            {!posChanged
              ? "This is where I am studying - USTP."
              : "You're currently here."}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
