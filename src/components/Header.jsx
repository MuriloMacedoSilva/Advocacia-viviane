import menu from "../assets/menu.png"
import logoHead from "../assets/logoHead.png"

function Header() {
    return (
        <header className=" w-screen px-[25px] flex justify-between items-center">
            <div className="">
                <img src={menu} alt="menu" className="w-[27px] cursor-pointer" />
            </div>
            <div className="flex items-center gap-3">
                <div className=" flex flex-col items-end md:flex-row-reverse">
                    <a href="" className="text-white font-Inter font-extralight md:pl-[25px] text-[12px] md:text-[15px]">@dra.v_luizmacedoadvogada</a>
                    <a href="" className="text-white font-Inter font-extralight md:pr-[25px] md:border-r-white md:border-r text-[12px] md:text-[15px]">+55 11 99666-9191</a>
                </div>
                <div>

                </div>
                <a href="">
                    <img src={logoHead} alt="logo" className="w-[80px] h-[80px]" />
                </a>
            </div>
        </header>
    )
}

export default Header;