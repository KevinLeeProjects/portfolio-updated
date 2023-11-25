import TextAndStar from "@/components/TextAndStar";

const expertise = [
    {title: "Software Development", skills: "C#, C++, Python, Java, JavaScript, and OOP"},
    {title: "Front End Development", skills: "HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS"},
    {title: "Back End Development", skills: "Node.js, REST APIs, ASP .NET, Django, and PostgreSQL"},
    {title: "Game Development", skills: "C# with Unity and C++ with Unreal Engine 5"},
]

const Main = () => {
    return (
        <div className="
            hidden
            mt-[100px]
            md:flex
            flex-col
            justify-between
            w-[90vw]
            items-center
            ml-[5vw]
            h-fit
        ">
            <h1 className="
                text-[10em]
                font-bold
                text-white
            ">
                Hi! I&apos;m Kevin
            </h1>
            <TextAndStar  text="FULL STACK SOFTWARE ENGINEER" title={false}/>
            <h1 className="
                text-[3em]
                text-white
                mt-[20px]
            ">
                My Expertise
            </h1>
            <div className="
                grid
                md:grid-cols-4
                md:gap-4
                mt-[50px]
            ">
                {expertise.map((items) => (
                    <div key={items.title} className="
                        flex
                        flex-col
                        items-center
                        justify-center
                        text-white
                        border
                        rounded-xl
                        p-6
                        text-center
                    ">
                        <h1 className="
                            text-4xl
                            font-bold
                        ">
                            {items.title}
                        </h1>
                        <h2 className="
                            text-3xl
                        ">
                            {items.skills}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
        
    );
};

export default Main;