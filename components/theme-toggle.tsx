"use client"

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DarkModeToggle() {
    const { setTheme } = useTheme();

    const handleChangeTheme = () => {
        const currentTheme = localStorage.getItem('theme');
        
        if (currentTheme === "dark") {
            setTheme("light");
        } else if (currentTheme === "light") {
            setTheme("dark");
        } else {
            window.matchMedia('(prefers-color-scheme: dark)').matches ? setTheme("light") : setTheme("dark");
        }
    }

    return (
        <Button
            variant="outline"
            size="icon"
            className="bg-transparent"
            id="theme-toggle"
            onClick = { handleChangeTheme }
        >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}