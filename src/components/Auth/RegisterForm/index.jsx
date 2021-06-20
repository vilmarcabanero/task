import React, { useEffect, useState } from 'react';
import {
	Card,
	Row,
	Col,
	Button,
	InputGroup,
	FormControl,
} from 'react-bootstrap';
import { Close, Email, Person, PermIdentity, Lock } from '@material-ui/icons';
import { Button as MUIButton } from '@material-ui/core';

import './style.css';
import { validateRegister } from 'utils/validators';

const RegisterForm = ({ setIsRegistered, history }) => {
	const [registerUserData, setRegisterUserData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	const [error, setError] = useState('');
	const [isValid, setIsValid] = useState(true);
	// console.log(isValid);

	const registerHandler = e => {
		e.preventDefault();
		// console.log(registerUserData);
		validateRegister(
			setIsValid,
			setError,
			registerUserData,
			setRegisterUserData,
			history
		);
	};

	return (
		<div className='mt-5'>
			<Card className='register-card'>
				<Card.Body>
					<form onSubmit={registerHandler} className='form'>
						<h2 className='text-center title'>Register </h2>
						<div className='input-groups pb-3 mt-4'>
							<InputGroup className='mb-3'>
								<FormControl
									placeholder='First Name'
									value={registerUserData.firstName}
									onChange={e =>
										setRegisterUserData({
											...registerUserData,
											firstName: e.target.value,
										})
									}
								/>
								<InputGroup.Text>
									<Person color='primary' />
								</InputGroup.Text>
							</InputGroup>
							<InputGroup className='mb-3'>
								<FormControl
									placeholder='Last Name'
									value={registerUserData.lastName}
									onChange={e =>
										setRegisterUserData({
											...registerUserData,
											lastName: e.target.value,
										})
									}
								/>
								<InputGroup.Text>
									<PermIdentity color='primary' />
								</InputGroup.Text>
							</InputGroup>
							<InputGroup className='mb-3'>
								<FormControl
									type='text'
									placeholder='Email address'
									value={registerUserData.email}
									onChange={e =>
										setRegisterUserData({
											...registerUserData,
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
									value={registerUserData.password}
									onChange={e =>
										setRegisterUserData({
											...registerUserData,
											password: e.target.value,
										})
									}
								/>
								<InputGroup.Text>
									<Lock color='primary' />
								</InputGroup.Text>
							</InputGroup>
							<InputGroup className='mb-3'>
								<FormControl
									type='password'
									placeholder='Confirm Password'
									value={registerUserData.confirmPassword}
									onChange={e =>
										setRegisterUserData({
											...registerUserData,
											confirmPassword: e.target.value,
										})
									}
								/>
								<InputGroup.Text>
									<Lock color='primary' />
								</InputGroup.Text>
							</InputGroup>

							<MUIButton
								type='submit'
								variant='contained'
								color='primary'
								className='w-100 mt-3'
							>
								Register
							</MUIButton>

							<MUIButton
								className='already-registered mt-3'
								onClick={() => setIsRegistered(true)}
							>
								Already have an account
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

export default RegisterForm;
