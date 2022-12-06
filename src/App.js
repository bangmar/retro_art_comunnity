import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { GeneralProvider } from "./context/AppContext";
import About from "./routes/About";
import Home from "./routes/Home";
const App = () => {
	return (
		<React.Fragment>
			<HashRouter>
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
			</HashRouter>
		</React.Fragment>
	);
};

export default App;
