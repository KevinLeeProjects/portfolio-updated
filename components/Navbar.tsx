"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {

    const [expanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
      setExpanded(!expanded);
    };

    const navbarTitles = [
        {name: "Projects", href: '/projects'},
        {name: "Games", href: "/games"},
        {name: "Resume", href: "/resume"},
        {name: "About Me", href: "/about"},
        {name: "Contact", href: "/contact"},
    ]

    return (
        <>
            {/* Desktop */}
            <div
                className="fixed top-0 left-0 w-full h-full bg-black opacity-[0.7]"
                style={{ zIndex: 1 }}
            >
            </div>
            <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi439WVDVOT0Q-vO-KwGV8rYyNdeg3NrA0u49KTRlaFoEg23Li_voKwdJ3QSX7XI3O9mjdjdgfXfGvGaK8h-ieUbupXH0bUYhqk6eFIJN8LFshuJvdPfyJsvggGNeiMZzNOlXa-yYE-FpyckLBkNMMp_Fc1VEkQgyZh1pkC0QPnOaeuh933z7DD0ZJU5Q/s1920-rw/HEROSCREEN.CC-12042022COZY-ROOM-PC-WALLPAPER.png"
                className="opacity-50 w-full h-full"
                alt="cozy background"
            />
            <div style={{ zIndex: 3 }}
                className="
                hidden
                group
                fixed
                md:flex
                items-center
                justify-between
                h-fit
                w-full
                max-h-[100px]
                ">
                <button className="hover:opacity-75 w-[100px] mt-[10px] ml-4" >
                    <Link
                        href="/"
                    >
                    </Link>
                    <img src="/images/KLLogoWhite.png" alt="banana with face"/>
                </button>
                <div className="
                    relative
                    flex
                    gap-10
                    text-white
                    mr-[10px]
                    text-2xl
                ">
                {navbarTitles.map((item) => (
                    <Link href={item.href} key={item.name}>
                    <button className="hover:bg-[#483D8B] py-[35px] px-[20px]">
                        {item.name}
                    </button>
                    </Link>
                ))}
                </div>
                
            </div>
            
                
            {/* Mobile */}
            <div style={{ zIndex: 3 }}
                className="
                md:hidden
                group
                fixed
                flex
                items-end
                justify-end
                h-fit
                w-full
            ">
                <div className="
                    mr-[20px]
                    mt-[20px]
                    mb-[20px]
                "
                    onClick={toggleExpansion}
                >
                    
                    {expanded ? (
                        <div className="
                            h-[90dvh]
                        ">
                            <div className="
                                h-[5px]
                                w-[35px]
                                mt-[5px]
                                bg-black
                                navBar_topBunAnimation
                                rounded-xl
                            ">
                            </div>
                            <div className="
                                h-[5px]
                                w-[35px]
                                bg-black
                                navBar_middleBunAnimation
                                mt-[4px]
                                rounded-xl
                            ">
                            </div>
                            <div className="
                                h-[5px]
                                w-[35px]
                                bg-white
                                mt-[4px]
                                rounded-xl
                                transition-all
                                duration-500
                                ease-in-out
                                pt-[150px]
                                "
                                style={{ width: '90vw', height: '100%', zIndex: 1 }}
                            >
                                <div className="
                                    flex
                                    flex-col
                                    text-black
                                    text-2xl
                                    items-center
                                "
                                    style={{zIndex: 4}}
                                >
                                    <Link href="/">
                                        <button key={"home"} className="hover:bg-[#483D8B] mb-[20px]">
                                            Home
                                        </button>
                                    </Link>
                                    {navbarTitles.map((item) => (
                                        <Link href={item.href} key={item.name} className="hover:bg-[#483D8B] mb-[20px]">
                                            <button>
                                                {item.name}
                                            </button>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="
                                h-[5px]
                                w-[35px]
                                bg-white
                                rounded-xl
                                mt-[5px]
                            "
                            >
                            </div>
                            <div className="
                                h-[5px]
                                w-[35px]
                                bg-white
                                rounded-xl
                                mt-[4px]
                            "
                            >
                            </div>
                            <div className="
                                h-[5px]
                                w-[35px]
                                bg-white
                                rounded-xl
                                mt-[4px]
                            "
                            >
                            </div>
                        </div>
                    )}
                    
                </div>
                
                {/* <button className="hover:opacity-75 w-[100px] mt-[10px] ml-4" >
                    <img src="/images/KLLogoWhite.png" alt="banana with face"/>
                </button>
                <div className="
                    relative
                    flex
                    gap-10
                    text-white
                    mr-[10px]
                    text-2xl
                ">
                {navbarTitles.map((item) => (
                    <button key={item.name} className="hover:bg-[#483D8B] py-[35px] px-[20px]">
                        {item.name}
                    </button>
                ))}
                </div>  */}
            </div>
        </>
    );
}

export default Navbar;