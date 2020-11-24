import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

export default function AuthProvider({ value, children }) {
	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	);
}

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
	value: PropTypes.object.isRequired,
};
