import ThemeProvider from "./components/ThemeProvider"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Splash from "./routes/Splash"
import Layout from "./components/Layout"
import About from "./routes/About"
import Books from "./routes/Books"
import Contact from "./routes/Contact"

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
						<Route path="books" element={<Books />}/>
						<Route path="contact" element={<Contact />}/>
					</Route>
				</Routes>
			</BrowserRouter>
    	</ThemeProvider>
  	)
}

export default App
