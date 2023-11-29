import Navbar from '@/components/Navbar';
import Transition from "@/components/Transition";
import ProjectsDetail from '@/components/ProjectsDetail';
import NightTerrorsPage from './components/NightTerrorsPage';

export default function NightTerrors() {
  const skills = ["C#", "Unity", "Photon Pun", "Firebase Database", "Firebase Auth"];

  const desktopImages = ["/images/nightTerrors/Monster.png", "/images/nightTerrors/WeaponPiece.png", "/images/nightTerrors/WeaponPieceTwo.png", "/images/nightTerrors/Fountain.png"];

  const github = "https://github.com/KevinLeeProjects/Night-Terrors";

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
          <ProjectsDetail skillsArr={skills} desktopImagesArr={desktopImages} githubLink={github} title={"Night Terrors"}>
            <NightTerrorsPage />
          </ProjectsDetail>
        </div>
      </Transition>
    </div>
  )
}
