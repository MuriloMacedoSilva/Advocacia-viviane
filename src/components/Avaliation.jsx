// import { Navigation, Pagination, Scrollbar, A11y, Mousewheel, Autoplay } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { useState, useEffect} from "react"


// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// import avaliacao1 from '../assets/avaliacao1.png';
// import { Link } from 'react-router';

// function Avaliation() {

//     const [slidePerview, setSlidePerview] = useState(3)

//     useEffect( () => {
//         function rendleResize(){
//            if (window.innerWidth < 720) {
//                 setSlidePerview(1)
//             } else if (window.innerWidth >= 720 && window.innerWidth < 1100){
//                 setSlidePerview(2)
//             } else {
//                 setSlidePerview(3)
//             }

//         }

//         rendleResize();

//         window.addEventListener("resize", rendleResize)

//         return () => {
//             window.removeEventListener("resize", rendleResize)
//         }
//     }, [])

//   const data = [
//     { id: 1, image: avaliacao1 },
//     { id: 2, image: avaliacao1 },
//     { id: 3, image: avaliacao1 },
//     { id: 4, image: avaliacao1 },
//     { id: 5, image: avaliacao1 },
//     { id: 6, image: avaliacao1 }
//   ];

//   return ( 
//     <section className=" w-screen m-auto bg-gradient-to-b md:from-black/80 to-50% md:to-black/80 from-black/90 to-black  items-center justify-center pb-[20px] relative overflow-hidden top-0">
//       <h2 className='md:w-[400px] w-[90%] m-auto flex items-center justify-center md:pt-[50px] mb-[20px] pt-[100px] text-[36px] bg-gradient-to-r from-orange-300 from-[0%] to-[80%] to-yellow-200 bg-clip-text text-transparent  font-Inter font-medium'>O que os clientes dizem</h2>
      
//       <Swiper
//       direction='horizontal'
//         slidesPerView={slidePerview}
//         pagination={{ clickable: true }}
//         loop={true}
//         spaceBetween={0}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false,
//         }}
//         modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel, Autoplay]}
//         className='w-[90%] m-auto mySwiper'
//       >
//         {data.map((item) => (
//           <SwiperSlide key={item.id} className='p-1'>
//             <div className=''>
//               <img
//               src={item.image}
//               alt={`Slide ${item.id}`}
//               className="w-full object-cover"
//             />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
      
//       <div className='w-screen flex justify-center items-center'><Link to="/formAvaliation" className='bg-transparent border border-amber-200 flex items-center justify-center h-[60px] text-[15px] text-amber-200 font-light hover:bg-amber-200/90 hover:text-amber-950 transition duration-200 px-6 mt-6'>Fazer Avaliação</Link></div>
//     </section>
//   );
// }

// export default Avaliation;



import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from "react"
import { Star, User, MessageSquare, Loader2 } from 'lucide-react'; // Ícones para o card de avaliação
import { Link } from 'react-router'; // Assumindo que você está usando react-router-dom

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Não precisamos mais desta importação: import avaliacao1 from '../assets/avaliacao1.png';

// --- CONFIGURAÇÃO DA API ---
const API_ENDPOINT = 'https://api-viviane.onrender.com/avaliacao'; 
// --- FIM CONFIGURAÇÃO DA API ---

// Componente auxiliar para exibir as estrelas da nota
const StarRatingDisplay = ({ rating }) => {
    const maxRating = 5;
    return (
        <div className="flex text-yellow-500 mb-3">
            {Array.from({ length: maxRating }).map((_, index) => (
                <Star
                    key={index}
                    size={20}
                    // Preenche a estrela se o índice for menor que a nota
                    className={index < rating ? 'fill-yellow-500' : 'text-gray-500'}
                />
            ))}
        </div>
    );
};

// Componente Card de Avaliação individual (Substitui a imagem)
const AvaliationCard = ({ avaliacao }) => {
    // A data está separada (dia, mes, ano)
    const dataFormatada = `${avaliacao.dia}/${avaliacao.mes}/${avaliacao.ano}`;
    
    return (
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-yellow-800/20 text-gray-100 h-full min-h-[250px] flex flex-col justify-between transition-all duration-300 hover:shadow-yellow-500/10">
            <div>
                <StarRatingDisplay rating={avaliacao.nota} />
                <h3 className="text-lg font-bold text-yellow-300 mb-3 flex items-center">
                    <User size={18} className="mr-2 text-gray-400" />
                    {avaliacao.nome || 'Usuário Anônimo'}
                </h3>
                <p className="text-gray-300 italic text-sm">
                    <MessageSquare size={16} className="inline mr-1 align-top text-yellow-400" />
                    "{avaliacao.avaliacao}"
                </p>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-xs text-gray-500">
                    Avaliado em: {dataFormatada}
                </p>
            </div>
        </div>
    );
};


