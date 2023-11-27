import TextAndStar from "@/components/TextAndStar";
import TextAndStarMobile from "@/components/TextAndStarMobile";

const ResumePage = () => {

    const resumeUrl = 'https://docs.google.com/document/d/1FEtqc8Csxmi_bwxulxQDw0jtJXMK_qs2/edit?usp=sharing&ouid=111594598891534114381&rtpof=true&sd=true';

    return (
        <div className="
            overflow-y-auto
            overflow-x-hidden
            w-[100vw]
            h-[100dvh]
        ">
            <div className="
                mt-[100px]
                flex
                flex-col
                w-[100vw]
                items-center
                px-20
                h-fit
                text-center
            ">
                {/* Desktop */}
                <div className="font-bold hidden md:block">
                    <TextAndStar  text="My Resume" title={true}/>
                </div>

                {/* Mobile */}
                <div className="font-bold md:hidden block">
                    <TextAndStarMobile  text="My Resume" title={true}/>
                </div>
                <div className="
                    text-white
                    md:text-3xl
                    sm:text-lg
                ">
                    <span>Click </span><a href={resumeUrl} download className="text-blue-500">here</a><span> to view in Google Docs</span>
                </div>
                {/* Desktop */}
                <div className="
                    hidden
                    md:block
                    h-[90dvh]
                    mt-20
                    mb-20
                ">
                    <img src="/images/resume/Kevin_Lee_Resume-1.png" alt="resume" className="h-full w-full"/>
                </div>
                {/* Mobile */}
                <div className="
                    md:hidden
                    sm:block
                    w-[90vw]
                    h-[60dvh]
                    mt-10
                    mb-20
                ">
                    <img src="/images/resume/Kevin_Lee_Resume-1.png" alt="resume" className="h-full w-full"/>
                </div>
            </div>

        </div>
    )
}

export default ResumePage;