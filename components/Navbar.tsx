const Navbar = () => {

    const navbarTitles = [
        {name: "Projects"},
        {name: "Games"},
        {name: "Resume"},
        {name: "About Me"},
        {name: "Contact"},
    ]

    return (
        <>
            {/* Desktop */}
            <div
                className="fixed top-0 left-0 w-full h-full bg-black opacity-[0.7]"
                style={{ zIndex: 1 }}
            >
            </div>
            <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi439WVDVOT0Q-vO-KwGV8rYyNdeg3NrA0u49KTRlaFoEg23Li_voKwdJ3QSX7XI3O9mjdjdgfXfGvGaK8h-ieUbupXH0bUYhqk6eFIJN8LFshuJvdPfyJsvggGNeiMZzNOlXa-yYE-FpyckLBkNMMp_Fc1VEkQgyZh1pkC0QPnOaeuh933z7DD0ZJU5Q/s1920-rw/HEROSCREEN.CC-12042022COZY-ROOM-PC-WALLPAPER.png"
                className="opacity-50 w-full h-full"
                alt="cozy background"
            />
            <div style={{ zIndex: 3 }}
                className="
                hidden
                group
                fixed
                md:flex
                items-center
                justify-between
                h-fit
                w-full
                max-h-[100px]
                ">
                <button className="hover:opacity-75 w-[100px] mt-[10px] ml-4" >
                    <img src="/images/KLLogoWhite.png" alt="banana with face"/>
                </button>
                <div className="
                    relative
                    flex
                    gap-10
                    text-white
                    mr-[10px]
                    text-2xl
                ">
                {navbarTitles.map((item) => (
                    <button key={item.name} className="hover:bg-[#483D8B] py-[35px] px-[20px]">
                        {item.name}
                    </button>
                ))}
                </div>
                
            </div>
            
                
            {/* Mobile */}
            <div>

            </div>
        </>
    );
}

export default Navbar;