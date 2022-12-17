import { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

import firebaseInit from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(firebaseInit);

const UserContext = ({ children }) => {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);

	const register = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	}

	const login = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	}

	const logout = () => {
		setLoading(true);
		return signOut(auth);
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser);
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	const authInfo = { user, loading, register, login, logout };

	return <AuthContext.Provider value={authInfo}>
		{children}
	</AuthContext.Provider>
}
export default UserContext;