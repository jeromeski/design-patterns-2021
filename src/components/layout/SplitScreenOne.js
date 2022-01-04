import React from "react";
import SplitScreen from "./SplitScreen";
import { LeftComponent } from "./SplitScreen/LeftComponent";
import { RightComponent } from "./SplitScreen/RightComponent";

const SplitScreenOne = () => {
	return (
		<>
			<SplitScreen left={LeftComponent} right={RightComponent} leftWeight={1} rightWeight={1} />
		</>
	);
};

export default SplitScreenOne;
