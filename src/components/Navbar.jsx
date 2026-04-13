import { ThemeContext } from "./ThemeProvider"
import { NavLink, Link } from "react-router-dom"
import { useContext } from 'react'

export default function Navbar(){

    // state values
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <nav>
            <Link to="/" className="title">Bethany Helwig</Link>
            <div className="nav-links">
                <ul>
                    <li><NavLink to="about">About</NavLink></li>
                    <li><NavLink to="books">Books</NavLink></li>
                    <li><NavLink to="Contact">Contact</NavLink></li>
                    {/* <li><NavLink to="Events">Events</NavLink></li>
                    <li><NavLink to="Extras">Extras</NavLink></li> */}
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