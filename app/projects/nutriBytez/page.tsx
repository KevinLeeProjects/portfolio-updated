import Navbar from '@/components/Navbar';
import Transition from "@/components/Transition";
import NutriBytezPage from './components/NutriBytezPage';
import ProjectsDetail from '@/components/ProjectsDetail';

export default function NutriBytez() {

    const skills = ["React Native and ReactJS", "HTML", "CSS", "Tailwind", "JavaScript", "TypeScript", "C#", "ASP .NET", "PostgreSQL", "RESTful API"];

    const desktopImages = [""];
  
    const github = "";

    return (
        <div  className="
        flex
        h-full
        flex-col
        ">
        <Navbar />
        <Transition>
            <div className="
            absolute
            top:0
            left:0
            "
            style={{zIndex: 2}}
            >
                <ProjectsDetail skillsArr={skills} desktopImagesArr={desktopImages} githubLink={github} title={"NutriBytez"}>
                    <NutriBytezPage />
                </ProjectsDetail>
            </div>
        </Transition>
        </div>
    )
}
