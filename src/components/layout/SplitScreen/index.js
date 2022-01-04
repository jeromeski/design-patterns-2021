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
	const [components, setComponents] = useState([]);

	const [leftComponent, rightComponent] = components;
	console.log(components);
	console.log(`Left Component :${leftComponent}, Right Component :${rightComponent}`);
	console.log(Left, Right);

	useEffect(() => {
		if (children) {
			setComponents(children);
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
					<Pane weight={leftWeight}>{leftComponent}</Pane>
					<Pane weight={rightWeight}>{rightComponent}</Pane>
				</Fragment>
			)}
		</Container>
	);
};

export default SplitScreen;
