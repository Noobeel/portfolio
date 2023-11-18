"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DarkModeToggle() {
    const { theme, setTheme } = useTheme();

    const handleChangeTheme = () => {
        if (theme == "system") {
            window.matchMedia("(prefers-color-scheme: dark)").matches
                ? setTheme("light")
                : setTheme("dark");
        } else {
            theme == "dark" ? setTheme("light") : setTheme("dark");
        }
    };

    return (
        <Button
            variant="outline"
            size="icon"
            className="bg-transparent hover:bg-transparent w-max h-max p-2 sm:mx-1 fold:px-1.5"
            id="theme-toggle"
            onClick={handleChangeTheme}
        >
            <Sun className="w-5 h-5 xl:w-6 xl:h-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 fold:w-4 fold:h-4" />
            <Moon className="absolute w-5 h-5 xl:h-6 xl:w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 fold:w-4 fold:h-4" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
