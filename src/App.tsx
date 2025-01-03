import { ThemeProvider } from "@/components/provider/theme-provider";
import Navbar from "./components/navbar/Navbar";
import Map from "./components/Map";

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="size-full items-center justify-center flex flex-col">
        <div className="fixed top-5 flex justify-center w-full">
          <Navbar />
        </div>
        <Map />
        App
      </div>
    </ThemeProvider>
  );
};

export default App;
