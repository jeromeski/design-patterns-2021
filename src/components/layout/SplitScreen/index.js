import React, { useEffect, useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
`;
const Pane = styled.div`
	flex: ${(props) => props.weight};
`;

const SplitScreen = ({ left: Left, right: Right, leftWeight = 0, rightWeight = 0, children }) => {
	const [state, setState] = useState("");
	const [left, right] = state;

  console.count("SplitScreen :");
	console.log(left, right, Left, Right);

	useEffect(() => {
		if (children) {
			setState(children);
		}
	}, [children]);

	return (
		<Container>
			{!children ? (
				<Fragment>
					<Pane weight={leftWeight}>
						<Left name="left" />
					</Pane>
					<Pane weight={rightWeight}>
						<Right message="right" />
					</Pane>
				</Fragment>
			) : (
				<Fragment>
					<Pane weight={leftWeight}>{left}</Pane>
					<Pane weight={rightWeight}>{right}</Pane>
				</Fragment>
			)}
		</Container>
	);
};

export default SplitScreen;
