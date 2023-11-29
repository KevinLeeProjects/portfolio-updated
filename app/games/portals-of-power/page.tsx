import Navbar from '@/components/Navbar';
import Transition from "@/components/Transition";
import ProjectsDetail from '@/components/ProjectsDetail';
import PortalsOfPowerPage from './components/PortalsOfPowerPage';

export default function PortalsOfPower() {
  const skills = ["C++", "Unreal Engine 5", "Firebase Database", "Firebase Auth", "AWS GameLift", "RESTful API"];

  const desktopImages = ["/images/portalsOfPower/Shoot.png", "/images/portalsOfPower/WASD.png", "/images/portalsOfPower/AbilityOne.png", "/images/portalsOfPower/Passive.png"];

  const github = "https://github.com/KevinLeeProjects/PortalsOfPower";

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
          <ProjectsDetail skillsArr={skills} desktopImagesArr={desktopImages} githubLink={github} title={"Portals Of Power"}>
            <PortalsOfPowerPage />
          </ProjectsDetail>
        </div>
      </Transition>
    </div>
  )
}
