import Navbar from '@/components/Navbar';
import Transition from "@/components/Transition";
import GamesPage from './components/GamesPage';

export default function Games() {
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
          <GamesPage />
        </div>
      </Transition>
    </div>
  )
}
