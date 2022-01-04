import React from "react";
import SplitScreen from "./SplitScreen";
import { LeftComponent } from "./SplitScreen/LeftComponent";
import { RightComponent } from "./SplitScreen/RightComponent";

const SplitScreenTwo = () => {
  const rw = 3;
	const lw = 1;
	const name = "left";
	const message = "right";
	return (
		<>
			<SplitScreen rightWeight={rw} leftWeight={lw}>
				<LeftComponent name={name} />
				<RightComponent message={message} />
			</SplitScreen>
		</>
	);
};

export default SplitScreenTwo;
