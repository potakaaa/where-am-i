import { ThemeProvider } from "@/components/provider/theme-provider";
import Navbar from "./components/navbar/Navbar";
import Map from "./components/Map";
import { Button } from "@/components/ui/button";

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="size-full items-center justify-center flex flex-col">
        <div className="fixed top-5 flex justify-center w-full">
          <Navbar />
        </div>
        <div className="flex justify-center items-center w-screen p-7 ">
          <Map />
        </div>
        <Button className="font-semibold">Where Am I?</Button>
      </div>
    </ThemeProvider>
  );
};

export default App;
