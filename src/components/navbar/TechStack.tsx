import { CalendarDays } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function TechStack() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link" className="text-xs">
          Tech Stack
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60 m-2 p-4">
        <div className="flex flex-col">
          <div className="flex self-stretch justify-evenly">
            <a href="https://react.dev/">
              <Avatar className="size-8 shadow">
                <AvatarImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                <AvatarFallback>React</AvatarFallback>
              </Avatar>
            </a>
            <a href="https://vite.dev/">
              <Avatar className="size-8 shadow">
                <AvatarImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />
                <AvatarFallback>Vite</AvatarFallback>
              </Avatar>
            </a>
            <a href="https://www.typescriptlang.org/">
              <Avatar className="size-8 shadow">
                <AvatarImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                <AvatarFallback>Typescript</AvatarFallback>
              </Avatar>
            </a>
            <a href="https://tailwindcss.com/">
              <a href="https://ui.shadcn.com/">
                <Avatar className="size-8 shadow">
                  <AvatarImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                  <AvatarFallback>Tailwind</AvatarFallback>
                </Avatar>
              </a>
            </a>
          </div>
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
