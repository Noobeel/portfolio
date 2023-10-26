import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { skills } from "@/data/constants"

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

            <TabsContent value="languages" className="data-[state=active]:skills-card">
                {skills["Languages"].map((skill, index) => (
                    <div className="flex flex-col items-center justify-center m-3 px-3 w-max" key={index}>
                        <i className={`devicon-${skill.icon} text-4xl`}></i>
                        <p className="text-center whitespace-nowrap">{skill.name}</p>
                    </div>
                ))}
            </TabsContent>

            <TabsContent value="frameworks" className="data-[state=active]:skills-card">
                {skills["Frameworks"].map((skill, index) => (
                    <div className="flex flex-col items-center justify-center p-4" key={index}>
                        <i className={`devicon-${skill.icon} text-4xl`}></i>
                        <p className="text-center">{skill.name}</p>
                    </div>
                ))}
            </TabsContent>

            <TabsContent value="tools" className="data-[state=active]:skills-card">
                {skills["Tools"].map((skill, index) => (
                    <div className="flex flex-col items-center justify-center p-4" key={index}>
                        <i className={`devicon-${skill.icon} text-4xl`}></i>
                        <p className="text-center">{skill.name}</p>
                    </div>
                ))}
            </TabsContent>
        </Tabs>
    )
}
