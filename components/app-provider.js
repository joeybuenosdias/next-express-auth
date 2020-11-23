import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export default function AppProvider({ value, children }) {
	const newVal = {
		user: {},
		...value,
	};

	return <AppContext.Provider value={newVal}>{children}</AppContext.Provider>;
}

AppProvider.propTypes = {
	children: PropTypes.node.isRequired,
	value: PropTypes.object.isRequired,
};
