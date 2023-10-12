import React, { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserContext } from '../context/UserContext';
import { Products } from '../components/Products';
import { productos } from '../bd/item.json';
import { Filters } from '../components/Filters';
import { HeaderProducts } from '../components/HeaderProducts';
import { Slider } from '../components/Slider';
import { Footer } from '../components/Footer';

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

      //-----

      <Slider />

      <section className="md:grid grid-cols-2">
        <div className="bg-cover brightness-125 bg-center bg-[url('src/img/letrero.jpg')]">
        

        </div>

        <div className="bg-slate-500 px-20 py-20">
              <p className="max-w-3xl text-2xl text-">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Adipisci assumenda ad excepturi quis eius fugiat maxime dolorum similique rerum
                  quisquam repellendus iste molestiae et, vel corrupti officiis ex labore. In.
              </p>

              <p className="max-w-3xl text-2xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Fuga iure adipisci ipsum saepe mollitia facere delectus suscipit, harum porro perferendis a accusamus tenetur sapiente error molestiae soluta corrupti! Quae, dolorum.
              </p>
        </div>
      </section>

      <section className="flex flex-col gap-11 items-center justify-center p-20 bg-slate-200">
        <h1 className="ml-11 py-3 pl-3 font-bold text-5xl bg-clip-text text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-700" >Ubicacion</h1>
        <iframe className="sm:w-full h-96 w-full rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.7819382749844!2d-70.74828512349367!3d-33.817940016427734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9663230fa8c58c7f%3A0x6da8b1be2bb5cf07!2sAgro%20Apicultura%20(Centro%20Ap%C3%ADcola%20Paine)!5e0!3m2!1ses-419!2scl!4v1693612769330!5m2!1ses-419!2scl" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>

    </main>

  )
}
