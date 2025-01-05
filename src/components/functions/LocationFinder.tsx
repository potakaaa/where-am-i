import { Marker, Popup, useMapEvents } from "react-leaflet";
import { usePosition } from "../provider/global-provider";
import { useState } from "react";

export function LocationMarker() {
  const { pos, posChanged } = usePosition();
  return (
    <Marker position={pos}>
      <Popup className="font-bold text-center justify-center items-center">
        {posChanged
          ? "This is where I am studying - USTP."
          : "You're currently here."}
      </Popup>
    </Marker>
  );
}

export function LocationFinder() {
  const [tempPos, setTempPos] = useState({ lat: 0, lng: 0 });

  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setTempPos(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return tempPos;
}

export function LocationClick() {}
