import Star from "@/components/Star";
import SkillBubble from "./SkillBubble";

import Link from "next/link";

interface ProjectBubbleProps {
    desktop: boolean,
    imgSrc: string,
    title: string,
    skills: string[],
    href: string  
}

const ProjectBubble: React.FC<ProjectBubbleProps> = ({
    desktop,
    imgSrc,
    title,
    skills,
    href
}) => {
    return (
        <>
            {desktop ? (
                <Link href={href}>
                    <div className="
                        flex
                        flex-col
                        transition-transform
                        transform
                        group
                        w-[35vw]
                        rounded-3xl
                        overflow-hidden
                        hover:cursor-pointer
                    ">
                        <img src={imgSrc} className="
                            group-hover:scale-110 
                            max-w-full
                            h-[17vw]
                        "
                            style={{zIndex: 1}}
                        />
                        <div className="
                            bg-[#483D8B]
                            w-[35vw]
                            h-[25dvh]
                            text-center
                            pt-[10px]
                            pb-[30px]
                            flex
                            flex-col
                            text-white
                            items-center
                            justify-center
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
                                    text-3xl
                                ">
                                    {title}
                                </h1>
                                <div className="ml-[20px]">
                                    <Star mobile={true}/>
                                </div>
                            </div>
                            <div className="
                                text-lg
                                mt-[20px]
                                flex
                                justify-center
                                flex-wrap
                                gap-4
                                w-[90%]
                            "
                            >
                                {skills.map((skill) => (
                                    <SkillBubble skill={skill} key={skill}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </Link>
            ) : (
                <Link href={href}>
                    <div className="
                        flex
                        flex-col
                        transition-transform
                        transform
                        group
                        w-[90vw]
                        rounded-3xl
                        overflow-hidden
                        hover:cursor-pointer
                        mb-[20px]
                    ">
                        <img src={imgSrc} className="
                            group-hover:scale-110 
                            max-w-full
                            w-[100%]
                        "
                            style={{zIndex: 1}}
                        />
                        <div className="
                            bg-[#483D8B]
                            w-[100%]
                            h-fit
                            py-[20px]
                            text-center
                            flex
                            flex-col
                            text-white
                            items-center
                            justify-center
                        "
                            style={{zIndex: 2}}
                        >
                            <div className="
                                flex
                                items-center
                                justify-center
                            ">
                                <h1 className="
                                    text-xl
                                ">
                                    {title}
                                </h1>
                            </div>
                            <div className="
                                text-sm
                                mt-[3dvh]
                                flex
                                justify-center
                                flex-wrap
                                gap-4
                                w-[90%]
                            "
                            >
                                {skills.map((skill) => (
                                    <SkillBubble skill={skill} key={skill}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </Link>
            )}
        </>
    )
}

export default ProjectBubble;