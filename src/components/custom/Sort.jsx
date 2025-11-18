import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp } from "lucide-react";

function Sort({ sort, setSort, direction, setDirection }) {
  function handleSetDirection() {
    setDirection((direction) => (direction === "up" ? "down" : "up"));
  }

  return (
    <div className="flex items-center gap-1">
      <Button variant="outline" onClick={handleSetDirection}>
        {direction === "down" && <ArrowDown />}
        {direction === "up" && <ArrowUp />}
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">{sort}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setSort("name")}>
            Name
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSort("date")}>
            Date
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Sort;
