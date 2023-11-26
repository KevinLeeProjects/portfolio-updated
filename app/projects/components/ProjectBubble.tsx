import Star from "@/components/Star";
import SkillBubble from "./SkillBubble";

interface ProjectBubbleProps {
    desktop: boolean,
    imgSrc: string,
    title: string,
    skills: string[]  
}

const ProjectBubble: React.FC<ProjectBubbleProps> = ({
    desktop,
    imgSrc,
    title,
    skills
}) => {
    return (
        <>
            {desktop ? (
                <div className="
                    flex
                    flex-col
                    transition-transform
                    transform
                    group
                    w-[40vw]
                    rounded-3xl
                    overflow-hidden
                ">
                    <img src={imgSrc} className="
                        group-hover:scale-110 
                        max-w-full
                        max-h-full
                    "
                        style={{zIndex: 1}}
                    />
                    <div className="
                        bg-[#483D8B]
                        w-[40vw]
                        h-[200px]
                        text-center
                        py-[30px]
                        text-white
                    "
                        style={{zIndex: 2}}
                    >
                        <div className="
                            flex
                            items-center
                            justify-center
                        ">
                            <div className="mr-[20px]">
                                <Star mobile={true}/>
                            </div>
                            <h1 className="
                                text-4xl
                            ">
                                {title}
                            </h1>
                            <div className="ml-[20px]">
                                <Star mobile={true}/>
                            </div>
                        </div>
                        <div className="
                            text-2xl
                            mt-[40px]
                            flex
                            justify-center
                            gap-4
                        "
                        >
                            {skills.map((skill) => (
                                <SkillBubble skill={skill} key={skill}/>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                </div>
            )}
        </>
    )
}

export default ProjectBubble;