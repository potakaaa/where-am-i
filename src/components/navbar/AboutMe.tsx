import { Facebook, Github, Instagram } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function AboutMe() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">About Me</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-60">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/111859181?v=4" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-bold">Rald Helbiro</h4>
            <p className="text-xs">
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
            <div className="flex items-center pt-2 space-x-2">
              <Facebook className="size-4 opacity-70" />
              <p className="text-xs font-semibold">Rald Helbiro</p>
            </div>
            <div className="flex items-center pt-2 space-x-2">
              <Github className="size-4 opacity-70" />
              <p className="text-xs font-semibold">potakaaa</p>
            </div>
            <div className="flex items-center pt-2 space-x-2">
              <Instagram className="size-4 opacity-70" />
              <p className="text-xs font-semibold">jr.raldyyy</p>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
