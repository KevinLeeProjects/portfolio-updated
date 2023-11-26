import Navbar from '@/components/Navbar';
import Transition from "@/components/Transition";
import ProjectsPage from './components/ProjectsPage';

export default function Projects() {
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
          <ProjectsPage />
        </div>
      </Transition>
    </div>
  )
}
