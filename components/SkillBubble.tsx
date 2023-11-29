interface SkillBubbleProps {
    skill: string
}

const SkillBubble: React.FC<SkillBubbleProps> = ({
    skill
}) => {
    return (
        <div className="
            rounded-full
            w-fit
            px-4
            bg-[#B19CD9]
        ">
            {skill}
        </div>
    );
};

export default SkillBubble;