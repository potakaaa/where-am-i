import { CalendarDays } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function TechStack() {
  const [loadIcons, setLoadIcons] = useState(0);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    if (loadIcons === 4) {
      setIsLoaded(true);
    }
  }, [loadIcons]);

  const iconsLoaded = () => {
    if (isLoaded) {
      return (
        <div className="flex self-stretch justify-evenly">
          <a href="https://react.dev/">
            <Avatar className="size-8">
              <AvatarImage
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                onLoad={() => setLoadIcons(loadIcons + 1)}
              />
              <AvatarFallback>React</AvatarFallback>
            </Avatar>
          </a>
          <a href="https://vite.dev/">
            <Avatar className="size-8">
              <AvatarImage
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                onLoad={() => setLoadIcons(loadIcons + 1)}
              />
              <AvatarFallback>Vite</AvatarFallback>
            </Avatar>
          </a>
          <a href="https://www.typescriptlang.org/">
            <Avatar className="size-8">
              <AvatarImage
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                onLoad={() => setLoadIcons(loadIcons + 1)}
              />
              <AvatarFallback>Typescript</AvatarFallback>
            </Avatar>
          </a>
          <a href="https://tailwindcss.com/">
            <Avatar className="size-8">
              <AvatarImage
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                onLoad={() => setLoadIcons(loadIcons + 1)}
              />
              <AvatarFallback>Tailwind</AvatarFallback>
            </Avatar>
          </a>
        </div>
      );
    } else {
      return (
        <div className="flex self-stretch justify-evenly">
          <Avatar className="size-8">
            <Skeleton className="size-8" />
          </Avatar>
          <Avatar className="size-8">
            <Skeleton className="size-8" />
          </Avatar>
          <Avatar className="size-8">
            <Skeleton className="size-8" />
          </Avatar>
          <Avatar className="size-8">
            <Skeleton className="size-8" />
          </Avatar>
        </div>
      );
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link" className="text-xs">
          Tech Stack
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60 m-2 p-4">
        <div className="flex flex-col">
          {iconsLoaded()}
          <div className="flex pt-4 items-center justify-center">
            <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
            <span className="text-xs text-muted-foreground">
              Created December 2024
            </span>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
