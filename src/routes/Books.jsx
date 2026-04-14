import { Link } from "react-router-dom"

export default function Books(){
    return (
        <main>
            <h1>Books</h1>
                <h2>International Monster Slayers series</h2>
                <div className="flex-grid">
                    <Link to="IMS/TCOML"><img src="TCOML-cover-salelink.jpg" /></Link>
                    <Link to="IMS/TBOW"><img src="TBOW-cover-salelink.jpg" /></Link>
                    <Link to="IMS/TGOY"><img src="TGOY-salelink.jpg" /></Link>
                    <Link to="IMS/TDW"><img src="TDW-salelink.jpg" /></Link>
                    <Link to="IMS/TBON"><img src="TBON-cover-salelink.jpg" /></Link>
                    <Link to="IMS/TLH"><img src="TLH-cover-salelink.jpg" /></Link>
                </div>
                <h2>Age of Aspects series</h2>
                <div className="flex-grid">
                    <Link to="AoA/DarkestLight"><img src="DL-cover-salelink.jpg" /></Link>
                </div>
        </main>
    )
}