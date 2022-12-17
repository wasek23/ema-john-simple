import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Register.css';
import { AuthContext } from '../../contexts/UserContext';
import { googleIcon, facebookIcon } from '../../utils/icons';

const Register = () => {
	const navigate = useNavigate();
	const { register } = useContext(AuthContext);

	const [error, setError] = useState();

	const onRegister = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		const confirmPassword = form.confirmPassword.value;

		if (password.length < 6) {
			setError('Password should be 6 characters or more.');
			return;
		}
		if (password !== confirmPassword) {
			setError('Password didn\'t match.');
			return;
		}

		register(email, password)
			.then(res => {
				form.reset();
				setError('');
				navigate('/');
			})
			.catch(err => setError(err?.message));
	}

	return <div className='formContainer'>
		<div className='formInner'>
			<h4 className='title'>Register</h4>

			<form onSubmit={onRegister}>
				<div className='formControl'>
					<label htmlFor='email' className='subtitle1'>Email</label>
					<input type='email' id='email' name='email' />
				</div>

				<div className='formControl'>
					<label htmlFor='password' className='subtitle1'>Password</label>
					<input type='password' id='password' name='password' autoComplete='on' />
				</div>

				<div className='formControl'>
					<label htmlFor='confirmPassword' className='subtitle1'>Confirm Password</label>
					<input type='password' id='confirmPassword' name='confirmPassword' autoComplete='on' />
				</div>

				<button type='submit' className='btn'>Sign Up</button>
			</form>

			{error && <p className='formMessage error body2'>{error}</p>}

			<p className='formMessage body2'>Already have an account? <Link to='/login'>Login</Link></p>

			<p className='or body1'>or</p>

			<button className='btn popupBtn'>{googleIcon} Continue with Google</button>
			<button className='btn popupBtn'>{facebookIcon} Continue with Facebook</button>
		</div>
	</div>
}
export default Register;