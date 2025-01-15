import { AboutMe } from "./AboutMe";
import { HowToUse } from "./HowToUse";
import { TechStack } from "./TechStack";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="flex w-full justify-evenly mt-0 lg:mt-3 transition-all duration-300">
      <HowToUse />
      <TechStack />
      <AboutMe />
      <ThemeToggle />
    </div>
  );
};

export default Navbar;
