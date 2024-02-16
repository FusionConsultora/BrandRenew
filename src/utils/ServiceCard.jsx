import { useState } from "react";
import { Link } from 'react-scroll';
import Modal from 'react-modal';
import '../styles/serviceCard.module.scss'

import { motion } from 'framer-motion'

import { IoIosCloseCircleOutline } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ image, title, description, modalTitle, modalOptions }) => {
    const [showModalFoto, setShowModalFoto] = useState(false);
    Modal.setAppElement('#root')

    const openModal = () => {
        setShowModalFoto(prev => !prev)
    }

    return (
        <div className="flex flex-col justify-center items-center w-[90%] h-[35rem] lg:w-[32rem] lg:h-[32rem] bg-white shadow-2xl rounded-xl">
            <div className="w-72 min-h-64 flex justify-center items-center">
                <img src={image} alt={title} title={title} className="w-64 h-auto mb-4" />
            </div>
            <h3 className="text-2xl text-purple-700 font-semibold text-center mb-3">{title}</h3>
            <p className="text-md text-gray-500 font-normal text-left italic mb-4 w-11/12 mx-auto">{description}</p>
            <div className='flex justify-between gap-4'>
                <Link className="cursor-pointer text-white font-semibold" to="contact" smooth={true} offset={-140} href='#'>
                    <button className='relative rounded-xl cursor-pointer items-center overflow-hidden p-[1px] block z-10'>
                        <div
                            className='w-full h-full absolute rounded-[100%] transform scale-150 animate-styles_rotate'
                            style={{
                                backgroundImage:
                                    'conic-gradient(#3a6ea5 20deg, transparent 120deg)'
                            }}
                        />
                        <span className='relative z-20 block rounded-xl bg-gradient-to-r from-stone-700 to-slate-900 px-2 lg:px-8 py-3 text-center text-sm text-white text-nowrap shadow-2xl font-medium font-poppins'>
                            PEDIR PRESUPUESTO
                        </span>
                    </button>
                </Link>
                <button className='relative rounded-xl cursor-pointer items-center overflow-hidden p-[1px] block z-10' onClick={openModal}>
                    <span className='relative z-20 block rounded-xl px-2 lg:px-8 py-3 text-center text-sm text-blue-600 border border-blue-600 hover:opacity-70 text-nowrap shadow-2xl font-medium font-poppins'>
                        Saber Más
                    </span>
                </button>
            </div>





            <Modal
                isOpen={showModalFoto}
                contentLabel="Details Service"
                appElement={document.getElementById('root')}
                className="mt-28 bg-white px-7 rounded-md md:w-3/5 mx-auto xl:w-3/5 overflow-y-scroll h-3/4"
                overlayClassName="fixed inset-0 bg-black/70 z-40"
            >
                <motion.div
                    initial={{ opacity: 0 }}  // Estado inicial del modal (transparente)
                    animate={{ opacity: 1 }}  // Estado final del modal (visible)
                    exit={{ opacity: 0 }}     // Estado de salida del modal (transparente)
                    transition={{ duration: 0.4 }}
                >
                    <div className="relative pb-1 ">
                        <span
                            className="text-gray-500 font-extrabold text-2xl text-end absolute top-6 right-0 float-right cursor-pointer"
                            onClick={openModal}
                        >
                            <IoIosCloseCircleOutline />
                        </span>
                    </div>
                    <div className='flex flex-col mt-12 pb-6 text-center'>
                        <h3 className='mb-4 text-3xl font-black text-indigo-600'>{modalTitle}</h3>
                        <div className="flex flex-col gap-3 text-left text-md text-zinc-800 font-normal mb-4 w-full ">
                            {
                                // eslint-disable-next-line react/prop-types
                                modalOptions && modalOptions.map((option, index) => (
                                    <span key={index}>
                                        {option}
                                    </span>
                                ))
                            }
                        </div>
                    </div>
                </motion.div>
            </Modal>
        </div>
    )
}

export default ServiceCard