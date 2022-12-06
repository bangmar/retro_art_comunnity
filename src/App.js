import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { GeneralProvider } from "./context/AppContext";
import About from "./pages/About";
import Home from "./pages/Home";
const App = () => {
	return (
		<React.Fragment>
			<BrowserRouter basename='/retro_art_comunnity'>
				<GeneralProvider>
					<Routes>
						<Route path='/' exact element={<About />} />
						<Route
							path='/home'
							element={
								<ProtectedRoute>
									<Home />
								</ProtectedRoute>
							}></Route>
					</Routes>
				</GeneralProvider>
			</BrowserRouter>
		</React.Fragment>
	);
};

export default App;
