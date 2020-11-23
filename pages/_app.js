import PropTypes from 'prop-types';
import App from 'next/app';

import { AppProvider } from '@components';

export default function MyApp({ Component, pageProps }) {
	return (
		<AppProvider value={pageProps}>
			<Component {...pageProps} />
		</AppProvider>
	);
}

MyApp.getInitialProps = async (appContext) => {
	// calls page's `getInitialProps` and fills `appProps.pageProps`
	const appProps = await App.getInitialProps(appContext);

	return { ...appProps };
};

MyApp.propTypes = {
	pageProps: PropTypes.object.isRequired,
	Component: PropTypes.node.isRequired,
};
