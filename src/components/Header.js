import { useEffect, useState } from 'react';
import Logo from '../assets/todo_logo.png';

export const Header = () => {
    const [ dark, setDark ] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(dark));
        if(dark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [dark]);

  return (
    <nav className='dark:bg-bg'>
        <div className='flex justify-between items-center p-2 border-b-2 dark:border-none'> 
            <div className='flex justify-start items-center'>
                <img src={Logo} className='size-10 md:size-12' alt="logo" />
                <span className='mx-2 font-semibold text-lg md:text-xl text-gray-900 dark:text-gray-200'>todomate</span>
            </div>
            <div className="flex justify-end items-center p-2">
                <span onClick={() => setDark(!dark)} className={ `${ dark ? "bi bi-moon-fill" : "bi bi-sun-fill"} text-black dark:text-white cursor-pointer`}></span>
            </div>
        </div>
        
    </nav>
  )
}
