import { useEffect, useState } from 'react'
import MenuIcon from '../../utils/MenuIcon'
import style from '../../styles/header.module.scss'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll';

const variants = {
    open: {
        clipPath: 'inset(-40% -20% -20% -40% round 2px)',
        transition: {
            type: 'spring',
            bounce: 0,
            duration: 0.7,
            delayChildren: 0.3,
            staggerChildren: 0.05
        },
        boxShadow: '-1px 4px 14px -6px rgba(0,0,0,0.75)'
    },
    closed: {
        clipPath: 'inset(10% 50% 90% 50% round 10px)',
        transition: {
            type: 'spring',
            bounce: 0,
            duration: 0.3
        }
    }
}

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)

    const handleClick = () => {
        setOpenMenu(preValue => !preValue)
    }

    useEffect(() => {
        if (window.scrollY >= 90) {
            setIsScrolled(true)
        }
    }, [])

    useEffect(() => {
        const changeStyles = () => {
            if (window.scrollY >= 90) {
                setIsScrolled(true)
            } else { setIsScrolled(false) }
        }

        window.addEventListener('scroll', changeStyles)

        return () => window.removeEventListener('scroll', changeStyles)
    }, [])

    return (
        <header className={`w-full h-24 top-0 z-50 fixed p-1 bg-[#1e173f] ${isScrolled ? 'shadow-md  animate-fadeInDown' : ''}`}>
            <motion.nav
                animate={openMenu ? 'open' : 'closed'}
                className='w-full max-w-3xl m-auto h-full p-3 flex lg:max-w-6xl items-center lg:px-10'
            >
                {/* NavBar Mobile */}
                <ul className='w-full grid grid-cols-2'>
                    <li className='my-auto'>
                        <Link to="hero" smooth={true} offset={-140} href='#'>
                            <img src='https://res.cloudinary.com/dpmum6s9p/image/upload/v1707527632/logobrandblanco_dg3kuk.webp' alt='Logo de la empresa' title="Logo de la empresa" className=' w-52 cursor-pointer rounded-sm' />
                        </Link>
                    </li>
                    <li className='self-center justify-self-end flex justify-end items-center gap-x-2 lg:hidden'>
                        <div onClick={handleClick}>
                            <MenuIcon />
                        </div>
                    </li>
                </ul>
                <motion.ul
                    variants={variants}
                    className={` ${style.nav} absolute w-[90%]  max-w-3xl p-8 text-left ${openMenu ? 'flex' : 'hidden'} flex-col gap-3 text-[1.2rem] font-[400]  top-24  bg-white right-1/2 left-1/2 translate-x-[-50%] `}
                >
                    <li>
                        <Link className="cursor-pointer text-brand-title font-semibold"
                            to="hero" smooth={true} offset={-140} href='#' onClick={handleClick}>
                            Inicio
                        </Link>
                    </li>

                    <li>
                        <Link className="cursor-pointer text-brand-title font-semibold"
                            to="services" smooth={true} offset={-140} href='#' onClick={handleClick}>
                            Servicios
                        </Link>
                    </li>

                    <li>
                        <Link className="cursor-pointer text-brand-title font-semibold"
                            to="us" smooth={true} offset={-140} href='#' onClick={handleClick}>
                            Nosotros
                        </Link>
                    </li>

                    <li>
                        <Link className="cursor-pointer text-brand-title font-semibold"
                            to="contact" smooth={true} offset={-140} href='#' onClick={handleClick}>
                            Contacto
                        </Link>
                    </li>

                    <li className="flex justify-center">
                        <Link className="cursor-pointer text-brand-title font-semibold"
                            to="contact" smooth={true} offset={-140} href='#' onClick={handleClick}>
                            <button className='relative rounded-xl cursor-pointer items-center overflow-hidden p-[1px] block z-10'>
                                <div
                                    className='w-full h-full absolute rounded-[100%] transform scale-150 animate-styles_rotate'
                                    style={{
                                        backgroundImage:
                                            'conic-gradient(#3a6ea5 20deg, transparent 120deg)'
                                    }}
                                />
                                <span className='relative z-20 block rounded-xl bg-gradient-to-r from-violet-500 to-indigo-600 px-8 py-3 text-center text-sm text-white text-nowrap shadow-2xl font-medium font-poppins'>
                                    Pide Presupuesto
                                </span>
                            </button>
                        </Link>
                    </li>

                </motion.ul>

                {/* NavBar Desktop */}
                <ul className='hidden w-[90%] max-w-3xl p-8 text-left lg:flex lg:items-center self-center text-[1rem] gap-x-8 justify-center'>
                    <li>
                        <Link className="cursor-pointer text-white font-semibold hover:opacity-60"
                            to="hero" smooth={true} offset={-140} href='#'>
                            Inicio
                        </Link>
                    </li>

                    <li>
                        <Link className="cursor-pointer text-white font-semibold hover:opacity-60"
                            to="services" smooth={true} offset={-140} href='#'>
                            Servicios
                        </Link>
                    </li>

                    <li>
                        <Link className="cursor-pointer text-white font-semibold hover:opacity-60"
                            to="us" smooth={true} offset={-140} href='#'>
                            Nosotros
                        </Link>
                    </li>

                    <li>
                        <Link className="cursor-pointer text-white font-semibold hover:opacity-60"
                            to="contact" smooth={true} offset={-140} href='#'>
                            Contacto
                        </Link>
                    </li>

                    <li>
                        <Link className="cursor-pointer text-white font-semibold"
                            to="contact" smooth={true} offset={-140} href='#'>
                            <button className='relative rounded-xl cursor-pointer items-center overflow-hidden p-[1px] block z-10'>
                                <div
                                    className='w-full h-full absolute rounded-[100%] transform scale-150 animate-styles_rotate'
                                    style={{
                                        backgroundImage:
                                            'conic-gradient(#3a6ea5 20deg, transparent 120deg)'
                                    }}
                                />
                                <span className='relative z-20 block rounded-xl bg-gradient-to-r from-violet-500 to-indigo-600 px-8 py-3 text-center text-sm text-white text-nowrap shadow-2xl font-medium font-poppins'>
                                    Pide Presupuesto
                                </span>
                            </button>
                        </Link>

                    </li>
                </ul>
            </motion.nav >
        </header >
    )
}

export default Navbar;