import React from "react";
import Star from "./Star";

interface TextAndStarProps {
    text: string,
    title: boolean
}

const TextAndStar: React.FC<TextAndStarProps> = ({
    text,
    title
}) => {
    return (
        <div className="
            flex
            items-center
            justify-between
        ">
            <div className="
                mr-[20px]
            ">
                <Star/>
            </div>
            {title ? (
                <h1 className="
                    text-white
                    text-[5em]
                ">
                    {text}
                </h1>
            ) : (
                <h1 className="
                    text-white
                    text-[3em]
                ">
                    {text}
                </h1>
            )}
            
            <div className="
                ml-[20px]
            ">
                <Star/>
            </div>
        </div>
    );
};

export default TextAndStar;