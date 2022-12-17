import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import './Login.css';
import { googleIcon, facebookIcon } from '../../utils/icons';
import { AuthContext } from '../../contexts/UserContext';

const Login = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { login } = useContext(AuthContext);

	const [error, setError] = useState();
	const from = location?.state?.from?.pathname || '/';

	const onLogin = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;

		if (password.length < 6) {
			setError('Password should be 6 characters or more.');
			return;
		}

		login(email, password)
			.then(res => {
				form.reset();
				setError('');
				navigate(from, { replace: true })
			})
			.catch(err => setError(err?.message));
	}

	return <div className='formContainer'>
		<div className='formInner'>
			<h4 className='title'>Login</h4>

			<form onSubmit={onLogin}>
				<div className='formControl'>
					<label htmlFor='email' className='subtitle1'>Email</label>
					<input type='email' id='email' name='email' />
				</div>

				<div className='formControl'>
					<label htmlFor='password' className='subtitle1'>Password</label>
					<input type='password' id='password' name='password' autoComplete='on' />
				</div>

				<button type='submit' className='btn'>Login</button>
			</form>

			{error && <p className='formMessage error body2'>{error}</p>}

			<p className='formMessage body2'>New in Ema John? <Link to='/register'>Register</Link></p>

			<p className='or body1'>or</p>

			<button className='btn popupBtn'>{googleIcon} Continue with Google</button>
			<button className='btn popupBtn'>{facebookIcon} Continue with Facebook</button>
		</div>
	</div>
}
export default Login;