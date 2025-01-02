import { ThemeProvider } from "@/components/theme-provider";

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="size-full items-center justify-center flex flex-col">
        App
      </div>
    </ThemeProvider>
  );
};

export default App;
