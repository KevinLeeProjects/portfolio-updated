import Navbar from '@/components/Navbar';
import Transition from "@/components/Transition";
import SpotifyClonePage from './components/SpotifyClonePage';
import ProjectsDetail from '@/components/ProjectsDetail';

export default function Portfolio() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Supabase", "Stripe API", "RESTful API", "PostgreSQL"];

  const desktopImages = ["/images/spotify/Main.png", "/images/spotify/Login.png", "/images/spotify/Search.png", "/images/spotify/Liked.png", "/images/spotify/Account.png"];

  const github = "https://github.com/KevinLeeProjects/spotify-clone";

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
          <ProjectsDetail skillsArr={skills} desktopImagesArr={desktopImages} githubLink={github} title={"Spotify-Clone"}>
            <SpotifyClonePage />
          </ProjectsDetail>
        </div>
      </Transition>
    </div>
  )
}
