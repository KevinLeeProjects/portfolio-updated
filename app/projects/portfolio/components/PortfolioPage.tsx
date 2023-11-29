"use client";

import { useState } from "react";
import { FaGithub, FaArrowLeft, FaArrowRight } from "react-icons/fa";

import SkillBubble from "../../components/SkillBubble";
import TextAndStar from "@/components/TextAndStar";
import TextAndStarMobile from "@/components/TextAndStarMobile";

const PortfolioPage = () => {
    const skills= ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "C#", "ASP .NET", "RESTful API"];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const [desktopVersion, setChangeView] = useState(true);

    const desktopImages = ["/images/portfolio/Main.png", "/images/portfolio/Projects.png", "/images/portfolio/About.png", "/images/portfolio/Contact.png"];
    const mobileImages = ["/images/portfolio/MobileMain.png", "/images/portfolio/MobileProjects.png", "/images/portfolio/MobileAbout.png", "/images/portfolio/MobileContact.png"];
    const pageLabel = ["Main", "Projects", "About", "Contact"];

    const previousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : desktopImages.length - 1));
    }

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex < desktopImages.length - 1 ? prevIndex + 1 : 0));
    }

    const changeView = () => {
        setChangeView(!desktopVersion);   
    }

    return (
        <div className="
            h-[100dvh]
            overflow-y-auto
            overflow-x-hidden
            w-[100vw]
        ">
            <div className="mt-[100px] flex flex-col items-center text-center h-fit pb-20">
                {/* <h1 className="text-white font-bold text-5xl">
                    {"Portfolio"}
                </h1> */}
                <div className="hidden md:block font-bold">
                    <TextAndStar text="Portfolio" title={true} />
                </div>
                <div className="md:hidden block font-bold">
                    <TextAndStarMobile text="Portfolio" title={true} />
                </div>
                <div className="text-white flex gap-2 mt-[50px] w-[90vw] md:w-[20vw] flex-wrap items-center justify-center">
                    {skills.map((skill) => (
                        <SkillBubble skill={skill} key={skill}/>
                    ))}
                </div>
                <h1 className="text-white text-lg mt-[50px] md:mt-[100px] mb-[10px] w-[90vw]">
                    <span>{"Click below to see what the "}</span>
                    {desktopVersion ? (
                        <span>
                            {"mobile"}
                        </span>
                    ) : (
                        <span>
                            {"desktop"}
                        </span>
                    )}
                    <span>{" version looks like! And click the arrows to see more pages!"}</span>
                </h1>
                
                <div className="w-[98vw] md:w-[100vw] flex justify-center items-center hover:cursor-pointer">
                    <FaArrowLeft className="hidden md:block text-white mr-[2.5vw] hover:cursor-pointer hover:text-[#B19CD9]" size={36} onClick={previousImage}/>
                    {desktopVersion ? (
                        <div className="overflow-hidden relative flex flex-col gap-10 rounded-xl border-2 justify-center items-center"  onClick={changeView}>
                            <div>
                                <img src={desktopImages[currentImageIndex]} alt="portfolio main" className="w-[100vw] h-[50vw] md:w-[40vw] md:h-[20vw]"/>
                            </div>
                    </div>
                    ) : (
                        <div className="overflow-hidden relative flex flex-col gap-10 rounded-xl border-2 justify-center items-center"  onClick={changeView}>
                            <div>
                                <img src={mobileImages[currentImageIndex]} alt="portfolio main" className="w-[50vw] h-[100vw] md:w-[9vw] md:h-[20vw]"/>
                            </div>
                        </div>
                    )}
                    <FaArrowRight className="hidden md:block text-white ml-[2.5vw] hover:cursor-pointer hover:text-[#B19CD9]" size={36} onClick={nextImage}/>
                </div>
                <div className="hidden md:grid grid-cols-3 gap-3 mt-[20px]">
                        <button className="w-[10px] h-[10px] bg-[#B19CD9] rounded-full" onClick={previousImage}>

                        </button>
                        <button className="w-[10px] h-[10px] bg-[#483D8B] rounded-full">

                        </button>
                        <button className="w-[10px] h-[10px] bg-[#B19CD9] rounded-full" onClick={nextImage}>

                        </button>
                </div>
                <div className="flex md:hidden mt-[10px] w-[100vw]">
                    <div className="flex w-[50vw] justify-start ml-[5vw]">
                        <FaArrowLeft className=" text-white hover:cursor-pointer hover:text-[#B19CD9]" size={36} onClick={previousImage}/>
                    </div>
                    <div className="flex w-[50vw] justify-end mr-[5vw]">
                        <FaArrowRight className="text-white hover:cursor-pointer hover:text-[#B19CD9]" size={36} onClick={nextImage}/>
                    </div>
                </div>
                <div className="text-white flex gap-2 md:gap-10 text-lg md:text-3xl mt-[50px]">
                    <a href="https://github.com/KevinLeeProjects/portfolio-updated" className="mr-[5vw] flex flex-col items-center text-center gap-2 md:gap-10 border p-2 md:p-10 rounded-2xl hover:bg-[#483D8B]">
                        <FaGithub />
                        <h1>
                            {"GitHub - Frontend"}
                        </h1>
                    </a>
                    <a href="https://github.com/KevinLeeProjects/Portfolio_Backend" className=" flex flex-col items-center text-center gap-2 md:gap-10 border p-2 md:p-10 rounded-2xl hover:bg-[#483D8B]">
                        <FaGithub />
                        <h1>
                            {"GitHub - Backend"}
                        </h1>
                    </a>
                </div>
                <div className="w-[75vw] md:w-[90vw] flex flex-col items-start text-start text-white mt-[50px] md:mt-[100px]">
                     <h1 className="font-bold text-3xl md:text-5xl">
                        {"About the project"}
                     </h1>
                     <h1 className="text-lg md:text-xl mt-[10px]">
                        {"This is my portfolio! I used React, HTML, Tailwind CSS, and Next.js to create a dynamic site that suits both desktop and mobile devices! "}
                        <br></br>
                        {"The most notable feature between desktop and mobile is the navigation bar. On mobile devices, you get a hamburger menu where the two top buns"}
                        {"  transform into an X and the bottom bun expands to show the list of content. "}
                        <br></br>
                        <br></br>
                        {"I also created a backend in C# and ASP .NET to manage all of my projects. I implemented a hash and salt algorithm to authenticate a secure log in and all of my data"}
                        {" is stored in a PostgreSQL server, which can be stored and retrieved through GET and POST requests."}
                        <br></br>
                        <br></br>
                        {"I hope you can learn a little more about me and my projects and make sure to contact me for any software engineer opportunities!"}
                     </h1>
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;