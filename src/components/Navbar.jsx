import { ThemeContext } from "./ThemeProvider"
import { NavLink, Link } from "react-router-dom"
import { useContext } from 'react'

export default function Navbar(){

    // state values
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <nav>
            <span className="title">Bethany Helwig</span>
            <div className="nav-links">
                <ul>
                    <li><NavLink to="/" className={({isActive}) => isActive ? "link-active" : null}>Home</NavLink></li>
                    <li><NavLink to="about" className={({isActive}) => isActive ? "link-active" : null}>About</NavLink></li>
                    <li><NavLink to="books" className={({isActive}) => isActive ? "link-active" : null}>Books</NavLink></li>
                    <li><NavLink to="Contact" className={({isActive}) => isActive ? "link-active" : null}>Contact</NavLink></li>
                    {/* <li><NavLink to="Events" className={({isActive}) => isActive ? "link-active" : null}>Events</NavLink></li>
                    <li><NavLink to="Extras" className={({isActive}) => isActive ? "link-active" : null}>Extras</NavLink></li> */}
                </ul>
                <button id="theme-toggle-btn" onClick={toggleTheme} className="theme-btn">
                    {theme === 'light'? 
                        <i className="fa-solid fa-moon"></i> :
                        <i className="fa-solid fa-sun"></i>
                    }
                </button>
            </div>
        </nav>
    )
}