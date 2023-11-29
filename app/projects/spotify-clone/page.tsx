import Navbar from '@/components/Navbar';
import Transition from "@/components/Transition";
import SpotifyClonePage from './components/SpotifyClonePage';

export default function Portfolio() {
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
          <SpotifyClonePage />
        </div>
      </Transition>
    </div>
  )
}
