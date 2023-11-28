import Navbar from '@/components/Navbar';
import Transition from "@/components/Transition";
import AdminPage from './components/AdminPage';

export default function Admin() {
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
          <AdminPage />
        </div>
      </Transition>
    </div>
  )
}
