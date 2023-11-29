import Navbar from '@/components/Navbar';
import Transition from "@/components/Transition";
import ProjectsDetail from '@/components/ProjectsDetail';
import LMSPage from './components/LMSPage';

export default function LMS() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "RESTful API", "PostgreSQL"];

  const desktopImages = ["/images/LMS/MainPage.png", "/images/LMS/GetBook.png", "/images/LMS/AddBook.png", "/images/LMS/GetUser.png", "/images/LMS/AddUser.png", "/images/LMS/Checkout.png", "/images/LMS/AllTransactions.png"];

  const github = "https://github.com/KevinLeeProjects/LibraryManagementSystem";

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
          <ProjectsDetail skillsArr={skills} desktopImagesArr={desktopImages} githubLink={github} title={"Library Management System"}>
            <LMSPage />
          </ProjectsDetail>
        </div>
      </Transition>
    </div>
  )
}
