import { BsFillTelephoneFill } from 'react-icons/bs';
import { BiSolidMap } from 'react-icons/bi';
import { MdOutlineMailOutline } from 'react-icons/md';
import { BsTiktok } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="bg-neutral-800 flex flex-col items-center justify-around pt-6 pb-8 lg:flex-row">
            <div className='px-4 md:px-0'>
                <h3 className="font-medium text-2xl text-white border-b-2 border-x-sky-900 inline-block">Contacto</h3>
                {/* <hr></hr> */}
                <ul className="[&>li]:font-medium text-white">
                    <li className='flex flex-row items-center text-sm md:text-base'> <MdOutlineMailOutline />&nbsp; brandrenew23@gmail.com</li>
                    <li className='flex flex-row items-center text-sm md:text-base'> <BiSolidMap />&nbsp; Barcelona, España</li>
                    <li className='flex flex-row items-center text-sm md:text-base'> <BsFillTelephoneFill />&nbsp; +34 632637792</li>
                    <li>
                        <a href='https://www.tiktok.com/@brandrenew?lang=es' className='flex flex-row items-center text-sm md:text-base'>
                            <BsTiktok />&nbsp; @BrandRenew
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <img src='https://res.cloudinary.com/dpmum6s9p/image/upload/v1707527632/logobrandblanco_dg3kuk.webp' alt='Logo de la empresa' title="Logo de la empresa" className='h-auto w-52 cursor-pointer mx-auto py-4 lg:py-2' />
                <p className='text-zinc-400 text-center px-4 lg:px-0'>2024 - Brand Renew ® Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer