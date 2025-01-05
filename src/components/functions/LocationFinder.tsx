import { useMapEvents } from "react-leaflet";
import { usePosition } from "../provider/global-provider";

function LocationFinder() {
  const { pos, setPos } = usePosition();
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPos(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return pos;
}

export default LocationFinder;
