import { Facebook, Github, Instagram } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function AboutMe() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link" className="text-xs">
          About Me
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72 m-2 p-4">
        <div className="flex justify-between space-x-4">
          <Avatar className="size-12 shadow">
            <AvatarImage src="https://avatars.githubusercontent.com/u/111859181?v=4" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-bold">Rald Helbiro</h4>
            <p className="text-xs tracking-tight">
              A 2nd Year Computer Science student learning{" "}
              <a
                href="https://ui.shadcn.com/"
                className="font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                shadcn
              </a>
              .
            </p>
            <a
              href="https://www.facebook.com/grldjr/"
              className="flex items-center pt-2 space-x-2"
            >
              <Facebook className="size-4 opacity-70" />
              <p className="text-xs font-semibold">Rald Helbiro</p>
            </a>
            <a
              href="https://github.com/potakaaa"
              className="flex items-center pt-2 space-x-2"
            >
              <Github className="size-4 opacity-70" />
              <p className="text-xs font-semibold">potakaaa</p>
            </a>
            <a
              href="https://www.instagram.com/jr.raldyyy/"
              className="flex items-center pt-2 space-x-2"
            >
              <Instagram className="size-4 opacity-70" />
              <p className="text-xs font-semibold">jr.raldyyy</p>
            </a>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
