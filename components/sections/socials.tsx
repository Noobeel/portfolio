"use client";

import { useState, useEffect } from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { ChevronLeft } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { socials } from "@/data/constants";

export default function Socials() {
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (isTouchDevice) {
            const heroHeight = document
                .getElementById("hero")
                ?.getBoundingClientRect().height;

            if (heroHeight && latest > heroHeight * 0.3) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
        }
    });

    useEffect(() => {
        setIsTouchDevice(
            "ontouchstart" in window || navigator.maxTouchPoints > 0
        );
    }, [isTouchDevice]);

    return (
        <>
            <motion.button
                variants={{
                    hidden: {
                        x: 100,
                        opacity: 0.5,
                    },
                    visible: {
                        x: 0,
                        opacity: 1,
                    },
                }}
                initial="hidden"
                animate={isHidden ? "visible" : "hidden"}
                transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
                className={`fixed right-0 z-20 flex items-start mt-20 p-1 py-2 rounded-l-full bg-gradient-to-r from-gray-300 to-[#b0b0b0] dark:from-gray-900 dark:to-slate-800`}
                aria-label="Socials"
                onClick={() => setIsHidden(false)}
            >
                <ChevronLeft />
            </motion.button>

            <motion.div
                variants={{
                    hidden: {
                        x: 100,
                        opacity: 0,
                    },
                    visible: {
                        x: 0,
                        opacity: 1,
                    },
                }}
                initial="hidden"
                animate={isHidden ? "hidden" : "visible"}
                transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
                className="fixed right-0 z-20 flex items-start mt-20 h-max sm:items-center sm:h-screen sm:mt-0"
            >
                <div className="flex flex-col justify-center items-center w-max h-max backdrop-blur-md rounded-l-lg bg-gradient-to-r from-gray-300 to-[#c4c4c4] dark:from-gray-900 dark:to-slate-800">
                    {socials.map((social, index) => (
                        <TooltipProvider key={index} delayDuration={0}>
                            <Tooltip>
                                <TooltipTrigger>
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center justify-center w-8 h-8 m-2 transition-all duration-300 transform rounded-full ${
                                            !isTouchDevice &&
                                            "hover:scale-110 hover:bg-secondary hover:text-background"
                                        } sm:w-10 sm:h-10 sm:p-2`}
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent
                                    side="left"
                                    className="bg-background"
                                    hideWhenDetached={true}
                                >
                                    <p>{social.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ))}
                </div>
            </motion.div>
        </>
    );
}
