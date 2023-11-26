import React from "react";

interface StarProps{
    mobile: boolean
}

const Star: React.FC<StarProps> = ({
    mobile
}) => {
    return (
        <>
        {mobile ? (
            <div className="
                text-6xl
                text-white
                pulse
            ">
                <span>&#10022;</span>
            </div>
        ) : (
            <div className="
                text-8xl
                text-white
                pulse
            ">
                <span>&#10022;</span>
            </div>
        )}
        
        </>
    )
}

export default Star;