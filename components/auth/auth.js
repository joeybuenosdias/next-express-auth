import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import axios from 'axios';
import AuthProvider from './auth-provider';
import useGetAccessToken from '../../hooks/useCookieAccessToken';

function fetchAuth(url, accessToken) {
	return axios.get(url, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}`,
		},
	});
}

export default function Auth({ children }) {
	const accessToken = useGetAccessToken();
	const router = useRouter();
	const [activeUser, setActiveUser] = useState({});

	useEffect(() => {
		if (accessToken) {
			fetchAuth('http://localhost:3000/api/user', accessToken)
				.then(({ data }) => {
					setActiveUser(data);
				}).catch(() => {
					router.push('/login');
				});
		}
	}, [accessToken]);

	return (
		<AuthProvider value={activeUser}>
			{children}
		</AuthProvider>
	);
}

Auth.propTypes = {
	children: PropTypes.node.isRequired,
};
