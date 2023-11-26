import TextAndStar from "@/components/TextAndStar";
import ProjectBubble from "./ProjectBubble";

const projects = [
    {title: "Portfolio", imgSrc: "/images/portfolio/Main.png", skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "C#", "ASP .NET", "RESTful API"], href: "/portfolio"},
    {title: "Spotify-Clone", imgSrc: "/images/spotify/Main.png", skills: ["HTML", "CSS", "JavaScipt", "React", "Next.js", "Tailwind CSS", "Supabase", "Stripe API", "RESTful API", "PostgreSQL"], href: "/spotify-clone"},
    {title: "Library Management System", imgSrc: "/images/LMS/MainPage.png", skills: ["HTML", "CSS", "JavaScipt", "React", "Node.js", "RESTful API", "PostgreSQL"], href: "/library-management-system"}

]

const ProjectsPage = () => {
    return (
        <div className="
            h-[100dvh]
            overflow-y-auto
            overflow-x-hidden
            w-[100vw]
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
                    grid
                    grid-cols-2
                    gap-40
                    mt-[10dvh]
                    mb-[40px]
                ">
                    {projects.map((items) => (
                        <ProjectBubble key={items.title} desktop={true} imgSrc={items.imgSrc} title={items.title} skills={items.skills} href={`/projects/${items.href}`}/>
                    ))}
                </div>
            </div>

            {/* Mobile */}
            <div className="
                md:hidden
            ">

            </div>
        </div>
    );
};

export default ProjectsPage;