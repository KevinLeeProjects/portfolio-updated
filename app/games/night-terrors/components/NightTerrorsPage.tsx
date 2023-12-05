const NightTerrorsPage = () => {
    return (
        <h1 className="text-lg md:text-xl mt-[50px]">
            {"In this game, you can either play as a child stuck in a nightmare or as the monster that terrorizes them. As the child, you are placed in a team of 4 with the goal to find and collect all three weapon pieces."}
            {" Once found, you can craft the pieces into a powerful weapon to take down the monster and escape the nightmare!"}
            <br></br>
            {" As the monster, your goal is to stop the children from escaping. Since killing them is too easy, you have to jump scare them a couple times before finally taking them out of their misery."}
            <br></br>
            <br></br>
            {"This game was made in C# with Unity. I used Firebase Database and Firebase Auth to create a secure login and save system. Multiplayer functions were created with Photon Pun."}
            <br></br>
            <br></br>
            {"Art credit: @byyy.nathan and @hallokyree on Instagram"}
        </h1>
    );
};

export default NightTerrorsPage;