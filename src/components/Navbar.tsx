import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <div className="fixed top-5 left-0 z-10 flex px-5 w-full justify-end">
      <NavigationMenu className="w-full justify-between self-stretch">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>How to Use</NavigationMenuTrigger>
            <NavigationMenuContent>
              <p className="p-2 flex w-28 items-center justify-center text-sm">
                Just press the find me button and ta-da! You will see magic.
              </p>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Tech Stack</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid grid-cols-3 w-36 gap-2">
                <li>React</li>
                <li>Vite</li>
                <li>Tailwind CSS</li>
                <li>ShadCN</li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>About Me</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
