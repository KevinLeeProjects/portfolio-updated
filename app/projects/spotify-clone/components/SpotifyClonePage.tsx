"use client";

import TextAndStar from "@/components/TextAndStar";
import TextAndStarMobile from "@/components/TextAndStarMobile";
import SkillBubble from "../../components/SkillBubble";

import { FaGithub, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const SpotifyClonePage = () => {
    const skills= ["HTML", "CSS", "JavaScipt", "React", "Next.js", "Tailwind CSS", "Supabase", "Stripe API", "RESTful API", "PostgreSQL"];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const [desktopVersion, setChangeView] = useState(true);

    const desktopImages = ["/images/spotify/Main.png", "/images/spotify/Login.png", "/images/spotify/Search.png", "/images/spotify/Liked.png", "/images/spotify/Account.png"];

    const previousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : desktopImages.length - 1));
    }

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex < desktopImages.length - 1 ? prevIndex + 1 : 0));
    }


    return (
        <div className="overflow-y-auto overflow-x-hidden w-[100vw] h-[100dvh]">
            <div className="mt-[100px] flex flex-col justify-center items-center text-center">
                <div className="hidden md:flex items-center justify-center">
                    <TextAndStar text="Spotify-Clone" title={true} /> 
                </div>
                <div className="md:hidden flex items-center justify-center text-center w-[90vw] ml-[5vw]">
                    <TextAndStarMobile text="Spotify-Clone" title={false} />
                </div>
                <div className="text-white flex gap-2 mt-[50px] w-[90vw] md:w-[20vw] flex-wrap items-center justify-center">
                    {skills.map((skill) => (
                        <SkillBubble skill={skill} key={skill}/>
                    ))}
                </div>
                <div className="w-[98vw] md:w-[100vw] flex justify-center items-center mt-[50px]">
                    <FaArrowLeft className="hidden md:block text-white mr-[2.5vw] hover:cursor-pointer hover:text-[#B19CD9]" size={36} onClick={previousImage}/>
                    <div className="overflow-hidden relative flex flex-col gap-10 rounded-xl border-2 justify-center items-center" >
                        <div>
                            <img src={desktopImages[currentImageIndex]} alt="portfolio main" className="w-[100vw] h-[50vw] md:w-[40vw] md:h-[20vw]"/>
                        </div>
                    </div>
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
                <a href="https://github.com/KevinLeeProjects/spotify-clone" className="flex flex-col items-center justify-center border py-2 px-5 rounded-lg mt-[30px]">
                    <FaGithub size={36} className="text-white mt-[20px]"/>
                    <h1 className="text-white text-lg mt-[10px]">
                        {"GitHub"}
                    </h1>
                </a>
            </div>
        </div>
    );
};

export default SpotifyClonePage;