function Avaliation() {

    // --- ESTADOS PARA A BUSCA DE DADOS ---
    const [avaliacoes, setAvaliacoes] = useState([]); // Array para armazenar os dados da API
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    // --- FIM ESTADOS PARA A BUSCA DE DADOS ---
    
    const [slidePerview, setSlidePerview] = useState(3)

    // Lógica para responsividade do Swiper
    useEffect( () => {
        function rendleResize(){
            if (window.innerWidth < 720) {
                setSlidePerview(1)
            } else if (window.innerWidth >= 720 && window.innerWidth < 1100){
                setSlidePerview(2)
            } else {
                setSlidePerview(3)
            }
        }

        rendleResize();
        window.addEventListener("resize", rendleResize)

        return () => {
            window.removeEventListener("resize", rendleResize)
        }
    }, [])
    
    // --- LÓGICA DE BUSCA DE DADOS ---
    useEffect(() => {
        const fetchAvaliations = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch(API_ENDPOINT, { method: 'GET' });

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Falha ao buscar avaliações. Status: ${response.status}. Detalhe: ${errorText}`);
                }

                const data = await response.json();
                setAvaliacoes(data); // Define o array de avaliações
            } catch (err) {
                console.error('Erro ao buscar avaliações:', err);
                setError('Não foi possível carregar as avaliações. Verifique o console ou a API.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchAvaliations();
    }, []); 
    // --- FIM LÓGICA DE BUSCA DE DADOS ---


    // Se estiver carregando
    if (isLoading) {
        return (
            <section className="w-screen m-auto py-20 bg-black flex flex-col items-center justify-center">
                 <Loader2 className="animate-spin inline-block text-yellow-400 mb-4" size={32} />
                 <p className="text-yellow-400">Carregando avaliações...</p>
            </section>
        );
    }
    
    // Se houver erro
    if (error) {
         return (
            <section className="w-screen m-auto py-20 bg-black flex flex-col items-center justify-center">
                 <p className="p-4 bg-red-600/20 text-red-300 border border-red-500 rounded-lg text-center">{error}</p>
                 <div className='mt-6'><Link to="/formAvaliation" className='bg-transparent border border-amber-200 flex items-center justify-center h-[60px] text-[15px] text-amber-200 font-light hover:bg-amber-200/90 hover:text-amber-950 transition duration-200 px-6'>Fazer Avaliação</Link></div>
            </section>
        );
    }


    return ( 
        <section className=" w-screen m-auto bg-gradient-to-b md:from-black/80 to-50% md:to-black/80 from-black/90 to-black  items-center justify-center pb-[20px] relative overflow-hidden top-0">
            <h2 className='md:w-[400px] w-[90%] m-auto flex items-center justify-center md:pt-[50px] mb-[40px] pt-[100px] text-[36px] bg-gradient-to-r from-orange-300 from-[0%] to-[80%] to-yellow-200 bg-clip-text text-transparent  font-Inter font-medium'>O que os clientes dizem</h2>
            
            <Swiper
                direction='horizontal'
                slidesPerView={slidePerview}
                pagination={{ clickable: true }}
                loop={true}
                spaceBetween={20} // Adicionei um espaço entre os slides para melhor visualização do card
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Pagination, A11y, Autoplay]}
                className='w-[90%] m-auto mySwiper'
            >
                
                {/* 🛑 AQUI ESTÁ A MUDANÇA PRINCIPAL: Mapeando os dados da API */}
                {avaliacoes.length > 0 ? (
                    avaliacoes.map((item, index) => (
                        <SwiperSlide key={index} className='p-1'>
                            <AvaliationCard avaliacao={item} />
                        </SwiperSlide>
                    ))
                ) : (
                    // Mensagem se não houver avaliações, mas o carregamento já terminou
                    <SwiperSlide className='p-1'>
                        <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-700 h-full min-h-[250px] flex flex-col items-center justify-center text-gray-400 text-center">
                            Nenhuma avaliação disponível ainda.
                        </div>
                    </SwiperSlide>
                )}
                
            </Swiper>
        </section>
    );
}

export default Avaliation;