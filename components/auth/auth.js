import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import useGetAccessToken from '../../hooks/useCookieAccessToken';

export async function fetchUser(url, accessToken) {
	let user;
	try {
		const res = await fetch(url, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken}`,
			},
		});
		const resData = await res.json();
		user = resData;
	} catch (error) {
		user = {};
		console.error(error);
	}

	return { user };
}

function fetchAuth(url, accessToken) {
	return axios.get(url, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}`,
		},
	});
}

export default function Auth({ children }) {
	const [isLoading, setIsLoading] = useState(false);
	const accessToken = useGetAccessToken();

	// useEffect(() => {
	// 	fetchUser('http://localhost:3000/api/user', accessToken);
	// }, []);

	useEffect(() => {
		setIsLoading(true);
		fetchAuth('http://localhost:3000/api/user', accessToken)
			.then((data) => {
				console.log('Set Data into provider here', data);
				setIsLoading(false);
				return { user: data };
			})
			.catch((err) => {
				setIsLoading(false);
				console.log(err);
			});
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<>
			{children}
		</>
	);
}

Auth.propTypes = {
	children: PropTypes.node.isRequired,
};
