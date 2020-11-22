import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext();
// eslint-disable-next-line import/prefer-default-export
export const useAppContext = () => useContext(AppContext);

export default function AppProvider({ value, children }) {
	const newVal = {
		...value,
	};

	return <AppContext.Provider value={newVal}>{children}</AppContext.Provider>;
}

AppProvider.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	children: PropTypes.node.isRequired,
	// eslint-disable-next-line react/forbid-prop-types
	value: PropTypes.object.isRequired,
};
