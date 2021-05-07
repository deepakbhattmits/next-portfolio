/** @format */
import { useState, useEffect } from 'react';
import { useLogin } from '../hooks/useLogin';

import { axios } from 'acios';

const loginComp = () => {
	const { loginService } = useLogin();
	const [loading, setLoading] = useState(true);
	const [inputs, setInputs] = useState({}); // hook
	const handleChange = (e) => {
		const { name, value } = e.target;
		setInputs({ ...inputs, [name]: value });
	};
	const handleSumbit = () => {
		//service call
		if (validation) {
			loginService('http:localhost/login', inputs);
		}
	};
	useEffect(() => {
		setLoading(false);
	}, [loading]);
	return (
		<>
			<input
				name='userName'
				type='text'
				placeholder='Enter your UserName'
				onChange={handleChange}
			/>

			<input
				name='password'
				type='password'
				placeholder='Enter Password'
				onChange={handleChange}
			/>
			<button onClick={handleSumbit}> </button>
		</>
	);
};
