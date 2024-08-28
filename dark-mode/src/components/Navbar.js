import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../contexts/useThemeContext'

const Navbar = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)

    const handleInput = () => {
        toggleTheme()
    }

  return (
        <nav className="dark:text-white dark:bg-[#333333]">
            <label htmlFor="theme-switcher">
            
                <input 
                name="theme-switcher"
                className="rounded m-2"
                type="checkbox" 
                checked={theme === "dark" ? true: false} 
                onChange={handleInput}/>
                Switch theme
            </label>
            <ul className="flex justify-center items-center gap-3">
                <li> <Link to={'/'}>Home</Link></li>
                <li> <Link to={'/about'}>About</Link></li>
                <li> <Link to={'/blog'}>Blog</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar