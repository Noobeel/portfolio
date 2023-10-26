import Image from "next/image";
import { Globe } from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { projects } from '@/data/constants';

export default function Projects() {
    return (
        <section id="projects">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-10">
                {projects.map((project, index) => (
                    <div key={index} className="flex flex-col items-center justify-center p-4 rounded-lg shadow-lg dark:bg-gray-800 duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-lg hover:shadow-white/20">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="rounded-lg object-contain w-full h-full"
                        />

                        <div className="flex flex-col w-full h-full p-4 bg-gray-800 rounded-lg">
                            <h1 className="text-2xl font-bold text-gray-100">{project.title}</h1>
                            <p className="text-gray-300">{project.description}</p>
                            
                            <div className="flex flex-row items-center justify-between w-max mt-4">
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
                    </div>
                ))}
            </div>
        </section>
    )
}