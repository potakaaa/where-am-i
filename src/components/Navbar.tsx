import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <div className="fixed top-5 z-10 flex px-5 w-full justify-end">
      <NavigationMenu className="w-full justify-between self-stretch">
        <NavigationMenuList className="relative">
          <NavigationMenuItem>
            <NavigationMenuTrigger>How to Use</NavigationMenuTrigger>
            <NavigationMenuContent>
              <p className="p-2 flex w-44 items-center justify-center text-sm">
                Just press the find me button and ta-da! You will see magic.
              </p>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Tech Stack</NavigationMenuTrigger>
            <NavigationMenuContent className="flex items-center justify-center">
              <ul
                className="grid grid-cols-2 w-48
               gap-2 text-sm text-center p-3"
              >
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
              <p className="p-2">Hello World</p>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
