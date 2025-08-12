import { Navigation, Pagination, Scrollbar, A11y, Mousewheel, Autoplay } from 'swiper/modules';
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
    <section className=" w-screen m-auto bg-gradient-to-b from-black/90 to-mar backdrop-blur-sm  items-center justify-center pb-[20px] relative overflow-hidden top-0">
      <h2 className='md:w-[400px] w-[90%] m-auto flex items-center justify-center md:pt-[50px] mb-[20px] pt-[100px] text-[36px] bg-gradient-to-r from-orange-300 from-[0%] to-[80%] to-yellow-200 bg-clip-text text-transparent  font-Inter font-medium'>O que os clientes dizem</h2>
      
      <Swiper
      direction='horizontal'
        slidesPerView={slidePerview}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={0}
        autoplay={{
          delay: 2600,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel, Autoplay]}
        className='w-[90%] m-auto mySwiper'
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className='p-1'>
            <div className=''>
              <img
              src={item.image}
              alt={`Slide ${item.id}`}
              className="w-full object-cover"
            />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Avaliation;