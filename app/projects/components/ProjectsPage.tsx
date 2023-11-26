import TextAndStar from "@/components/TextAndStar";
import ProjectBubble from "./ProjectBubble";

const projects = [
    {title: "Portfolio", imgSrc: "/images/portfolio/Main.png", skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "C#"]},
    {title: "Portfolio", imgSrc: "/images/portfolio/Main.png", skills: [""]}
]

const ProjectsPage = () => {
    return (
        <div className="
            h-[100dvh]
            overflow-y-auto
            overflow-x-hidden
        ">
            {/* Desktop */}
            <div className="
                hidden
                mt-[100px]
                md:flex
                flex-col
                justify-between
                w-[100vw]
                items-center
                px-20
                h-fit
            ">
                <h1 className="
                    text-[5em]
                    font-bold
                    text-white
                    mt-[20px]
                ">
                    Notable Projects
                </h1>
                <div className="
                    w-[50vw]
                    text-center
                ">
                    <TextAndStar  text="These are my projects! More info can be found by clicking on them" title={false}/>
                </div>
                <div className="
                    flex
                    items-center
                    gap-20
                    mt-[10dvh]
                ">
                    {projects.map((items) => (
                        <ProjectBubble key={items.title} desktop={true} imgSrc={items.imgSrc} title={items.title} skills={items.skills}/>
                    ))}
                </div>
            </div>

            {/* Mobile */}
            <div>

            </div>
        </div>
    );
};

export default ProjectsPage;