import ThemeProvider from "./components/ThemeProvider"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Splash from "./routes/Splash"
import Layout from "./components/Layout"

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
					</Route>
				</Routes>
			</BrowserRouter>
    	</ThemeProvider>
  	)
}

export default App
