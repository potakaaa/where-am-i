import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="size-full items-center justify-center flex flex-col">
        <Navbar />
        App
      </div>
    </ThemeProvider>
  );
};

export default App;
