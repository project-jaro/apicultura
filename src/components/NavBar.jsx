import React, { useEffect, useState } from 'react'
import { Navigate, Link, NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

export const NavBar = () => {

  const [theme, setTheme] = useState("Ligth");

  useEffect(() => {

    if (theme === "dark") {
      document.documentElement.classList.add("dark");

    } else {
      document.documentElement.classList.remove("dark");
    }

  }, [theme]);

  
  const handleThemeSwitch = () => {

    setTheme(theme === "dark" ? "Light" : "dark");
  }

  return (

    <header>

      <nav className='fixed top-0 left-0 flex gap-10 z-10 bg-gray-50 w-full dark:bg-black'>

        <div className='text-3xl flex justify-center items-center'>
        
          {/* <h1 className='tittle-nav ml-11 py-3 pl-3 font-extrabold text-5xl bg-clip-text text text-transparent bg-gradient-to-r from-yellow-400 to-green-300 animate-jump-in'>Api-Amigas</h1> */}
          <h1 className='tittle-nav ml-11 py-3 pl-3 font-extrabold text-5xl bg-clip-text text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-700 animate-jump-in'>Api-Amigas</h1>
        </div>

        <div className="container m-auto flex justify-end items-center text-yellow-700 dark:text-yellow-300">

            <div className="block md:flex items-center mr-10">
              <button onClick={handleThemeSwitch} className="py-2 px-2 rounded-md bg-gray-200 dark:bg-gray-600">
                {theme === "dark" ? <BsFillSunFill size={20} /> : <BsFillMoonStarsFill size={20}  className="text-purple-700" />}
              </button>
            </div>

          <div className="hidden md:flex items-cente justify-between pr-10 text-base font-semibold cursor-pointer">

            

            <Link className='py-4 px-6 flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg' to="/">
              <FaHome size={20} />
              Inicio
            </Link>

            <Link className='py-4 px-6 flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg' to="/products">
              Productos
            </Link>

            <Link className='py-4 px-6 flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg' to="/about">
              About
            </Link>


            <Link className='py-4 px-6 flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg' to="/contact">

              Contacto
            </Link>

          </div>

          <button className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-700 group">
            <div className="w-5 h-1 bg-yellow-700 dark:bg-yellow-300 mb-1"></div>
            <div className="w-5 h-1 bg-yellow-700 dark:bg-yellow-300 mb-1"></div>
            <div className="w-5 h-1 bg-yellow-700 dark:bg-yellow-300 mb-1"></div>

            <div className="absolute top-0 -right-full opacity-0 h-screen w-8/12 border-yellow-700 bg-slate-200 transform group-focus:right-0 group-focus:opacity-100 transition-all duration-300 dark:bg-gray-800 border dark:border-yellow-300">

              <div className="flex flex-col items-center w-full text-base cursor-pointer pt-10">

                <Link className="hover:bg-slate-300 dark:hover:bg-gray-700 py-4 px-6 w-full flex justify-center items-center gap-2" to="/">

                  <span className="material-symbols-outlined">
                    home
                  </span>
                  Home
                </Link>

                <Link className="hover:bg-slate-300 dark:hover:bg-gray-700 py-4 px-6 w-full flex justify-center items-center gap-2" to="/about">

                  <span className="material-symbols-outlined">
                    emoji_nature
                  </span>
                  About
                </Link>



              </div>
            </div>
          </button>
        </div>


      </nav>
    </header>
  )
}
