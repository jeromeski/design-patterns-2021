import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ListAndItems from "./components/layout/ListAndItems";
import SplitScreenOne from "./components/layout/SplitScreenOne";
import SplitScreenTwo from "./components/layout/SplitScreenTwo";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/lesson-1a" element={<SplitScreenOne />} exact />
				<Route path="/lesson-1b" element={<SplitScreenTwo />} exact />
				<Route path="/lesson-2" element={<ListAndItems />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
