import React from "react";

export const SmallPersonListItem = ({ person }) => {
	const { name, phone } = person;
	return (
		<p>
			Name: {name}, phone: {phone} years
		</p>
	);
};
