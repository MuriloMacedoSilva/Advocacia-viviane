import backgroundMobile from "../assets/backgroundMobile.png"
import logoZap from "../assets/logoZap.png"
import backgroundInicio from "../assets/backgroundInicio.png"

function Inicio() {
    return (
        <section className=" w-screen flex flex-col py-[30px] px-[20px] md:flex-row md:justify-center md:gap-15 md:items-center">
            <img src={backgroundMobile} alt="fundo imagem de prédios" className="absolute top-0 w-screen left-0 z-[-1] md:opacity-0" />
            <img src={backgroundInicio} alt="fundo prédios" className="absolute top-0 w-screen md:h-full xl:h-auto left-0 z-[-1] md:opacity-100 opacity-0" />
            <div className="text-amber-200">
                <h1 className="text-[90px] font-Italiana bg-gradient-to-r from-orange-300 from-[2%] to-[50%] to-amber-200 text-shadow-2xs bg-clip-text text-transparent md:text-[110px] md:leading-[100px] lg:text-[150px] leading-[90px] lg:leading-[130px] xl:leading-[147px] font-normal xl:text-[165px]">Viviane <br /> Luiz <br /> Macedo</h1>
            </div>
            <div className=" max-w-[550px] gap-16 max-h-[500px]">
                <h2 className="bg-gradient-to-r from-amber-200 to-orange-400 text-shadow-2xs bg-clip-text text-transparent text-[20px] tracking-[15px] font-Inter font-semibold lg:text-[30px]">ADVOCACIA</h2>
                <p className="text-amber-200 text-[17px] lg:text-[19px] w-full mt-[20px] mb-[25px] font-Inika">Compliance estratégico e jurídico para mitigar riscos e impulsionar governança.</p>
                <p className="text-white w-full text-[16px] font-Inika lg:text-[18px]">Atuação especializada em Direito Empresarial focada na integridade corporativa, prevenção de riscos e conformidade regulatória.</p>
                <div className="md:flex md:justify-between mt-[50px] gap-7 w-full">
                    <a href="" className="w-full md:w-[50%] mt-[30px] bg-lime-300 flex items-center justify-center h-[60px] text-[16px] text-amber-950 font-light hover:bg-lime-400 transition duration-200">
                        <p className="font-Inter">MARQUE UMA REUNIÃO</p>
                        <img src={logoZap} alt="imagem whatsapp" className="w-[30px]" />
                    </a>

                    <a href="" className="w-full md:w-[50%] mt-[30px] bg-transparent border border-amber-200 flex items-center justify-center h-[60px] text-[16px] text-amber-200 font-light hover:bg-amber-200/90 hover:text-amber-950 transition duration-200">
                        <p className="font-Inter">CURRICULO</p>
                    </a>
                </div>

            </div>
        </section>
    )
}

export default Inicio;