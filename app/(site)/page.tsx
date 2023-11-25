import Navbar from '@/components/Navbar';
import Main from './components/Main';

export default function Home() {
  return (
    <div  className="
      flex
      h-full
      flex-col
    ">
      <Navbar />
      <div className="
        absolute
        top:0
        left:0
      "
        style={{zIndex: 2}}
      >
        <Main />
      </div>
      
      
    </div>
  )
}
