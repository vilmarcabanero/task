import React, { useEffect, useState } from 'react';
import {
	Card,
	Row,
	Col,
	Button,
	InputGroup,
	FormControl,
} from 'react-bootstrap';
import { Close, Email, Lock } from '@material-ui/icons';
import { Button as MUIButton } from '@material-ui/core';
import './style.css';
import { validateLogin } from 'utils/validators';

const LoginForm = ({ setIsRegistered, history }) => {
	const [loginUserData, setLoginUserData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	const [error, setError] = useState('');
	const [isValid, setIsValid] = useState(true);

	// useEffect(() => {

	// }, []);

	const loginHandler = e => {
		e.preventDefault();

		validateLogin(
			setIsValid,
			setError,
			loginUserData,
			setLoginUserData,
			history
		);

		// if (localStorage.getItem('authToken')) {
		// 	history.push('/');
		// }
	};

	return (
		<div className='mt-5'>
			<Card className='login-card'>
				<Card.Body>
					<form onSubmit={loginHandler} className='form'>
						<h2 className='text-center title'>Login </h2>
						<div className='input-groups pb-3'>
							<InputGroup className='mb-3'>
								<FormControl
									type='text'
									placeholder='Email address'
									value={loginUserData.email}
									onChange={e =>
										setLoginUserData({
											...loginUserData,
											email: e.target.value,
										})
									}
								/>
								<InputGroup.Text>
									<Email color='primary' />
								</InputGroup.Text>
							</InputGroup>

							<InputGroup className='mb-3'>
								<FormControl
									type='password'
									placeholder='Password'
									value={loginUserData.password}
									onChange={e =>
										setLoginUserData({
											...loginUserData,
											password: e.target.value,
										})
									}
								/>
								<InputGroup.Text>
									<Lock color='primary' />
								</InputGroup.Text>
							</InputGroup>
							<MUIButton className='forgot-password'>
								Forgot password?
							</MUIButton>
							<MUIButton
								variant='contained'
								color='primary'
								type='submit'
								className='w-100 mt-3'
							>
								Login
							</MUIButton>

							<MUIButton
								className='not-yet-registered mt-3'
								onClick={() => setIsRegistered(false)}
							>
								Not yet registered?
							</MUIButton>
						</div>
						{!isValid && (
							<div className='error-container w-100'>
								<span className='error'>{error}</span>
								<Close
									className='close-icon'
									onClick={() => setIsValid(true)}
								/>
							</div>
						)}
					</form>
				</Card.Body>
			</Card>
		</div>
	);
};

export default LoginForm;
