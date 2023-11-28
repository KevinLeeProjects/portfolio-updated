import Navbar from '@/components/Navbar';
import Transition from "@/components/Transition";
import PortfolioPage from './components/PortfolioPage';

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
          <PortfolioPage />
        </div>
      </Transition>
    </div>
  )
}
