import PropTypes from 'prop-types';
import { AppProvider } from '@components';

export default function Dashboard(props) {
	return (
		<AppProvider value={props}>
			Dashboard
		</AppProvider>
	);
}

Dashboard.propTypes = {
	user: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
	}).isRequired,
};

export async function fetchUser(url) {
	let user;
	try {
		const res = await fetch(url, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer 0987654321cookiemonster',
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

export async function getServerSideProps() {
	const { user } = await fetchUser('http://localhost:3000/api/user');
	return {
		props: { user },
	};
}
