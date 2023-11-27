import TextAndStar from "@/components/TextAndStar";

const contactPage_socials = [
    {
        iClassName: "fa fa-envelope",
        media: "Email",
        handle: "kevinlee.3191@gmail.com",
        link: "mailto:kevinlee.3191@gmail.com"
    },
    {
        iClassName: "fa fa-linkedin-square",
        media: "LinkedIn",
        handle: "Kevin Lee",
        link: "https://www.linkedin.com/in/kevin-lee-7534a3253/"
    },
    {
        iClassName: "fa fa-github",
        media: "GitHub",
        handle: "KevinLeeProjects",
        link: "https://github.com/kevinleeprojects"
    },
    {
        iClassName: "fa fa-instagram",
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
            <div className="
                mt-[100px]
                flex
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
                    mt-[50px]
                    grid
                    grid-cols-2
                    gap-20
                ">
                    {contactPage_socials.map((item) => (
                        <div key={item.media}>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactPage;