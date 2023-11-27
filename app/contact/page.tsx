import Navbar from '@/components/Navbar';
import Transition from "@/components/Transition";
import ContactPage from './components/ContactPage';

export default function Contact() {
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
          <ContactPage />
        </div>
      </Transition>
    </div>
  )
}
