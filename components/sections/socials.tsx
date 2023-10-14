import React from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { Github, Linkedin, Instagram, Mail} from 'lucide-react';

export default function Socials() {
    const socials = [
        {
            name: 'Email',
            url: 'mailto:nabeelasim0250@gmail.com',
            icon: <Mail />
        },
        {
            name: 'Github',
            url: 'https://github.com/noobeel',
            icon: <Github />
        },
        {
            name: 'LinkedIn',   
            url: 'https://www.linkedin.com/in/mnabeelasim/',
            icon: <Linkedin />
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/noobeelium/',
            icon: <Instagram />
        }
    ];

    return (
        <div className="fixed top-0 right-0 z-50 flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center w-max h-max bg-gray-800 bg-opacity-50 rounded-l-lg">
                {socials.map((social, index) => (
                    <TooltipProvider key={index} delayDuration={0}>
                        <Tooltip>
                            <TooltipTrigger>
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-10 h-10 p-2 m-2 text-gray-100 transition-all duration-300 transform rounded-full hover:scale-110 hover:bg-gray-700"
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