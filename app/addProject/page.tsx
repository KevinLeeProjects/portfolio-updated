import Navbar from '@/components/Navbar';
import AddProject from './components/AddProjectPage';
import Transition from "@/components/Transition";

export default function Home() {
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
          <AddProject />
        </div>
      </Transition>
    </div>
  )
}
