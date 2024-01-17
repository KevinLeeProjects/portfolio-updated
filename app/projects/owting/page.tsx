import Navbar from '@/components/Navbar';
import Transition from "@/components/Transition";
import OwtingPage from './components/OwtingPage';
import ProjectsDetail from '@/components/ProjectsDetail';

export default function Owting() {

    const skills = ["HTML", "CSS", "JavaScript", "React Native", "TypeScript"];

    const desktopImages = ["/images/owting/owting-home-page.png"];
  
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
                <ProjectsDetail skillsArr={skills} desktopImagesArr={desktopImages} githubLink={github} title={"Owting"}>
                    <OwtingPage />
                </ProjectsDetail>
            </div>
        </Transition>
        </div>
    )
}
