import React, { useEffect, useState } from "react";
import axios from "axios";

export const useAxios = () => {
	const url = "https://jsonplaceholder.typicode.com/users";
	const [users, setUsers] = useState([]);
	// const [loading, setLoading] = useState(false);
	// const [error, setError] = useState({});

	const fetchUsers = async () => {
		// setLoading(true);
		const { data } = await axios.get(url);
		setUsers(data);
	};

	useEffect(() => {
		// try {
		// 	fetchUsers();
		// } catch (error) {
		// 	setError(error);
		// } finally {
		// 	setLoading(false);
		// }

		fetchUsers();
	}, []);

	return users;
};
