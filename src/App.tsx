import { ThemeProvider } from "@/components/provider/theme-provider";
import Navbar from "./components/navbar/Navbar";
import Map, { MapRef } from "./components/Map";
import { Button } from "@/components/ui/button";
import { usePosition } from "./components/provider/global-provider";
import { useEffect, useRef } from "react";

const App = () => {
  const { pos } = usePosition();

  const mapRef = useRef<MapRef>(null);

  const handleLocateUser = () => {
    mapRef.current?.locateUser();
    console.log("Locating user...");
  };

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
          <Map ref={mapRef} />
        </div>
        <Button
          className="font-semibold shadow-sm mt-0 lg:mt-5 transition-all duration-300 xl:p-6 xl:text-sm"
          onClick={handleLocateUser}
        >
          Where Am I?
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default App;
