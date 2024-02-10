import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <section className='w-full bg-brand-blue'
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            id="about">
            <div className='flex flex-col items-center justify-center max-w-5xl p-2 py-20 m-auto text-center '>
                <h3 className='text-3xl xs:text-4xl xl:text-[44px] mb-4 leading-[3rem] font-medium text-white'>
                    Nuestro equipo.
                </h3>
                <p className='mt-6 text-base text-white xs:text-lg  font-light'>
                    Somos un equipo de expertos con más de 15 años de experiencia asesorando a pequeñas, medianas y grandes empresas.
                    Nuestro compromiso y responsabilidad nos motiva a capacitarnos y actualizar nuestros conocimientos de forma continua, preparados para desarrollar herramientas, estrategias y consultorías basadas en los más altos estandartes de calidad, seguridad, ética y buenas prácticas.
                </p>
                {/* <InvertedButton label='Get expert advice ' /> */}
            </div>
        </section>
    )
}

export default About