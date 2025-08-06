import menu from "../assets/menu.png"
import logoHead from "../assets/logoHead.png"

function Header() {
    return (
        <header className=" w-screen py-[20px] px-[20px] flex justify-between items-center">
            <div className="">
                <img src={menu} alt="menu" className="w-[30px] cursor-pointer" />
            </div>
            <div className="flex items-center gap-3">
                <div className=" flex flex-col items-end">
                    <a href="" className="text-white">@dra.v_luizmacedoadvogada</a>
                    <a href="" className="text-white">+55 11 99666-9191</a>
                </div>
                <img src={logoHead} alt="logo" className="w-[80px]" />
            </div>
        </header>
    )
}

export default Header;