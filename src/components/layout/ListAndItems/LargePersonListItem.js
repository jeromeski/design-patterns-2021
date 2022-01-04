import React from "react";

const LargePersonListItem = ({ person }) => {
	const { name, phone, email, website } = person;
	return (
		<>
			<h3>{name}</h3>
			<p>{phone}</p>
			<p>{email}</p>
			<h3>Catchphrase</h3>
			<p>{website}</p>
		</>
	);
};

export default LargePersonListItem;
