import { useEffect } from "react";
import ServiceCard from "../../utils/ServiceCard"

import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <section className="relative"
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            id="services"
        >
            <h2 className="mt-20 text-5xl font-bold text-center text-purple-600 mb-14">
                Nuestros Servicios
            </h2>

            <div className="flex flex-col flex-wrap justify-center items-center mx-auto gap-y-14 gap-x-14 md:flex-row md:items-start md:w-4/5 lg:w-full mb-12">
                <ServiceCard
                    image="https://res.cloudinary.com/dpmum6s9p/image/upload/v1707536394/landing_px51pi.webp"
                    title="Landing Page"
                    description="Creamos páginas web enfocadas en diseño y seguridad, personalizadas para tu marca. Garantizamos calidad y protección desde la idea hasta la ejecución. Solicita un presupuesto para tu presencia online."
                />
                <ServiceCard
                    image="https://res.cloudinary.com/dpmum6s9p/image/upload/v1707536395/ecommerce_o6irbx.webp"
                    title="E-Commerce"
                    description="Desarrollamos soluciones de E-Commerce completas, desde la interfaz hasta los sistemas de pago seguros. Crea tu tienda online con nosotros y comienza a vender con confianza. Pide tu presupuesto sin compromiso."
                />
                <ServiceCard
                    image="https://res.cloudinary.com/dpmum6s9p/image/upload/v1707536394/cohete_lmutu4.webp"
                    title="Marketing Digital"
                    description="Mejora la visibilidad online con estrategias de SEO y SEM que impulsan tu sitio web. Complementa tu página con marketing digital efectivo. Solicita un presupuesto para destacar en la red."
                />
            </div>

        </section>
    )
}

export default Services