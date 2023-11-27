import Navbar from '@/components/Navbar';
import Transition from "@/components/Transition";
import AboutMePage from './components/AboutMePage';

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
          <AboutMePage />
        </div>
      </Transition>
    </div>
  )
}
