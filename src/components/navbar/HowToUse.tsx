import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";

export function HowToUse() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="link"
          className="text-xs underline-offset-4 hover:underline active:underline sm:text-sm lg:text-base transition-all duration-300"
        >
          How to Use
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72 p-4 m-2 lg:w-80">
        <div className="flex justify-between space-x-4">
          <Avatar className="size-8 lg:size-10">
            <AvatarImage src="public\logo.svg" />
            <AvatarFallback>
              <Skeleton className="size-8 lg:size-10" />
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm lg:text-base">
              Click the <strong>Where am I?</strong> button to see your current
              location.
            </p>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
