import { FaQuoteLeft } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Nosotros = () => {
  return (
    <section id="us">
      <div className="mb-20 mt-28 grid grid-cols-1 md:grid-cols-10">

        <div className="h-[40rem] bg-black md:col-span-6 lg:h-[45rem]">
          <div className="ml-8 mt-28 lg:ml-60 lg:mt-40 xl:ml-96 xl:mt-56">
            <span className="text-base font-medium text-[#A800d0]">
              POR QUE BRAND RENEW?
            </span>
            <p className="mt-6 text-3xl font-medium leading-snug text-white lg:w-[80%] lg:text-4xl">
              Es una agencia de diseño web altamente especializada, dedicada a
              proporcionar soluciones de diseño web personalizadas y
              estratégicas para empresas.
            </p>
          </div>
        </div>

        <div className="h-[40rem] bg-[#eeeeee]/80 md:col-span-4 lg:h-[45rem]">
          <div className="ml-8 mt-28 lg:mt-40 xl:mt-44">
            <FaQuoteLeft className="text-4xl text-[#A800d0]" />
            <Swiper
              style={{
                '--swiper-navigation-color': '#000000',
                '--swiper-pagination-color': '#000000',
              }}
              loop
              navigation
              slidesPerView={1}
              spaceBetween={300}

              grabCursor={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper h-[30rem] lg:h-[32rem] xl:h-[30rem] "
            >

              <SwiperSlide >
                <div className="w-4/5 m-auto" >
                  <p className="mt-6 text-md font-normal leading-snug text-black w-[90%] md:text-base lg:w-[80%] lg:text-base xl:text-xl lg:font-medium m-auto">
                    Contraté el servicio de diseño web y marketing digital para
                    &quot;Bazar Creativo&quot; y los resultados fueron excepcionales.
                    El aumento en tráfico y ventas fue notable desde el inicio,
                    gracias a su creatividad y soporte dedicado. Recomiendo
                    ampliamente este servicio para impulsar la presencia en línea de
                    cualquier negocio.
                  </p>
                  <p className="mt-12 text-xl md:text-lg font-medium">Ernesto Gomez</p>
                  <span>Enero, 2024</span>

                </div>
              </SwiperSlide>

              <SwiperSlide >
                <div className="w-4/5 m-auto" >
                  <p className="mt-6 text-md font-normal leading-snug text-black w-[90%] md:text-base lg:w-[80%] lg:text-base xl:text-xl lg:font-medium m-auto">
                    Decidí apostar por mejorar mi sitio web y estrategia de marketing digital con Brand Renew, y no podría estar más satisfecho. La transformación de mi tienda online fue impresionante, aumentando no solo las visitas sino también las conversiones. Su equipo demostró una comprensión profunda de mis necesidades y superó mis expectativas.
                  </p>
                  <p className="mt-12 text-xl font-medium">Julian Suar</p>
                  <span>Julio, 2023</span>

                </div>
              </SwiperSlide>

              <SwiperSlide >
                <div className="w-4/5 m-auto" >
                  <p className="mt-6 text-md font-normal leading-snug text-black w-[90%] md:text-base lg:w-[80%] lg:text-base xl:text-xl lg:font-medium m-auto">
                    La experiencia ha sido revolucionaria para nuestro negocio. Su enfoque personalizado para el diseño de nuestra página de aterrizaje y la estrategia de marketing digital ha elevado nuestra marca a nuevos horizontes. Observamos un incremento significativo en la interacción del cliente. Altamente recomendado para quienes buscan crecer en el ámbito digital.
                  </p>
                  <p className="mt-12 text-xl font-medium">Gaspar Liam</p>
                  <span>Diciembre, 2023</span>

                </div>
              </SwiperSlide>

              <SwiperSlide >
                <div className="w-4/5 m-auto" >
                  <p className="mt-6 text-md font-normal leading-snug text-black w-[90%] md:text-base lg:w-[80%] lg:text-base xl:text-xl lg:font-medium m-auto">
                    Desde el rediseño de nuestro sitio web hasta la implementación de tácticas de marketing digital de vanguardia, su equipo ha demostrado ser un socio invaluable. Hemos visto un aumento exponencial en el tráfico web y una mejora tangible en la tasa de conversión. Su enfoque orientado a resultados y atención al detalle nos ha impresionado profundamente.
                  </p>
                  <p className="mt-12 text-xl font-medium">Vicente Muñoz</p>
                  <span>Septiembre, 2023</span>

                </div>
              </SwiperSlide>

              <SwiperSlide >
                <div className="w-4/5 m-auto" >
                  <p className="mt-6 text-md font-normal leading-snug text-black w-[90%] md:text-base lg:w-[80%] lg:text-base xl:text-xl lg:font-medium m-auto">
                    Desde que contratamos los servicios para el desarrollo de nuestro ecommerce y estrategias de marketing digital, hemos experimentado un crecimiento excepcional. Su habilidad para entender y ejecutar exactamente lo que nuestra marca necesitaba ha sido impresionante. La comunicación y el soporte técnico han sido excelentes, haciendo de este proceso una experiencia fluida y gratificante.
                  </p>
                  <p className="mt-12 text-xl font-medium">Emiliano Contreras</p>
                  <span>Abril, 2023</span>

                </div>
              </SwiperSlide>

              <SwiperSlide >
                <div className="w-4/5 m-auto" >
                  <p className="mt-6 text-md font-normal leading-snug text-black w-[90%] md:text-base lg:w-[80%] lg:text-base xl:text-xl lg:font-medium m-auto">
                    Elegir a Brand para potenciar nuestro sitio web y estrategia de marketing online fue la mejor decisión que pudimos haber tomado. La mejora en la visibilidad online y el aumento de ventas han sido notorios desde el primer mes. Su equipo no solo es creativo y proactivo, sino también increíblemente atento y dedicado a brindar resultados.
                  </p>
                  <p className="mt-12 text-xl font-medium">Oliver Silva</p>
                  <span>Febrero, 2024</span>

                </div>
              </SwiperSlide>

            </Swiper>
            {/* <p className="mt-6 text-xl font-normal leading-snug text-black w-[90%] lg:w-[80%] lg:text-2xl lg:font-medium ">
              Contraté el servicio de diseño web y marketing digital para
              &quot;Bazar Creativo&quot; y los resultados fueron excepcionales.
              El aumento en tráfico y ventas fue notable desde el inicio,
              gracias a su creatividad y soporte dedicado. Recomiendo
              ampliamente este servicio para impulsar la presencia en línea de
              cualquier negocio.
            </p>
            <p className="mt-12 text-xl font-medium">Ernesto Gomez</p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
