import React from 'react'

export function Products({ products }) {
    return (
        <main className="flex items-center justify-center m-2">
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-center animate-fade-up mt-11">
                {products.map(product => (

                    <li className='m-5' key={product.id}>
                        <div className='bg-blue-300 '>
                            <img
                                src={product.img}
                                alt={product.nombre}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <strong>{product.nombre}</strong>
                            <span>$ {product.precio}</span>
                        </div>
                        <div>
                            <div>
                                <button className="bg-black text-white p-3 rounded-md">
                                    <span class="flex px-2 text-center material-symbols-outlined">
                                        add_shopping_cart
                                    </span>
                                </button>
                            </div>
                        </div>


                    </li>
                ))}
            </ul>
        </main>
    )
}
