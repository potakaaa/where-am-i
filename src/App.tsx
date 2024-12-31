import { ThemeProvider } from "@/components/theme-provider";

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div>App</div>
    </ThemeProvider>
  );
};

export default App;
