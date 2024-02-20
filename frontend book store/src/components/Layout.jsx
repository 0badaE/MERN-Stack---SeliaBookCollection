import React from 'react'
import { Outlet } from 'react-router-dom'
import logo from "../../public/logo.png"
import { TbBrandGithub } from "react-icons/tb";


function Layout() {
    const openInNewTab = url => {
        
      };
  return (
    <>
        <header className="w-full px-3 h-20 bg-red-500 flex items-center justify-between">
            <img src={logo} alt="logo" width="85px"/>
            <button
             onClick={() => window.open("https://plainenglish.io", '_blank')}
            >
                <TbBrandGithub 
                    size={40} 
                    className="text-white hover:text-black cursor-pointer"
                />
            </button>


        </header>
        <Outlet/>
    </>
  )
}

export default Layout