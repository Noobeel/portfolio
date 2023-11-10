"use client"

import React from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { motion } from 'framer-motion';
import { socials } from '@/data/constants';

export default function Socials() {
    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
            className="fixed right-0 z-50 flex flex-col justify-center h-screen"
        >
            <div className="flex flex-col justify-center w-max h-max backdrop-blur-md rounded-l-lg bg-gradient-to-r from-gray-900 to-slate-800">
                {socials.map((social, index) => (
                    <TooltipProvider key={index} delayDuration={0}>
                        <Tooltip>
                            <TooltipTrigger>
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex w-10 h-10 p-2 m-2 transition-all duration-300 transform rounded-full hover:scale-110 hover:bg-gray-700"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            </TooltipTrigger>
                            <TooltipContent side='left' className='bg-background'>
                                <p>{social.name}</p>
                            </TooltipContent>
                        </Tooltip>
                </TooltipProvider>
                ))}
            </div>
        </motion.div>
    )
}