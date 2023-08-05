import React, { useState } from 'react'

export const Filters = ({onChange}) => {

    const [minPrice, setMinPrice] = useState(0);

    const handleChangeMinPrice = (event) =>{

        setMinPrice(event.target.value);

        onChange(prevState =>({
            ...prevState,
            minPrice: event.target.value
        }))

    }

    const handleChangeCategory = (event) =>{

        onChange(prevState =>({
            ...prevState,
            categoria: event.target.value
        }))
    }

    return (
        <section className='flex flex-col p-5 gap-3 items-start'>

            <div>
                <label className='p-3' htmlFor="Categoria"> Categoria</label>
                <select className="rounded-md w-40" id='catagoria' onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="Ropa">Ropa</option>
                    <option value="Accesorios">Accesorios</option>
                </select>
            </div>

            <div className='items-center '>
                <label className='p-3' htmlFor="price">Precio a partir de :</label>
                <input
                    className="h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-pink-500"
                    type="range"
                    id="price"
                    min='10000'
                    max='100000'
                    onChange={handleChangeMinPrice}
                />
                <span className='p-1 font-bold text-violet-700'>$ {minPrice}</span>
            </div>

            
                
          
        </section>
    )
}
