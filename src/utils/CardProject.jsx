import { useEffect, useState } from "react";
import Modal from 'react-modal';

import { motion } from 'framer-motion'
import { BsCheck } from 'react-icons/bs'

import AOS from 'aos';
import 'aos/dist/aos.css';

// eslint-disable-next-line react/prop-types
const CardProject = ({ image, title, subtitle, phrase, left, modalTitle, modalOptions }) => {

    Modal.setAppElement('#root')

    const [showModalFoto, setShowModalFoto] = useState(false);

    const openModal = () => {
        setShowModalFoto(true)
    }

    const closeModal = () => {
        setShowModalFoto(false)
    }

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <div className="flex flex-col items-center mb-16 md:flex-row ">
            {
                left || window.innerWidth < 600 ? (
                    <>
                        <div className="w-full md:mx-4 lg:mx-20 flex flex-col items-center"
                            // data-aos={fade}
                            data-aos="fade-down"
                            data-aos-once="true"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out">

                            <img src={image} alt={title} title={title} className="w-5/6 h-[100%]" />
                        </div>

                        <div className="w-full inline-block md:mx-4 "
                            data-aos="fade-down"
                            data-aos-once="true"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out">

                            <h2 className="text-4xl text-brand-blue font-extrabold mb-6 md:mb-10 lg:w-96">
                                {title}
                            </h2>
                            <h3 className="text-base text-gray-500 font-light mb-6 max-w-[30rem] md:mb-10 z-10">
                                {subtitle}
                            </h3>
                            <button className="text-lg text-brand-lightBlue font-light p-2 border border-brand-lightBlue rounded-md cursor-pointer w-fit" onClick={openModal} >
                                {phrase}
                            </button>

                        </div>
                    </>

                ) : (
                    <>
                        <div className="w-full flex flex-col items-start md:mx-4 lg:ml-44"
                            data-aos="fade-down"
                            data-aos-once="true"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out">

                            <h2 className="text-4xl text-brand-blue font-extrabold mb-6 md:mb-10 lg:w-96 text-start">
                                {title}
                            </h2>
                            <h3 className="text-base text-gray-500 font-light mb-6 max-w-[30rem] md:mb-10 text-start">
                                {subtitle}
                            </h3>
                            <button className="text-lg text-brand-lightBlue font-light p-2 border border-brand-lightBlue rounded-md cursor-pointer w-fit" onClick={openModal} >
                                {phrase}
                            </button>
                        </div>

                        <div className="w-full m-auto md:mx-4 lg:mr-44"
                            // data-aos={fade}
                            data-aos="fade-down"
                            data-aos-once="true"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out">

                            <img src={image} alt={title} title={title} className="w-5/6 m-auto h-[100%]" />
                        </div>
                    </>
                )

            }

            <Modal
                isOpen={showModalFoto}
                contentLabel="Details Service"
                appElement={document.getElementById('root')}
                className="mt-28 bg-white px-7 rounded-md md:w-3/5 mx-auto xl:w-2/5"
                overlayClassName="fixed inset-0 bg-black/70 z-40"
            >
                <motion.div
                    initial={{ opacity: 0 }}  // Estado inicial del modal (transparente)
                    animate={{ opacity: 1 }}  // Estado final del modal (visible)
                    exit={{ opacity: 0 }}     // Estado de salida del modal (transparente)
                    transition={{ duration: 0.4 }}
                >
                    <div className="relative pb-1 ">
                        <span className="text-gray-500 font-extrabold text-lg text-end absolute top-6 right-0 float-right cursor-pointer" onClick={closeModal}>X</span>
                    </div>
                    <div className='flex flex-col mt-12 pb-6 text-center'>
                        <h3 className='mb-4 text-2xl font-medium text-brand-title'>{modalTitle}</h3>
                        <ul className='flex flex-col items-start justify-center gap-6
                  [&>li]:text-brand-text [&>li]:text-lg [&>li]:flex [&>li]:gap-2
                  [&>li>span]:text-blue-400 [&>li>span]:text-3xl'
                        >
                            {
                                // eslint-disable-next-line react/prop-types
                                modalOptions && modalOptions.map((option, index) => (
                                    <li key={index}>
                                        <span><BsCheck /></span>
                                        <i className='font-light'>{option}</i>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </motion.div>
            </Modal>

        </div >
    )
}

export default CardProject