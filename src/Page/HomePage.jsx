import React, { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserContext } from '../context/UserContext';
import { Products } from '../components/Products';
import { productos } from '../bd/item.json';
import { Filters } from '../components/Filters';
import { HeaderProducts } from '../components/HeaderProducts';

export const HomePage = () => {

  const { user } = useContext(UserContext);

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

    <>
      {/* <h1>
        Hello world!
        {user.name}

      </h1>

      <pre>
          { JSON.stringify(user,null,3) }
      </pre> */}
      <HeaderProducts changeFilters={setFilters} />
      <Products products={filteredProducts} />

      <div className="p-10">
        <button className="absolute bg-violet-200 p-5 rounded-full items-center justify-center">
          <span className="flex material-symbols-rounded text-violet-500">
            shopping_cart
          </span>
        </button>
      </div>
    </>

  )
}
