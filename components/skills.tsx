import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { skills } from "@/data/constants"
import Image from "next/image"

export default function Skills() {
    return (
        <Tabs defaultValue="languages" orientation="vertical">
            <h1 className="font-poppins font-[700] text-center text-xl leading-tight md:text-2xl lg:text-4xl mb-5">
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
                <TabsContent value={skill_type.toLowerCase()} className="data-[state=active]:skills-card" key={index}>
                    {skills[skill_type].map((skill, index) => (
                        <div className="flex flex-col items-center justify-center p-4" key={index}>
                            <Image src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.iconPath}.svg`} alt={skill.name} className="w-12 h-12" width={48} height={48} />
                            <p className="text-center">{skill.name}</p>
                        </div>
                    ))}
                </TabsContent>
            ))}
        </Tabs>
    )
}
