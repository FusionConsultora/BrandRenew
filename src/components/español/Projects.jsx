import CardProject from "../../utils/CardProject"

const Projects = () => {

    return (
        <section className="mt-32 mx-4">
            <CardProject
                image="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686426251/fusionWeb/Herramientaslogito_nn9mog.webp"
                title="Herramientas de gestión"
                subtitle="Relevamos, organizamos, planificamos y estructuramos los procesos de tu empresa."
                phrase="Conocer más"
                href="https://api.whatsapp.com/send/?phone=5491130500025&text=Buenos+dias%2C+estoy+interesado+en+consultoria+y+gestion+de+procesos%21&type=phone_number&app_absent=0"
                left={true}
                fade="fade-right"
                modalTitle="Gestión empresarial"
                modalOptions={["Herramientas de gestión", "Consultoría integral administrativa", "Consultoría económico y financiera", "Consultoría organizacional", "Optimización en atención al cliente", "Outsourcing administrativo"]}
            />

            <CardProject
                image="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686425815/fusionWeb/gesti%C3%B3nlogito_wd7uv0.webp"
                title="Consultoría y gestión de procesos"
                subtitle="Nuestra gestión en recursos humanos está orientada a alcanzar los mas altos niveles de desempeño y competitividad organizacional."
                phrase="Conocer más"
                href="https://api.whatsapp.com/send/?phone=5491130500025&text=Buenos+dias%2C+estoy+interesado+en+gestion+y+de+recursos+humanos%21&type=phone_number&app_absent=0"
                left={false}
                fade="fade-left"
                modalTitle="Recursos humanos"
                modalOptions={["Reclutamiento y selección", "Consultoría y gestión de procesos", "Evaluación del desempeño", "Asesoría y análisis organizacional", "Consultoría en implementación de Normas ISO"]}
            />

            <CardProject
                image="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686425939/fusionWeb/itlogito_vyl6pe.webp"
                title="Desarrollo de proyectos a medida e implementación IT"
                subtitle="Diseñamos, optimizamos e implementamos herramientas que te permitirán agilizar la imagen, posicionamiento y gestión de tu empresa."
                phrase="Conocer más"
                href="https://api.whatsapp.com/send/?phone=5491130500025&text=Buenos+dias%2C+estoy+interesado+en+desarrollo+de+software%21&type=phone_number&app_absent=0"
                left={true}
                fade="fade-right"
                modalTitle="Desarrollo IT"
                modalOptions={["Desarrollo web", "Desarrollo de proyectos a medida e implementación IT", "Sistema de control de stock", "Software de recursos humanos"]}
            />

            <CardProject
                image="https://res.cloudinary.com/dpmum6s9p/image/upload/v1686425622/fusionWeb/cyberseguridad_myws5h.webp"
                title="Prevención de estafas y fraudes laborales"
                subtitle="Nuestro sistema de prevención automatizado y una consultoría de vanguardia anticipán las posibles vulnerabilidades y amenazas externas e internas garantizando el resguardo y buen funcionamiento de la estructura de un negocio, empresa o administración."
                phrase="Conocer más"
                href="https://api.whatsapp.com/send/?phone=5491130500025&text=Buenos+dias%2C+estoy+interesado+en+prevencion+de+fraudes%21&type=phone_number&app_absent=0"
                left={false}
                fade="fade-left"
                modalTitle="Cyberseguridad y prevención de fraudes"
                modalOptions={["Prevención de fraudes", "Protección antifraudes para negocios", "Prevención de estafas virtuale", "Prevención de estafas y fraudes laborales", "Consultoría integral en factores de riesgos", "Cyberseguridad", "Ethical hacking"]}
            />
        </section>
    )
}

export default Projects