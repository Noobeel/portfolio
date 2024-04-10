import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skills } from "@/data/constants";
import Image from "next/image";

export default function Skills() {
    return (
        <Tabs
            defaultValue="languages"
            orientation="vertical"
            className="flex flex-col items-center justify-center mb-2"
        >
            <h1 className="font-poppins font-bold text-2xl text-center text-primary md:text-3xl m-2 mt-4 sm:mt-5 lg:mt-2">
                Skills
            </h1>

            <div className="flex flex-row justify-center">
                <TabsList>
                    <TabsTrigger value="languages">Languages</TabsTrigger>
                    <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
                    <TabsTrigger value="tools">Tools</TabsTrigger>
                </TabsList>
            </div>

            {Object.keys(skills).map((skill_type, index) => (
                <TabsContent
                    value={skill_type.toLowerCase()}
                    className="data-[state=active]:skills-card shadow-lg dark:shadow-white/10"
                    key={index}
                >
                    {skills[skill_type].map((skill, index) => (
                        <div
                            className="flex flex-col items-center justify-center p-3 md:px-4 lg:px-6"
                            key={index}
                        >
                            <Image
                                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.iconPath}.svg`}
                                alt={skill.name}
                                width={0}
                                height={0}
                                className={`w-10 h-10 sm:w-12 sm:h-12 ${
                                    skill.name == "Django" &&
                                    "dark:mix-blend-plus-lighter"
                                }`}
                            />
                            <p className="text-center">{skill.name}</p>
                        </div>
                    ))}
                </TabsContent>
            ))}
        </Tabs>
    );
}
