import menu from "../assets/menu.png"
import logoHead from "../assets/logoHead.png"
import { useEffect, useState } from "react";
import emailLogo from "../assets/emailLogo.png"
import instagranLogo from "../assets/instagranLogo.png"
import linkedinLogo from "../assets/linkedinLogo.png"
import wathsappLogo from "../assets/wathsappLogo.png"

function Header() {

    const [scrolled, setScrolled] = useState(false)

    const checkScrollPosition = () => {
        if (window.scrollY > 80)
            setScrolled(true)
        else
            setScrolled(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', checkScrollPosition)
        return () => {
            window.removeEventListener('scroll', checkScrollPosition)
        }
    })

    return (
        <header id="Header" className={`fixed transition duration-500 z-5 top-0 w-screen px-[20px] xl:px-[30px] flex justify-between items-center ${scrolled ? 'bg-cyan-950/80 backdrop-blur-md h-[80px] shadow-lg' : 'bg-transparent h-[100px]'}`}>
            <div className="">
                <img src={menu} alt="menu" className="w-[27px] cursor-pointer" />
            </div>
            <div className="flex items-center gap-3">
                <div className=" flex flex-col items-end md:flex-row-reverse">
                    <a href="https://www.instagram.com/dra.v_luizmacedoadvogada/" target="_blank" className="text-white font-Inter font-extralight md:pl-[25px] text-[12px] md:text-[18px]">@dra.v_luizmacedoadvogada</a>
                    <a href="https://wa.me/+5511996669191" target="_blank" className="text-white font-Inter font-extralight md:pr-[25px] md:border-r-white md:border-r text-[12px] md:text-[18px]">+55 11 99666-9191</a>
                </div>
                <div className="lg:flex items-center justify-center gap-3.5 mx-[8px] hidden">
                    <a href="" target="_blank">
                        <img src={emailLogo} alt="botão para o email" className="w-[33px]" />
                    </a>
                    <a href="https://wa.me/+5511996669191" target="_blank">
                        <img src={wathsappLogo} alt="botão para o whatsapp" className="w-[33px]" />
                    </a>
                    <a href="" target="_blank">
                        <img src={linkedinLogo} alt="botão para o linkedin" className="w-[33px]" />
                    </a>
                    <a href="https://www.instagram.com/dra.v_luizmacedoadvogada/" target="_blank">
                        <img src={instagranLogo} alt="botão para o instagram" className="w-[33px]" />
                    </a>
                </div>
                <a href="#Header">
                    <img src={logoHead} alt="logo" className={` transition duration-1000 ${scrolled ? 'w-[80px] h-[80px]' : 'w-[100px] h-[100px]'}`} />
                </a>
            </div>
        </header>
    )
}

export default Header;