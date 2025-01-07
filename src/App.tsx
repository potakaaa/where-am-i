import { ThemeProvider } from "@/components/provider/theme-provider";
import Navbar from "./components/navbar/Navbar";
import Map from "./components/Map";
import { Button } from "@/components/ui/button";
import { usePosition } from "./components/provider/global-provider";
import { useEffect } from "react";
import {
  LocationClick,
  LocationFinder,
} from "./components/functions/LocationFinder";
import { useMap, useMapEvents } from "react-leaflet";

const App = () => {
  const { pos, setPos, setPosChanged } = usePosition();

  useEffect(() => {
    console.log(pos);
  }, [pos]);

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="size-full items-center justify-center flex flex-col">
        <div className="fixed top-5 flex justify-center w-full">
          <Navbar />
        </div>
        <div className="flex justify-center items-center w-screen p-7 ">
          <Map />
        </div>
        <Button className="font-semibold shadow-sm">Where Am I?</Button>
      </div>
    </ThemeProvider>
  );
};

export default App;
