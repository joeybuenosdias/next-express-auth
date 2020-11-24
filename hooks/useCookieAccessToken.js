import { useEffect, useState } from 'react';

export default function useGetAccessToken() {
	const [activeCookies, setActiveCookies] = useState({});
	useEffect(() => {
		const cookiePairs = document.cookie.split(';');
		const cookieObj = cookiePairs.reduce((prev, curr) => {
			const [key, value] = curr.split('=');

			return {
				...prev,
				[key.trim()]: value,
			};
		}, {});
		setActiveCookies(cookieObj);
	}, []);
	const { accessToken = '' } = activeCookies;

	return accessToken;
}
