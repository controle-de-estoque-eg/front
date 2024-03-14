import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="flex flex-col items-center min-w-[90px] bg-muted"
      >
        <DropdownMenuItem className="bg-muted flex justify-between w-full">
          <div
            className="flex overflow-hidden rotate-45 rounded-full hover:cursor-pointer"
            onClick={() => setTheme("light")}
          >
            <div className="w-[20px] bg-white h-[20px]"></div>
          </div>

          <div
            className="flex overflow-hidden rotate-45 rounded-full hover:cursor-pointer"
            onClick={() => setTheme("dark")}
          >
            <div className="w-[20px] bg-black h-[20px]"></div>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem className="bg-muted flex justify-between w-full">
          <div
            className="flex overflow-hidden rotate-45 rounded-full hover:cursor-pointer"
            onClick={() => setTheme("violet")}
          >
            <div className="w-[10px] bg-white h-[20px]"></div>
            <div className="w-[10px] bg-[#6d28d9] h-[20px]"></div>
          </div>

          <div
            className="flex overflow-hidden rotate-45 rounded-full hover:cursor-pointer"
            onClick={() => setTheme("dark-violet")}
          >
            <div className="w-[10px] bg-black h-[20px]"></div>
            <div className="w-[10px] bg-[#6d28d9] h-[20px]"></div>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem className="bg-muted flex justify-between w-full">
          <div
            className="flex overflow-hidden rotate-45 rounded-full hover:cursor-pointer"
            onClick={() => setTheme("red")}
          >
            <div className="w-[10px] bg-white h-[20px]"></div>
            <div className="w-[10px] bg-[#dc2626] h-[20px]"></div>
          </div>

          <div
            className="flex overflow-hidden rotate-45 rounded-full hover:cursor-pointer"
            onClick={() => setTheme("dark-red")}
          >
            <div className="w-[10px] bg-black h-[20px]"></div>
            <div className="w-[10px] bg-[#dc2626] h-[20px]"></div>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem className="bg-muted flex justify-between w-full">
          <div
            className="flex overflow-hidden rotate-45 rounded-full hover:cursor-pointer"
            onClick={() => setTheme("orange")}
          >
            <div className="w-[10px] bg-white h-[20px]"></div>
            <div className="w-[10px] bg-[#ea580c] h-[20px]"></div>
          </div>

          <div
            className="flex overflow-hidden rotate-45 rounded-full hover:cursor-pointer"
            onClick={() => setTheme("dark-orange")}
          >
            <div className="w-[10px] bg-black h-[20px]"></div>
            <div className="w-[10px] bg-[#ea580c] h-[20px]"></div>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem className="bg-muted flex justify-between w-full">
          <div
            className="flex overflow-hidden rotate-45 rounded-full hover:cursor-pointer"
            onClick={() => setTheme("yellow")}
          >
            <div className="w-[10px] bg-white h-[20px]"></div>
            <div className="w-[10px] bg-[#e2b814] h-[20px]"></div>
          </div>

          <div
            className="flex overflow-hidden rotate-45 rounded-full hover:cursor-pointer"
            onClick={() => setTheme("dark-yellow")}
          >
            <div className="w-[10px] bg-black h-[20px]"></div>
            <div className="w-[10px] bg-[#e2b814] h-[20px]"></div>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem className="bg-muted flex justify-between w-full">
          <div
            className="flex overflow-hidden rotate-45 rounded-full hover:cursor-pointer"
            onClick={() => setTheme("blue")}
          >
            <div className="w-[10px] bg-white h-[20px]"></div>
            <div className="w-[10px] bg-[#3576df] h-[20px]"></div>
          </div>

          <div
            className="flex overflow-hidden rotate-45 rounded-full hover:cursor-pointer"
            onClick={() => setTheme("dark-blue")}
          >
            <div className="w-[10px] bg-black h-[20px]"></div>
            <div className="w-[10px] bg-[#3576df] h-[20px]"></div>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem className="bg-muted flex justify-between w-full">
          <div
            className="flex overflow-hidden rotate-45 rounded-full hover:cursor-pointer"
            onClick={() => setTheme("green")}
          >
            <div className="w-[10px] bg-white h-[20px]"></div>
            <div className="w-[10px] bg-[#22b357] h-[20px]"></div>
          </div>

          <div
            className="flex overflow-hidden rotate-45 rounded-full hover:cursor-pointer"
            onClick={() => setTheme("dark-green")}
          >
            <div className="w-[10px] bg-black h-[20px]"></div>
            <div className="w-[10px] bg-[#22b357] h-[20px]"></div>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
