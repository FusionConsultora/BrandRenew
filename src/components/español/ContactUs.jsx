import { useRef } from 'react';
import { BsCheck } from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wf0bwlb', 'template_nib962h', form.current, {
        publicKey: 'Mhs4wgvXYzFJm_1c8',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset()
          toast.success('Se ha enviado el formulario');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section
      className='flex flex-col justify-center items-center mb-14'
      id='contact'
    >
      <p className='text-black text-4xl lg:text-5xl font-bold p-5 pb-0  mb-4 text-center'>
        ¡Explicanos <span className='text-purple-500'>tú idea</span>!
      </p>
      <ul className='flex flex-row font-normal text-base lg:text-xl text-black gap-x-3 mb-4'>
        <li className='flex flex-row items-center'>
          <BsCheck size='2.5rem' color='#8338ec' /> 5 años de experiencia
        </li>
        <li className='flex flex-row items-center'>
          <BsCheck size='2.5rem' color='#8338ec' /> Decenas de clientes
        </li>
        <li className='flex flex-row items-center'>
          <BsCheck size='2.5rem' color='#8338ec' /> Contacto personal
        </li>
      </ul>

      <div className='w-11/12 mx-auto lg:w-1/2 mb-12'>
        <form
          className='flex flex-col gap-4 rounded-3xl'
          ref={form}
          onSubmit={sendEmail}
        >
          <div className='flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-0'>
            <input
              type='text'
              name='nombre'
              placeholder='Nombre'
              required
              className='rounded-md bg-white text-gray-600 font-normal p-2 w-full lg:w-[48%] border border-violet-300 outline-violet-400'
            />
            <input
              type='text'
              name='empresa'
              placeholder='Empresa (opcional)'
              className='rounded-md bg-white text-gray-600 font-normal p-2 w-full lg:w-[48%] border border-violet-300 outline-violet-400'
            />
          </div>
          <div className='flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-0'>
            <input
              type='email'
              name='email'
              placeholder='E-mail'
              required
              className='rounded-md bg-white text-gray-600 font-normal p-2 w-full lg:w-[48%] border border-violet-300 outline-violet-400'
            />
            <input
              type='number'
              name='telefono'
              placeholder='Teléfono'
              required
              className='rounded-md bg-white text-gray-600 font-normal p-2 w-full lg:w-[48%] border border-violet-300 outline-violet-400'
            />
          </div>
          <textarea
            name='mensaje'
            placeholder='Mensaje'
            required
            className='rounded-md bg-white text-gray-600 font-normal p-2 h-32 border border-violet-300 outline-violet-400'
          />
          <button
            type='submit'
            className='rounded-md bg-purple-700 hover:opacity-90 font-semibold text-white p-3 flex flex-row items-center justify-center'
          >
            Enviar
          </button>
        </form>
      </div>

      <Toaster />
    </section>
  )
}

export default ContactUs