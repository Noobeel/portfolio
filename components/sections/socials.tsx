import React from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { socials } from '@/data/constants';

export default function Socials() {
    return (
        <div className="fixed right-0 z-50 flex flex-col justify-center h-screen">
            <div className="flex flex-col justify-center w-max h-max backdrop-blur-md bg-white/10 bg-opacity-50 rounded-l-lg">
                {socials.map((social, index) => (
                    <TooltipProvider key={index} delayDuration={0}>
                        <Tooltip>
                            <TooltipTrigger>
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex w-10 h-10 p-2 m-2 text-gray-100 transition-all duration-300 transform rounded-full hover:scale-110 hover:bg-gray-700"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            </TooltipTrigger>
                            <TooltipContent side='left'>
                                <p>{social.name}</p>
                            </TooltipContent>
                        </Tooltip>
                  </TooltipProvider>
                ))}
            </div>
        </div>
    )
}