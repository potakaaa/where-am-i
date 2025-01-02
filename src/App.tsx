import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="size-full items-center justify-center flex flex-col">
        <div className="fixed top-5 flex justify-center w-full">
          <Navbar />
        </div>
        App
      </div>
    </ThemeProvider>
  );
};

export default App;
