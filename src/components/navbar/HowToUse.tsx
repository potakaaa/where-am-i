import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function HowToUse() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="link"
          className="text-xs underline-offset-4 hover:underline active:underline"
        >
          How to Use
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72 p-4 m-2">
        <div className="flex justify-between space-x-4">
          <Avatar className="size-8">
            <AvatarImage src="public\logo.svg" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm">
              Click the <strong>Where am I?</strong> button to see your current
              location.
            </p>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
