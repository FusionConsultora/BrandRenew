import { useRef, useState } from 'react'

export default function MenuIcon() {
    const [isOpen, setOpen] = useState(false)
    const topLine = useRef(null)
    const middleLine = useRef(null)
    const bottomLine = useRef(null)

    const handleClick = () => {
        if (!isOpen) {
            topLine.current.classList.remove('bg-white', 'animate-topLineClose')
            topLine.current.classList.add('animate-topLine', 'bg-white')

            bottomLine.current.classList.remove('bg-white', 'animate-bottomLineClose')
            bottomLine.current.classList.add('animate-bottomLine', 'bg-white')

            middleLine.current.classList.remove('bg-white', 'animate-middleLineClose')
            middleLine.current.classList.add('animate-middleLine', 'bg-white')
        } else {
            topLine.current.classList.add('bg-white', 'animate-topLineClose')
            topLine.current.classList.remove('animate-topLine')

            bottomLine.current.classList.add('bg-white', 'animate-bottomLineClose')
            bottomLine.current.classList.remove('animate-bottomLine')

            middleLine.current.classList.add('bg-white', 'animate-middleLineClose')
            middleLine.current.classList.remove('animate-middleLine')
        }
        setOpen(preValue => !preValue)
    }

    return (
        <button className='w-7 flex flex-col gap-[5px]' onClick={handleClick} aria-label='buttonNav'>
            {/* <button className='w-7 h-7 flex flex-col gap-[5px]' onClick={handleClick} aria-label='buttonNav'> */}
            <div ref={topLine} className='w-full h-[2px] rounded-md bg-white ' />
            <div ref={middleLine} className='w-full h-[2px] rounded-md bg-white ' />
            <div ref={bottomLine} className='w-full h-[2px] rounded-md bg-white ' />
        </button>
    )
}
