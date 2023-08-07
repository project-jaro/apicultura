import React from 'react'
import { Navigate, Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (

    <header className='bg-black p-6 flex justify-between gap-12 items-center w-screen fixed z-10'>

      <div className='text-3xl font-extrabold'>
        <h1 className='ml-9 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-green-300 animate-jump-in'>API-Amigas</h1>
      </div>

      <nav className='font-bold flex gap-10 text-yellow-300'>

        <Link className='item-center items-center justify-center flex hover:text-green-400' to="/">
          <span class="material-symbols-outlined">
            home
          </span>
          Home
        </Link>
        <Link className='item-center items-center justify-center flex' to="/about">
          <span class="material-symbols-outlined">
            emoji_nature
          </span>
          About
        </Link>
        <Link className="hover:text-pink-500" to="/login">
          <span className="material-symbols-outlined">
            account_circle
          </span>
        </Link>

      </nav>
    </header>
  )
}
