import React from "react";
import SplitScreen from "./SplitScreen";
import { LeftComponent } from "./SplitScreen/LeftComponent";
import { RightComponent } from "./SplitScreen/RightComponent";

const SplitScreenTwo = () => {
	return (
		<>
			<SplitScreen rightWeight={3} leftWeight={1}>
				<LeftComponent name="left" />
				<RightComponent message="right" />
			</SplitScreen>
		</>
	);
};

export default SplitScreenTwo;
