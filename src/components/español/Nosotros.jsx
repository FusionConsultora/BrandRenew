import { FaQuoteLeft } from "react-icons/fa";

const Nosotros = () => {
  return (
    <section id="us">
      <div className="mb-20 mt-28 grid grid-cols-1 md:grid-cols-10">

        <div className="h-[40rem] bg-black md:col-span-6 lg:h-[45rem]">
          <div className="ml-8 mt-28 lg:ml-96 lg:mt-56">
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
          <div className="ml-8 mt-28 lg:ml-20 lg:mt-36">
            <FaQuoteLeft className="text-4xl text-[#A800d0]" />
            <p className="mt-6 text-xl font-normal leading-snug text-black w-[90%] lg:w-[80%] lg:text-2xl lg:font-medium ">
              Contraté el servicio de diseño web y marketing digital para
              &quot;Bazar Creativo&quot; y los resultados fueron excepcionales.
              El aumento en tráfico y ventas fue notable desde el inicio,
              gracias a su creatividad y soporte dedicado. Recomiendo
              ampliamente este servicio para impulsar la presencia en línea de
              cualquier negocio.
            </p>
            <p className="mt-12 text-xl font-medium">Ernesto Gomez</p>
            <span>2024</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
