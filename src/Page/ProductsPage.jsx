import React, { useState } from 'react';
import { HeaderProducts } from '../components/HeaderProducts';
import { productos } from '../bd/item.json';
import { Products } from '../components/Products';

export const ProductsPage = () => {

    const [filters, setFilters] = useState({

        categoria: 'all',
        minPrice: 0,
    })

    const filterProducts = (products) => {

        return products.filter(product => {
            return (

                product.precio >= filters.minPrice && (

                    filters.categoria == 'all' ||
                    product.categoria == filters.categoria

                )
            )
        })

    }

    const filteredProducts = filterProducts(productos);

    return (

        <main className='dark:bg-gray-800'>
            <HeaderProducts changeFilters={setFilters} />
            <Products products={filteredProducts} />

            <div className="p-10">
                <button className="bg-violet-200 p-5 rounded-full items-center justify-center">
                    <span className="flex material-symbols-rounded text-violet-500">
                        shopping_cart
                    </span>
                </button>
            </div>
        </main>
    )
}
