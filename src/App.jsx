import ThemeProvider from "./components/ThemeProvider"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Splash from "./routes/Splash"
import Layout from "./components/Layout"
import About from "./routes/About"
import Books from "./routes/Books"
import Contact from "./routes/Contact"

/* IMS series pages */
import TCOML from "./routes/IMS/TCOML" 	// The Curse of Moose Lake
import TBOW from "./routes/IMS/TBOW"	// The Bite of Winter
import TGOY from "./routes/IMS/TGOY"	// The Ghosts of Yesteryear
import TBON from "./routes/IMS/TBON"	// The Brood of Nightmare
import TDW from "./routes/IMS/TDW"		// The Dark Whisper
import TLH from "./routes/IMS/TLH"		// The Lone Hunter

/* Age of Aspect series pages */
import DarkestLight from "./routes/AoA/DarkestLight"

function App() {
  	return (
    	<ThemeProvider>
			<div className="pink-accent"></div>
			<div className="purple-accent"></div>
			<div className="green-accent"></div>
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/" element={<Splash/>}/>
						<Route path="about" element={<About />}/>
						<Route path="books/IMS/TCOML" element={<TCOML />}/>
						<Route path="books/IMS/TBOW" element={<TBOW />}/>
						<Route path="books/IMS/TGOY" element={<TGOY />}/>
						<Route path="books/IMS/TDW" element={<TDW />}/>
						<Route path="books/IMS/TBON" element={<TBON />}/>
						<Route path="books/IMS/TLH" element={<TLH />}/>
						<Route path="books/AoA/DarkestLight" element={<DarkestLight />}/>
						<Route path="books" element={<Books />}/>
						<Route path="contact" element={<Contact />}/>
					</Route>
				</Routes>
			</BrowserRouter>
    	</ThemeProvider>
  	)
}

export default App
