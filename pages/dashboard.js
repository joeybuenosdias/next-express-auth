import { useEffect } from 'react';
// import PropTypes from 'prop-types';

export async function fetchUser(url, cookies) {
	const { accessToken = '' } = cookies;
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
export default function Dashboard() {
	useEffect(() => {
		const cookiePairs = document.cookie.split(';');
		const cookieObj = cookiePairs.reduce((prev, curr) => {
			const [key, value] = curr.split('=');

			return {
				...prev,
				[key.trim()]: value,
			};
		}, {});
		console.log('cookieObj', cookieObj);

		fetchUser('http://localhost:3000/api/user', cookieObj);
	}, []);
	return (
		<div>
			Dashboard
		</div>
	);
}
