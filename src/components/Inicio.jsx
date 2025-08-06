import backgroundMobile from "../assets/backgroundMobile.png"
import logoZap from "../assets/logoZap.png"

function Inicio() {
    return (
        <section className=" w-screen flex flex-col py-[20px] px-[20px]">
            <img src={backgroundMobile} alt="fundo imagem de prédios" className="absolute top-0 w-screen left-0 z-[-1]" />
            <div className="leading-[90px] text-amber-200">
                <h1 className="text-[90px] font-Italiana bg-gradient-to-r from-orange-300 to-amber-200 text-shadow-2xs bg-clip-text text-transparent">Viviane <br /> Luiz <br /> Macedo</h1>
            </div>
            <div>
                <h2 className="bg-gradient-to-r from-amber-200 to-orange-400 text-shadow-2xs bg-clip-text text-transparent text-[30px] tracking-[9px] font-Instrument">ADVOCACIA</h2>
                <p className="text-amber-200 text-[18px] w-[90%] mt-[20px] mb-[25px] font-Inika">Compliance estratégico e jurídico para mitigar riscos e impulsionar governança.</p>
                <p className="text-white w-[90%] text-[17px] font-Inika">Atuação especializada em Direito Empresarial focada na integridade corporativa, prevenção de riscos e conformidade regulatória.</p>
                <div>
                    <a href="" className="w-full mt-[30px] bg-green-400 flex items-center justify-center h-[60px] text-[19px] text-amber-950 font-medium">
                        <p className="h-[30px] font-Instrument">MARQUE UMA REUNIÃO</p>
                        <img src={logoZap} alt="imagem whatsapp" className="w-[30px]" />
                    </a>

                    <a href="">
                        <p></p>
                    </a>
                </div>

            </div>
        </section>
    )
}

export default Inicio;