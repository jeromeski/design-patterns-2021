import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
// import { useAxios } from "../../hooks/useAxios";

import RegularList from "./ListAndItems";
import { SmallPersonListItem } from "./ListAndItems/SmallPersonListItem";

const ListAndItems = () => {
	const [users, setUsers] = useState([]);
	// const users = useAxios();
	useEffect(() => {
		const fetchUsers = async () => {
			const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
			setUsers(data);
		};
		fetchUsers();
	}, []);
	console.log(users);

	return (
		<Fragment>
			{/*<RegularList items={users} resourceName="person" itemComponent={SmallPersonListItem} />*/}
		</Fragment>
	);
};

export default ListAndItems;
