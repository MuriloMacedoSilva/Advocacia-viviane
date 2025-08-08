import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect} from "react"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import avaliacao1 from '../assets/avaliacao1.png';

function Avaliation() {

    const [slidePerview, setSlidePerview] = useState(3)

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

  const data = [
    { id: 1, image: avaliacao1 },
    { id: 2, image: avaliacao1 },
    { id: 3, image: avaliacao1 },
    { id: 4, image: avaliacao1 },
    { id: 5, image: avaliacao1 },
    { id: 6, image: avaliacao1 }
  ];

  return ( 
    <section className=" md:mt-[-100px] w-screen px-[50px] m-auto mt-[30px] bg-white items-center justify-center">
      <h2 className='md:w-[600px] w-[90%] m-auto flex items-center justify-center md:pt-[10px] mb-[60px] pt-[100px] text-[32px] md:text-[50px] text-blue-950 border-b border-b-orange-900 font-Inter font-medium'>O que os clientes dizem?</h2>
      
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={slidePerview}
        pagination={{ clickable: true }}
        navigation
        className='w-full'
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.image}
              alt={`Slide ${item.id}`}
              className="w-full md:p-[40px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Avaliation;