import TextAndStar from "@/components/TextAndStar";
import ContactBubble from "./ContactBubble";
import TextAndStarMobile from "@/components/TextAndStarMobile";

const contactPage_socials = [
    {
        media: "Email",
        handle: "kevinlee.3191@gmail.com",
        link: "mailto:kevinlee.3191@gmail.com"
    },
    {
        media: "LinkedIn",
        handle: "Kevin Lee",
        link: "https://www.linkedin.com/in/kevin-lee-7534a3253/"
    },
    {
        media: "GitHub",
        handle: "KevinLeeProjects",
        link: "https://github.com/kevinleeprojects"
    },
    {
        media: "Instagram",
        handle: "k.evin.lee",
        link: "https://www.instagram.com/k.evin.lee/"
    }
]

const ContactPage = () => {
    return (
        <div className="
            w-[100vw]
            h-[100vh]
            overflow-x-hidden
        ">

            {/* Desktop */}
            <div className="
                mt-[100px]
                hidden
                md:flex
                flex-col
                w-[100vw]
                h-fit
                items-center
                text-center
            ">
                <div className="font-bold">
                    <TextAndStar text="Contact" title={true} />
                </div>
                <div className="
                    mt-[100px]
                    grid
                    grid-cols-2
                    gap-20
                ">
                    {contactPage_socials.map((item) => (
                        <div key={item.media}>
                            <ContactBubble media={item.media} handle={item.handle} link={item.link} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile */}
            <div className="
                mt-[100px]
                md:hidden
                flex
                flex-col
                w-[100vw]
                h-fit
                items-center
                text-center
            ">
                <div className="font-bold">
                    <TextAndStarMobile text="Contact" title={true} />
                </div>
                <div className="
                    mt-[100px]
                    flex
                    flex-col
                ">
                    {contactPage_socials.map((item) => (
                        <div key={item.media}>
                            <ContactBubble media={item.media} handle={item.handle} link={item.link} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactPage;