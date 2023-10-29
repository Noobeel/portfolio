"use client"

import Image from "next/image";
import { Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { projects } from '@/data/constants';

import { motion, MotionConfig, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from "react";

export default function Projects() {
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [isFocus, setIsFocus] = useState(false);

    const handleLeftArrowClick = () => {
        setCurrentProjectIndex((previousProjectIndex) =>
            previousProjectIndex - 1 < 0 ? projects.length - 1 : previousProjectIndex - 1
        );
    }

    const handleRightArrowClick = () => {
        setCurrentProjectIndex((previousProjectIndex) =>
            previousProjectIndex + 1 === projects.length ? 0 : previousProjectIndex + 1
        );
    }

    useEffect(() => {
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

        if (isTouchDevice) {
            setIsFocus(true);
        }
    }, []);

    return (
        <section id="projects" className="overflow-hidden">
            <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
                <div className="flex items-center relative w-3/5 h-fit">
                    <AnimatePresence>
                        {isFocus && (
                            <motion.div
                                className="absolute left-2 right-2 flex justify-between z-10"
                                initial={isTouchDevice ? { opacity: 1 } : { opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onHoverStart={() => setIsFocus(true)}
                                onHoverEnd={() => isTouchDevice ? null : setIsFocus(false)}
                            >
                                <button onClick={handleLeftArrowClick} className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full shadow-lg focus:outline-none">
                                    <ChevronLeft className="text-gray-100 text-2xl" />
                                </button>
                                <button onClick={handleRightArrowClick} className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full shadow-lg focus:outline-none">
                                    <ChevronRight className="text-gray-100 text-2xl" />
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <motion.div
                        className="flex flex-nowrap w-full h-full"
                        initial={{ x: 0 }}
                        animate={{ x: -currentProjectIndex * 100 + '%' }}
                        onHoverStart={() => setIsFocus(true)}
                        onHoverEnd={() => isTouchDevice ? null : setIsFocus(false)}
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                animate={{ opacity: index === currentProjectIndex ? 1 : 0.3, scale: index === currentProjectIndex ? 1 : 0.9 }}
                                className="flex flex-col items-center justify-center rounded-lg min-w-full min-h-full bg-gray-800"
                            >
                                <div className="flex justify-center overflow-y-hidden flex-1">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width="0"
                                        height="0"
                                        sizes="100vh"
                                        priority={true}
                                        className="object-contain"
                                        style={{
                                            width: '90%',
                                            height: '100%'
                                        }}
                                    />
                                </div>

                                <div className="flex flex-col self-end w-full px-4 pb-4 rounded-b-lg h-fit">
                                    <div className="flex flex-col items-center">
                                        <h1 className="text-2xl font-bold text-gray-100">{project.title}</h1>
                                        <p className="text-gray-300 mx-2">{project.description}</p>
                                    </div>
                                    
                                    <div className="flex flex-row items-center justify-between w-max mt-4 mx-2">
                                        {project.github && (
                                            <TooltipProvider delayDuration={0}>
                                                <Tooltip>
                                                    <TooltipTrigger>
                                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="mr-3 text-gray-300 hover:text-gray-100">
                                                            <i className="devicon-github-plain text-4xl" />
                                                        </a>
                                                    </TooltipTrigger>
                                                    <TooltipContent side='top'>
                                                        <p>GitHub Repo</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        )}
                                        {project.demo && (
                                            <TooltipProvider delayDuration={0}>
                                                <Tooltip>
                                                    <TooltipTrigger>
                                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-100">
                                                            <Globe className="w-[2.25rem] h-[2.25rem]" />
                                                        </a>
                                                    </TooltipTrigger>
                                                    <TooltipContent side='top'>
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

                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10">
                        <div className="flex gap-3 px-3 py-2 bg-gray-400 rounded-full opacity-80">
                        {[...projects].map((_, index) => (
                            <button key={index} onClick={() => setCurrentProjectIndex(index)}>

                            <div
                                className={`w-2 h-2 rounded-full ${
                                index === currentProjectIndex ? "bg-white" : "bg-zinc-600"
                                }`}
                            />

                            </button>
                        ))}
                        </div>
                    </div>
                </div>
            </MotionConfig>
        </section>
    )
}