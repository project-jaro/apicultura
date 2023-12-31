import React from 'react'

export function Products({ products }) {
    return (
        <div className="flex items-center justify-center m-2">
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center animate-fade-up mt-11">
                {products.map(product => (

                    <li className='m-5' key={product.id}>
                        {/* Componente */}

                        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="p-8 rounded-t-lg" src={product.img} alt={product.nombre} />
                            </a>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.nombre}</h5>
                                </a>
                                <div className="flex items-center mt-2.5 mb-5">
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.precio}</span>
                                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Informacion del producto</a>
                                </div>
                            </div>
                        </div>


                    </li>
                ))}
            </ul>

            <br />

        </div>


    )
}
