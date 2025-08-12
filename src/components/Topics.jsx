import tech from "../assets/tech.png"
import pessoas from "../assets/pessoas.png"
import olho from "../assets/olho.png"

function Topics() {
    return (
        <section className="bg-gradient-to-b from-black/90 to-mar/90   w-screen items-center justify-center gap-15 flex flex-col px-[30px] pt-[45px] pb-[60px]">
            <h2 className="m-auto text-[36px] font-Inter font-medium bg-gradient-to-r from-orange-300 from-[0%] to-[80%] to-yellow-200 bg-clip-text text-transparent border-t border-amber-200/40 pt-8" >Aqui você encontra</h2>
            <div className="flex flex-col md:flex-row gap-1.5 items-baseline-last justify-center">
                <div className="flex flex-col justify-items-start p-6  gap-3 max-w-[400px]">
                    <img src={olho} alt="" className="w-[50px] h-[50px]" />
                    <h2 className="bg-gradient-to-r from-orange-300 from-[0%] to-[80%] to-yellow-200 bg-clip-text text-transparent text-[29px] font-Inter w-full">Visão Estratégica e Inovadora</h2>
                    <p className="text-white text-[18px] w-full">O escritório alia conhecimento jurídico sólido a uma visão estratégica e inovadora</p>
                </div>
                <div className="flex flex-col justify-items-start p-6  gap-3 max-w-[400px]">
                    <img src={pessoas} alt="" className="w-[50px] h-[50px]" />
                    <h2 className="bg-gradient-to-r from-orange-300 from-[0%] to-[80%] to-yellow-200 bg-clip-text text-transparent text-[29px] font-Inter w-full border-[6px] ">Atendimento Personalizado</h2>
                    <p className="text-white text-[18px] w-full">A atuação é pautada pela excelência e pela personalização no atendimento a empresas e empreendedores.</p>
                </div>
                <div className="flex flex-col justify-items-start p-6  gap-3 max-w-[400px]">
                    <img src={tech} alt="" className="w-[50px] h-[50px]" />
                    <h2 className="bg-gradient-to-r from-orange-300 from-[0%] to-[80%] to-yellow-200 bg-clip-text text-transparent text-[29px] font-Inter w-full border-y-[24px]">Tecnologia</h2>
                    <p className="text-white text-[18px] w-full">Incorporando a tecnologia como pilar essencial para os negócios contemporâneos.</p>
                </div>
            </div>
        </section>
    )
}

export default Topics;