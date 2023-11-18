"use client";

import Image from "next/image";
import { Globe, ChevronLeft, ChevronRight } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { projects } from "@/data/constants";

import { motion, MotionConfig, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Projects() {
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [isFocus, setIsFocus] = useState(false);

    const handleLeftArrowClick = () => {
        setCurrentProjectIndex((previousProjectIndex) =>
            previousProjectIndex - 1 < 0
                ? projects.length - 1
                : previousProjectIndex - 1
        );
    };

    const handleRightArrowClick = () => {
        setCurrentProjectIndex((previousProjectIndex) =>
            previousProjectIndex + 1 === projects.length
                ? 0
                : previousProjectIndex + 1
        );
    };

    useEffect(() => {
        setIsTouchDevice(
            "ontouchstart" in window || navigator.maxTouchPoints > 0
        );

        if (isTouchDevice) {
            const handleTouchStart = (e: TouchEvent) => {
                const touch = e.touches[0];
                const startX = touch.clientX;
                const startY = touch.clientY;
                const projectContainer =
                    document.getElementById("projects-container");

                if (!projectContainer?.contains(touch.target as Node)) return;

                const handleTouchMove = (e: TouchEvent) => {
                    const touch = e.touches[0];
                    const diffX = touch.clientX - startX;
                    const diffY = touch.clientY - startY;

                    if (Math.abs(diffX) > Math.abs(diffY)) {
                        if (diffX > 0) {
                            handleLeftArrowClick();
                        } else {
                            handleRightArrowClick();
                        }
                    }

                    window.removeEventListener("touchmove", handleTouchMove);
                };

                window.addEventListener("touchmove", handleTouchMove);
            };

            window.addEventListener("touchstart", handleTouchStart);

            return () =>
                window.removeEventListener("touchstart", handleTouchStart);
        }
    }, [isTouchDevice]);

    return (
        <section id="projects" className="overflow-hidden py-10 lg:py-0">
            <MotionConfig
                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            >
                <div className="flex items-center relative h-max w-[90%] sm:w-4/5 md:w-4/6 lg:w-3/6 xl:w-2/4">
                    {!isTouchDevice && (
                        <AnimatePresence>
                            {isFocus && (
                                <motion.div
                                    className="absolute left-1.5 right-1.5 flex justify-between z-10"
                                    initial={
                                        isTouchDevice
                                            ? { opacity: 1 }
                                            : { opacity: 0 }
                                    }
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onHoverStart={() => setIsFocus(true)}
                                    onHoverEnd={() =>
                                        isTouchDevice ? null : setIsFocus(false)
                                    }
                                >
                                    <button
                                        onClick={handleLeftArrowClick}
                                        className="flex items-center justify-center w-10 h-10 bg-background rounded-full focus:outline-none"
                                    >
                                        <ChevronLeft />
                                    </button>
                                    <button
                                        onClick={handleRightArrowClick}
                                        className="flex items-center justify-center w-10 h-10 bg-background rounded-full focus:outline-none"
                                    >
                                        <ChevronRight />
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    )}

                    <motion.div
                        id="projects-container"
                        className="flex flex-nowrap w-full h-full"
                        initial={{ x: 0 }}
                        animate={{ x: -currentProjectIndex * 100 + "%" }}
                        onHoverStart={() => setIsFocus(true)}
                        onHoverEnd={() =>
                            isTouchDevice ? null : setIsFocus(false)
                        }
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                animate={{
                                    opacity:
                                        index === currentProjectIndex ? 1 : 0.4,
                                    scale:
                                        index === currentProjectIndex
                                            ? 1
                                            : isTouchDevice
                                            ? 0.96
                                            : 0.9,
                                }}
                                className="flex flex-col items-center justify-center rounded-lg min-w-full min-h-max shadow-lg dark:shadow-white/10 bg-card"
                            >
                                <div className="flex justify-center items-center overflow-y-hidden pt-2">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        priority={true}
                                        className="object-contain filter brightness-[90%] rounded-lg h-auto w-[95%] md:w-[90%] lg:w-[80%]"
                                    />
                                </div>

                                <div className="flex flex-col w-full p-3 rounded-b-lg h-fit md:w-5/6">
                                    <div className="flex flex-col items-center">
                                        <h1 className="text-primary font-bold text-xl md:text-2xl">
                                            {project.title}
                                        </h1>
                                        <p className="mx-1 text-secondary text-base md:text-lg">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-row items-center justify-between w-max mt-1.5">
                                        {project.github && (
                                            <TooltipProvider delayDuration={0}>
                                                <Tooltip>
                                                    <TooltipTrigger
                                                        tabIndex={-1}
                                                    >
                                                        <a
                                                            tabIndex={-1}
                                                            href={
                                                                project.github
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="mr-2 text-secondary hover:text-primary lg:mr-3"
                                                        >
                                                            <i className="devicon-github-plain text-3xl lg:text-4xl" />
                                                        </a>
                                                    </TooltipTrigger>
                                                    <TooltipContent side="top">
                                                        <p>GitHub Repo</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        )}
                                        {project.demo && (
                                            <TooltipProvider delayDuration={0}>
                                                <Tooltip>
                                                    <TooltipTrigger
                                                        tabIndex={-1}
                                                    >
                                                        <a
                                                            tabIndex={-1}
                                                            href={project.demo}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-secondary hover:text-primary"
                                                        >
                                                            <Globe className="w-[1.875rem] h-[1.875rem] lg:w-[2.25rem] lg:h-[2.25rem]" />
                                                        </a>
                                                    </TooltipTrigger>
                                                    <TooltipContent side="top">
                                                        <p>Demo</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-5">
                        <div className="flex gap-3 px-3 py-2 bg-background rounded-full opacity-80">
                            {[...projects].map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() =>
                                        setCurrentProjectIndex(index)
                                    }
                                >
                                    <div
                                        className={`w-2 h-2 rounded-full
                                        ${
                                            index === currentProjectIndex
                                                ? "bg-primary"
                                                : "bg-zinc-400 dark:bg-zinc-600"
                                        }`}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </MotionConfig>
        </section>
    );
}
