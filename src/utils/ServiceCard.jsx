import { Link } from 'react-scroll';

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ image, title, description }) => {
    return (
        <div className="flex flex-col justify-center items-center w-[90%] h-[35rem] lg:w-[32rem] lg:h-[32rem] bg-white shadow-2xl rounded-xl">
            <div className="w-72 min-h-64 flex justify-center items-center">
                <img src={image} alt={title} title={title} className="w-64 h-auto mb-4" />
            </div>
            <h3 className="text-2xl text-purple-700 font-semibold text-center mb-3">{title}</h3>
            <p className="text-md text-gray-500 font-normal text-left italic mb-4 w-11/12 mx-auto">{description}</p>
            <Link className="cursor-pointer text-white font-semibold"to="contact" smooth={true} offset={-140} href='#'>
                <button className='relative rounded-xl cursor-pointer items-center overflow-hidden p-[1px] block z-10'>
                    <div
                        className='w-full h-full absolute rounded-[100%] transform scale-150 animate-styles_rotate'
                        style={{
                            backgroundImage:
                                'conic-gradient(#3a6ea5 20deg, transparent 120deg)'
                        }}
                    />
                    <span className='relative z-20 block rounded-xl bg-gradient-to-r from-stone-700 to-slate-900 px-8 py-3 text-center text-sm text-white text-nowrap shadow-2xl font-medium font-poppins'>
                        PEDIR PRESUPUESTO
                    </span>
                </button>
            </Link>
            {/* <button className="text-lg text-[#ef476f] bg-[#ffcad4] font-medium text-center px-4 py-1 mb-4 rounded-xl">PEDIR PRESUPUESTO</button> */}
        </div>
    )
}

export default ServiceCard