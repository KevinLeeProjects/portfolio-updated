import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

interface ContactBubbleProps {
    media: string,
    handle: string,
    link: string
}

function getLabel(mediaName: string) {
    switch (mediaName){
        case "Email":
            return <FaEnvelope />
        case "LinkedIn":
            return <FaLinkedin />
        case "GitHub":
            return <FaGithub />
        default:
            return <FaInstagram />
    }
}

const ContactBubble:React.FC<ContactBubbleProps> = ({
    media,
    handle,
    link
}) => {
    return (
        <a href={link} className="w-full h-full">

            {/* Desktop */}
            <div className="hidden md:flex flex-col rounded-xl border px-20 py-10 text-white font-bold hover:bg-[#483D8B]">
                <div className="flex justify-center items-center text-center text-3xl">
                    <div className="mr-[20px]">
                        {getLabel(media)}
                    </div>
                    <h1>
                        {media}
                    </h1>
                </div>
                <h1 className="text-2xl">
                    {handle}
                </h1>
            </div>

            {/* Mobile */}
            <div className="md:hidden flex flex-col rounded-xl border px-10 py-5 text-white font-bold hover:bg-[#483D8B] mb-[20px]">
                <div className="flex justify-center items-center text-center text-xl">
                    <div className="mr-[20px]">
                        {getLabel(media)}
                    </div>
                    <h1>
                        {media}
                    </h1>
                </div>
                <h1 className="text-lg">
                    {handle}
                </h1>
            </div>
        </a>
    );
};

export default ContactBubble;