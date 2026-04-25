import { ThemeContext } from "./ThemeProvider"
import { NavLink, Link } from "react-router-dom"
import { useContext, useState } from 'react'

export default function Navbar(){

    const { theme, toggleTheme } = useContext(ThemeContext)
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav>
            <span className="title">Bethany Helwig</span>

            {/* Hamburger button, shows for mobile size */}
            <button
                className="menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Open navigation menu"
            >
                <i className="fa-solid fa-bars"></i>
            </button>

            <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                <ul>
                    <li>
                        {/* Hamburger button, shows for mobile size */}
                        <button
                            className="menu-btn"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Open navigation menu"
                        >
                            <i className="fa-solid fa-bars"></i>
                        </button>
                    </li>
                    <li><NavLink to="/" 
                            className={({isActive}) => isActive ? "link-active" : null}
                            onClick={() => setMenuOpen(false)}
                        >Home</NavLink>
                    </li>
                    <li><NavLink to="about" 
                            className={({isActive}) => isActive ? "link-active" : null}
                            onClick={() => setMenuOpen(false)}
                        >About</NavLink>
                    </li>
                    <li><NavLink to="books" 
                            className={({isActive}) => isActive ? "link-active" : null}
                            onClick={() => setMenuOpen(false)}
                        >Books</NavLink>
                    </li>
                    <li><NavLink to="Contact" 
                            className={({isActive}) => isActive ? "link-active" : null}
                            onClick={() => setMenuOpen(false)}
                        >Contact</NavLink>
                    </li>
                </ul>
                <button id="theme-toggle-btn" onClick={toggleTheme} className="theme-btn" aria-label="Theme Toggle button">
                    {theme === 'light'? 
                        <i className="fa-solid fa-moon"></i> :
                        <i className="fa-solid fa-sun"></i>
                    }
                </button>
            </div>
        </nav>
    )
}