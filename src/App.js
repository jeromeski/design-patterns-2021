import "./App.css";
import { LeftComponent } from "./components/split-screen/LeftComponent";
import { RightComponent } from "./components/split-screen/RightComponent";
import SplitScreen from "./components/split-screen/SplitScreen";

// function App() {
// 	return (
// 		<div className="App">
// 			<SplitScreen left={LeftComponent} right={RightComponent} />
// 		</div>
// 	);
// }

// export default App;

function App() {
	return (
		<div className="App">
			<SplitScreen>
				<LeftComponent name="LEFT" />
				<RightComponent message="RIGHT" />
			</SplitScreen>
		</div>
	);
}

export default App;
