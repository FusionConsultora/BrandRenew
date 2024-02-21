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
                    modalTitle="Landing Page"
                    modalOptions={["En el inmenso mundo digital de hoy en día, creamos y desarrollamos tu presencia en línea a través de páginas web personalizadas que capturan la esencia de tu marca y satisfacen las necesidades de tus usuarios.", "Nuestro proceso de creación es exhaustivo y meticuloso, comenzando con una fase de conceptualización donde tus ideas y objetivos se convierten en un plan tangible.", "Después, avanzamos hacia el diseño y desarrollo, priorizando siempre una experiencia de usuario inigualable, seguridad de vanguardia y una estética visualmente atractiva que llegue directamente a tu público objetivo.", "Nuestro equipo se asegura de que cada elemento, desde la navegación hasta el contenido, esté optimizado para garantizar el máximo compromiso y conversión.", "Al elegirnos, no solo recibirás un presupuesto personalizado, sino también la oportunidad de lanzar tu proyecto digital sobre una base sólida y lista para triunfar en el competitivo mercado en línea."]}
                />
                <ServiceCard
                    image="https://res.cloudinary.com/dpmum6s9p/image/upload/v1707536395/ecommerce_o6irbx.webp"
                    title="E-Commerce"
                    description="Desarrollamos soluciones de E-Commerce completas, desde la interfaz hasta los sistemas de pago seguros. Crea tu tienda online con nosotros y comienza a vender con confianza. Pide tu presupuesto sin compromiso."
                    modalTitle="E-Commerce"
                    modalOptions={["En la actualidad digital, el comercio electrónico se ha vuelto una herramienta imprescindible para el crecimiento y la expansión de los negocios.", "Conscientes de esta realidad, ofrecemos plataformas de comercio electrónico sólidas, seguras y totalmente personalizadas para impulsar tu negocio digital.", "Nuestro servicio completo abarca desde un diseño responsive que garantiza una experiencia de usuario fluida en cualquier dispositivo, hasta una gestión de inventario eficiente y sistemas de pago seguros y fáciles de usar.", "Transformamos tu visión de negocio en una tienda online eficiente y atractiva, lista para atraer y retener clientes.", "Al solicitar un presupuesto con nosotros, estás dando el primer paso hacia el éxito en el comercio digital, con la seguridad de que tu plataforma estará respaldada por la última tecnología y las mejores prácticas de la industria."]}
                />
                <ServiceCard
                    image="https://res.cloudinary.com/dpmum6s9p/image/upload/v1707536394/cohete_lmutu4.webp"
                    title="Marketing Digital"
                    description="Mejora la visibilidad online con estrategias de SEO y SEM que impulsan tu sitio web. Complementa tu página con marketing digital efectivo. Solicita un presupuesto para destacar en la red."
                    modalTitle="Marketing Digital"
                    modalOptions={["Para maximizar la visibilidad en línea y atraer tráfico cualificado son fundamentales para el éxito de cualquier sitio web en la actualidad.", "Con este objetivo en mente, ofrecemos un servicio completo de Marketing Digital diseñado para complementar y potenciar la presencia en línea de tu negocio.", "Nuestra estrategia abarca tanto el SEO (Optimización de Motores de Búsqueda) como el SEM (Marketing en Motores de Búsqueda), con el fin de mejorar tu posición en los resultados de búsqueda y atraer a un público más amplio y relevante.", "Mediante un análisis detallado de tu mercado y la implementación de tácticas probadas, nos esforzamos por destacar tu negocio en la saturada web.", "Te invitamos a consultar y solicitar un presupuesto para nuestras soluciones de marketing, diseñadas no solo para aumentar la visibilidad de tu sitio, sino también para impulsar el crecimiento sostenible de tu negocio en el ecosistema digital."]}
                />
            </div>

        </section>
    )
}

export default Services