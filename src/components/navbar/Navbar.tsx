import { AboutMe } from "./AboutMe";
import { HowToUse } from "./HowToUse";
import { TechStack } from "./TechStack";

const Navbar = () => {
  return (
    <div className="flex w-full justify-evenly">
      <HowToUse />
      <TechStack />
      <AboutMe />
    </div>
  );
};

export default Navbar;
