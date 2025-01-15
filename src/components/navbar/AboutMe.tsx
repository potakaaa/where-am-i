import { Facebook, Github, Instagram } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "../ui/skeleton";

export function AboutMe() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="link"
          className="text-xs sm:text-sm lg:text-base transition-all duration-300"
        >
          About Me
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72 m-2 p-4 ">
        <div className="flex justify-between space-x-4 z-40">
          <Avatar className="size-12 lg:size-14 shadow">
            <AvatarImage src="https://avatars.githubusercontent.com/u/111859181?v=4" />
            <AvatarFallback>
              <Skeleton className="size-12 lg:size-14" />
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-bold lg:text-lg">Rald Helbiro</h4>
            <p className="text-xs tracking-tight lg:text-sm">
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
              <Facebook className="size-4 lg:size-5 opacity-70" />
              <p className="text-xs font-semibold lg:text-sm">Rald Helbiro</p>
            </a>
            <a
              href="https://github.com/potakaaa"
              className="flex items-center pt-2 space-x-2"
            >
              <Github className="size-4 lg:size-5 opacity-70" />
              <p className="text-xs font-semibold lg:text-sm">potakaaa</p>
            </a>
            <a
              href="https://www.instagram.com/jr.raldyyy/"
              className="flex items-center pt-2 space-x-2"
            >
              <Instagram className="size-4 lg:size-5 opacity-70" />
              <p className="text-xs font-semibold lg:text-sm">jr.raldyyy</p>
            </a>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
