import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../contexts/UserContext';

const PrivateRoute = ({ children }) => {
	const location = useLocation();
	const { user, loading } = useContext(AuthContext);

	if (loading) {
		return <div>Loading...</div>
	}

	if (user && user?.uid) {
		return children;
	}
	return <Navigate to='/login' state={{ from: location }} replace />
}
export default PrivateRoute;