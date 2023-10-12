import React from 'react'
import { ImWhatsapp } from 'react-icons/im';
import { AiOutlineMail } from 'react-icons/ai';

export const ContactPage = () => {


    return (

        <section className="mt-16 w-full dark:bg-gray-800">


            <div className="md:grid grid-cols-2 container mx-auto justify">


                <div className="flex justify-center bg-yellow-300 h-[580px]">

                    <div className="flex flex-col items-start justify-center gap-10">

                        <h1 className="text-2xl font-semibold mb-4">Contacto</h1>

                        <h4>Nos puedes contactar por los siguientes medios </h4>
                        <span className="flex justify-center items-center gap-3 text-2xl">
                            <ImWhatsapp size={30} />
                            +5691637293
                        </span>

                        <span className="flex justify-center items-center gap-3 text-2xl">
                            <AiOutlineMail size={30} />
                            erika@apiamigas.cl
                        </span>

                        <span className="flex justify-center items-center gap-3 text-2xl">
                            <AiOutlineMail size={30} />
                            Erika@apiamigas.cl
                        </span>
                    </div>

                </div>

                <div className="flex justify-center items-center bg-yellow-200">


                    <form className="w-full p-6" action="">

                        <div className="flex justify-center mb-10">
                            <h4 className="text-gray-600 text-2xl font-semibold animate-bounce animate-infinite">Envíanos un mensaje 🐝!</h4>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
                            <input type="text" id="nombre" name="nombre" className="mt-1 p-2 w-full border rounded-md" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">Mensaje</label>
                            <textarea id="mensaje" name="mensaje" rows="4" className="mt-1 p-2 w-full border rounded-md resize-none"></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="px-20 py-2 bg-yellow-400 text-gray-600 rounded hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-blue-300">Enviar</button>
                        </div>
                    </form>
                </div>


            </div>



        </section>

    )
}
