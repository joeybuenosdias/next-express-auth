import PropTypes from 'prop-types';

export default function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

MyApp.propTypes = {
	pageProps: PropTypes.object.isRequired,
	Component: PropTypes.node.isRequired,
};
