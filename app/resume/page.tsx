import Navbar from '@/components/Navbar';
import Transition from "@/components/Transition";
import ResumePage from './components/ResumePage';

export default function Resume() {
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
          <ResumePage />
        </div>
      </Transition>
    </div>
  )
}
