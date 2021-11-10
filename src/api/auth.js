import api from 'api';

export const register = async (
	setIsValid,
	setError,
	registerUserData,
	setRegisterUserData,
	history
) => {
	try {
		const { data } = await api.post('/auth/register', registerUserData);
		// console.log(data);

		setRegisterUserData({
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: '',
		});
		console.log(data);
		localStorage.setItem('authToken', data.accessToken);
		history.push('/');
	} catch (error) {
		console.log(error.response.data.message);
		setIsValid(false);
		setError(error.response.data.message[0]);
	}
};

export const login = async (
	setIsValid,
	setError,
	loginUserData,
	setLoginUserData,
	history
) => {
	try {
		const { data } = await api.post('/auth/login', loginUserData);

		setLoginUserData({
			email: '',
			password: '',
		});
		console.log(data);
		localStorage.setItem('authToken', data.accessToken);
		history.push('/');

		console.log(data);
	} catch (error) {
		console.log(error.response.data.message);
		setIsValid(false);
		setError(error.response.data.message);
	}
};
