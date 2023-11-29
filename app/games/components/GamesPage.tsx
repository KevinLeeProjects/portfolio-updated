import TextAndStar from "@/components/TextAndStar";
import ProjectBubble from "../../../components/ProjectBubble";
import Star from "@/components/Star";

const games = [
    {title: "Night Terrors", imgSrc: "/images/nightTerrors/Monster.png", skills: ["C#", "Unity", "Photon Pun", "Firebase Database", "Firebase Auth"], href: "/night-terrors"},
    {title: "Portals of Power", imgSrc: "/images/portalsOfPower/Shoot.png", skills: ["C++", "Unreal Engine 5", "Firebase Database", "Firebase Auth", "AWS GameLift", "RESTful API"], href: "/portals-of-power"}
]

const GamesPage = () => {
    return (
<div className="
            h-[100dvh]
            overflow-y-auto
            overflow-x-hidden
            w-[100vw]
        ">
            {/* Desktop */}
            <div className="
                hidden
                mt-[100px]
                md:flex
                flex-col
                justify-between
                w-[100vw]
                items-center
                px-20
                h-fit
            ">
                <h1 className="
                    text-[5em]
                    font-bold
                    text-white
                    mt-[20px]
                ">
                    {"Games"}
                </h1>
                <div className="
                    w-[50vw]
                    text-center
                ">
                    <TextAndStar  text="These projects are just for fun and are not up to standard - at all. Please enjoy the goofy graphics and don't take them too seriously." title={false}/>
                </div>
                <div className="
                    grid
                    grid-cols-2
                    gap-40
                    mt-[10dvh]
                    mb-[40px]
                ">
                    {games.map((items) => (
                        <ProjectBubble key={items.title} desktop={true} imgSrc={items.imgSrc} title={items.title} skills={items.skills} href={`/games/${items.href}`}/>
                    ))}
                </div>
            </div>

            {/* Mobile */}
            <div className="
                md:hidden
                mt-[100px]
                sm:flex
                flex-col
                justify-between
                w-[100vw]
                items-center
                text-center
                h-fit
            ">
                <h1 className="
                    w-[100vw]
                    text-[2.25em]
                    font-bold
                    text-white
                    mt-[20px]
                ">
                    {"Games"}
                </h1>
                <div className="
                    w-[95vw]
                    ml-[2.5vw]
                    flex
                    text-center
                    items-center
                    justify-center
                    mt-[25px]
                ">
                    <div>
                        <Star mobile={true}/>
                    </div>
                    <h1 className="
                        text-white
                        text-lg
                    ">
                        {"These projects are just for fun and are not up to standard - at all. Please enjoy the goofy graphics and don't take them too seriously."}
                    </h1>
                    <div>
                        <Star mobile={true}/>
                    </div>
                </div>
                <div className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    mt-[10dvh]
                    mb-[40px]
                ">
                    {games.map((items) => (
                        <ProjectBubble key={items.title} desktop={false} imgSrc={items.imgSrc} title={items.title} skills={items.skills} href={`/games/${items.href}`}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GamesPage;