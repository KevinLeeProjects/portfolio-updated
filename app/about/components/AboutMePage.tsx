import TextAndStar from "@/components/TextAndStar";
import TextAndStarMobile from "@/components/TextAndStarMobile";

const AboutMePage = () => {
    return (
        <div className="
            overflow-y-auto
            overflow-x-hidden
            w-[100vw]
            h-[100dvh]
        ">
            {/* Desktop */}
            <div className="
                mt-[100px]
                hidden
                md:flex
                flex-col
                w-[100vw]
                items-center
                px-20
                h-fit
                text-center
            ">
                <div className="
                    font-bold
                ">
                    <TextAndStar text="About Me" title={true} />
                </div>
                <div className="
                    flex
                    gap-10
                    mt-[100px]
                ">
                    <div className="
                        flex
                        flex-col
                        text-start
                        text-white
                        font-semibold
                        justify-center
                        text-2xl
                        w-[45vw]
                    ">
                        <h4 className="">
                            <span>Hi! I'm Kevin and I'm a full stack software engineer! 
                            I'm an avid gamer and programmer who likes to read and listen to music in my free time.</span></h4>
                        <br></br>
                        <h4 className="">
                            <span>I have experience using a variety of languages, frameworks, and tools. 
                            I started programming by making games as a hobby and have since gone into web development and software engineering in general.
                            I have the most experience using <span className="aboutMe_languages">HTML, CSS, JavaScript, React.js, C#, ASP .NET, Node.js, PostgreSQL, C++, Java, Django, and Python!</span></span>
                        </h4>
                        <br></br>
                        <h4 className="">
                            <span>In my free time, I enjoy playing games with my friends. 
                            I mainly play </span>
                            <a href="https://tracker.gg/valorant/profile/riot/BipoLeksh%23NA1/overview">Valorant (Gold 1)</a>
                            <span>, </span>
                            <a href="https://apex.tracker.gg/apex/profile/origin/BipoLeksh/overview">Apex Legends (Rookie 1)</a>
                            <span>, </span>
                            <a href="https://lolchess.gg/profile/na/bipoleksh/set9.5">TFT (Gold 3 and climbing)</a>
                            <span>, and </span>
                            <a href="https://www.op.gg/summoners/na/BipoLeksh">League of Legends (Plat 4)</a>
                            <span>, but I have knowledge of a plethora of other games and would love to talk to you about any of them!</span>
                        </h4>
                        <br></br>
                        <h4 className="">
                            You can find all the ways to contact me and check out my GitHub on the Contact page!
                        </h4>
                    </div>
                    <div className="
                        w-[45vw]
                        h-[50vh]
                        flex
                        justify-center
                    ">
                        <img src="/images/about/kevin.png" className="
                            h-[50vh]
                            rounded-tl-full
                            rounded-tr-full
                        "/>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className="
                mt-[100px]
                md:hidden
                flex
                flex-col
                w-[100vw]
                items-center
                justify-center
                px-20
                h-fit
                text-center
            ">
                <div className="
                    font-bold
                    w-[95vw]
                ">
                    <TextAndStarMobile text="About Me" title={true} />
                </div>
                <div className="
                    flex
                    gap-10
                    mt-[100px]
                ">
                    <div className="
                        text-start
                        text-white
                        font-semibold
                        text-2xl
                        w-[90vw]
                    ">
                        <h4 className="">
                            <span>Hi! I'm Kevin and I'm a full stack software engineer! 
                            I'm an avid gamer and programmer who likes to read and listen to music in my free time.</span></h4>
                        <br></br>
                        <h4 className="">
                            <span>I have experience using a variety of languages, frameworks, and tools. 
                            I started programming by making games as a hobby and have since gone into web development and software engineering in general.
                            I have the most experience using <span className="aboutMe_languages">HTML, CSS, JavaScript, React.js, C#, ASP .NET, Node.js, PostgreSQL, C++, Java, Django, and Python!</span></span>
                        </h4>
                        <br></br>
                        <h4 className="">
                            <span>In my free time, I enjoy playing games with my friends. 
                            I mainly play </span>
                            <a href="https://tracker.gg/valorant/profile/riot/BipoLeksh%23NA1/overview">Valorant (Gold 1)</a>
                            <span>, </span>
                            <a href="https://apex.tracker.gg/apex/profile/origin/BipoLeksh/overview">Apex Legends (Rookie 1)</a>
                            <span>, </span>
                            <a href="https://lolchess.gg/profile/na/bipoleksh/set9.5">TFT (Gold 3 and climbing)</a>
                            <span>, and </span>
                            <a href="https://www.op.gg/summoners/na/BipoLeksh">League of Legends (Plat 4)</a>
                            <span>, but I have knowledge of a plethora of other games and would love to talk to you about any of them!</span>
                        </h4>
                        <br></br>
                        <h4 className="">
                            You can find all the ways to contact me and check out my GitHub on the Contact page!
                        </h4>
                        <div className="
                            w-[90vw]
                            h-[50vh]
                            mb-[50px]
                            mt-[30px]
                            flex
                            justify-center
                            items-center
                        ">
                            <img src="/images/about/kevin.png" className="
                                h-[50vh]
                                rounded-tl-full
                                rounded-tr-full
                            "/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMePage;