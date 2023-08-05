import React from 'react'
import { Navigate, Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (


    <div className='bg-black p-11 flex justify-between gap-12 items-center'>

      <div className='text-3xl font-extrabold'>
        <h1 className='ml-9 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 animate-jump-in'>Tiendita BETA!</h1>
      </div>

      <nav className='font-bold flex gap-10 text-violet-400 text'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link className="hover:text-pink-500" to="/login">
          <span class="material-symbols-outlined">
            account_circle
          </span>
        </Link>
        <button className=" rounded-full items-center justify-center">
          <span className="hover:text-pink-500 material-symbols-rounded text-violet-500">
            shopping_cart
          </span>
        </button>

      </nav>
    </div>
  )
}
