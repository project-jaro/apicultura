import React from 'react'
import { Filters } from './Filters'

export const HeaderProducts = ({changeFilters}) => {
  return (
   <div className='flex justify-between bg-violet-300 items-center'>
        <h1 className="text-3xl text-violet-700 m-10">Listado de productos</h1>
        <Filters onChange={changeFilters}/>
   </div>
  )
}
