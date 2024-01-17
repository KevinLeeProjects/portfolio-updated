"use client";

import TextAndStar from "@/components/TextAndStar";
import TextAndStarMobile from "@/components/TextAndStarMobile";
import SkillBubble from "@/components/SkillBubble";

import { FaGithub, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";

interface ProjectsDetailsProps {
    children: React.ReactNode,
    title: string,
    skillsArr: string[],
    desktopImagesArr: string[],
    githubLink: string
}

const ProjectsDetail: React.FC<ProjectsDetailsProps> = ({
    children,
    title,
    skillsArr,
    desktopImagesArr,
    githubLink
}) => {
    const skills = skillsArr;

    const desktopImages = desktopImagesArr;

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const [desktopVersion, setChangeView] = useState(true);

    const [NDA, setNDA] = useState(false);
    const [multiPic, setMultiPic] = useState(true);


    const previousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : desktopImages.length - 1));
    }

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex < desktopImages.length - 1 ? prevIndex + 1 : 0));
    }

    useEffect(() => {
        if(title == "Owting" || title == "NutriBytez")
        {
            setNDA(true);
            setMultiPic(false);
        }
    }, [])


    return (
        <div className="overflow-y-auto overflow-x-hidden w-[100vw] h-[100dvh]">
            <div className="mt-[100px] flex flex-col justify-center items-center text-center">
                <div className="hidden md:flex items-center justify-center">
                    <TextAndStar text={title} title={true} /> 
                </div>
                <div className="md:hidden flex items-center justify-center text-center w-[90vw] ml-[5vw]">
                    <TextAndStarMobile text={title} title={false} />
                </div>
                <div className="text-white flex gap-2 mt-[50px] w-[90vw] md:w-[20vw] flex-wrap items-center justify-center">
                    {skills.map((skill) => (
                        <SkillBubble skill={skill} key={skill}/>
                    ))}
                </div>
                {multiPic ? (
                    <div className="w-[98vw] md:w-[100vw] flex justify-center items-center mt-[50px]">
                        <FaArrowLeft className="hidden md:block text-white mr-[2.5vw] hover:cursor-pointer hover:text-[#B19CD9]" size={36} onClick={previousImage}/>
                        <div className="overflow-hidden relative flex flex-col gap-10 rounded-xl border-2 justify-center items-center" >
                            <div>
                                <img src={desktopImages[currentImageIndex]} alt="portfolio main" className="w-[100vw] h-[50vw] md:w-[40vw] md:h-[20vw]"/>
                            </div>
                        </div>
                        <FaArrowRight className="hidden md:block text-white ml-[2.5vw] hover:cursor-pointer hover:text-[#B19CD9]" size={36} onClick={nextImage}/>
                    </div>
                ) : (
                    <div className="overflow-hidden relative flex flex-col gap-10 rounded-xl border-2 justify-center items-center mt-[50px]" >
                        <div>
                            <img src={desktopImages[currentImageIndex]} alt="portfolio main" className="w-[100vw] h-[50vw] md:w-[40vw] md:h-[20vw]"/>
                        </div>
                </div>
                )}

                {multiPic ? (
                    <div className="hidden md:grid grid-cols-3 gap-3 mt-[20px]">
                        <button className="w-[10px] h-[10px] bg-[#B19CD9] rounded-full" onClick={previousImage}>

                        </button>
                        <button className="w-[10px] h-[10px] bg-[#483D8B] rounded-full">

                        </button>
                        <button className="w-[10px] h-[10px] bg-[#B19CD9] rounded-full" onClick={nextImage}>

                        </button>
                </div>
                ) : (
                    <div>
                    </div>
                )}

                {multiPic ? (
                    <div className="flex md:hidden mt-[10px] w-[100vw]">
                        <div className="flex w-[50vw] justify-start ml-[5vw]">
                            <FaArrowLeft className=" text-white hover:cursor-pointer hover:text-[#B19CD9]" size={36} onClick={previousImage}/>
                        </div>
                        <div className="flex w-[50vw] justify-end mr-[5vw]">
                            <FaArrowRight className="text-white hover:cursor-pointer hover:text-[#B19CD9]" size={36} onClick={nextImage}/>
                        </div>
                    </div>
                ) : (
                    <div>
                    </div>
                )}


                {NDA ? (
                    <div>
                    </div>
                ) : (
                    <a href={githubLink} className="flex flex-col items-center justify-center border py-2 px-5 rounded-lg mt-[30px] hover:bg-[#483D8B]">
                        <FaGithub size={36} className="text-white mt-[20px]"/>
                        <h1 className="text-white text-lg mt-[10px]">
                            {"GitHub"}
                        </h1>
                    </a>
                )}

                <div className="w-[75vw] md:w-[50vw] flex flex-col items-center text-start text-white mt-[50px] md:mt-[100px] pb-[100px]">
                    <h1 className="font-bold text-3xl md:text-5xl">
                        {"About the project"}
                    </h1>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ProjectsDetail;