import { forwardRef, useImperativeHandle, useState } from "react";
import {
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import OSM, { defaultMarker, redIcon } from "./provider/osm-provider";
import "leaflet/dist/leaflet.css";
import { usePosition } from "./provider/global-provider";
import { useTheme } from "./provider/theme-provider";

export interface MapRef {
  locateUser: () => void;
}

const Map = forwardRef<MapRef>((_, ref) => {
  const [zoomLevel] = useState(15);
  const { pos } = usePosition();
  const { userPos, setUserPos } = usePosition();
  const { theme } = useTheme();
  console.log(theme);

  const HandleMapEvents = () => {
    const map = useMapEvents({
      locationfound(e) {
        map.flyTo(e.latlng);
        setUserPos(e.latlng);
        console.log(e.latlng);
      },
    });

    // Expose the locate function via ref
    useImperativeHandle(ref, () => ({
      locateUser: () => {
        map.locate();
      },
    }));

    return null;
  };

  return (
    <div
      className={`w-full max-w-4xl rounded-md ${
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
        <Marker position={pos} icon={defaultMarker}>
          <Popup className="font-bold text-center justify-center items-center">
            This is where I am studying - USTP.
          </Popup>
        </Marker>
        {userPos && (
          <Marker position={userPos} icon={redIcon}>
            <Popup className="font-bold text-center justify-center items-center">
              You're currently here.
            </Popup>
          </Marker>
        )}
        <HandleMapEvents />
        <LayersControl position="topright">
          <LayersControl.BaseLayer name="Map">
            <TileLayer
              url={OSM.maptiler.url}
              attribution={OSM.maptiler.attribution}
              tileSize={256}
              detectRetina={true}
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Satellite">
            <TileLayer
              url={OSM.maptiler_satellite.url}
              attribution={OSM.maptiler_satellite.attribution}
              tileSize={256}
              detectRetina={true}
            />
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
    </div>
  );
});

export default Map;
