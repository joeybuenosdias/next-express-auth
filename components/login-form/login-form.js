import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function LoginForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const router = useRouter();

	function handleLogin() {
		axios.post('http://localhost:3000/auth/login', { email, password })
			.then(() => {
				setErrorMessage('');
				router.push('/dashboard');
			}).catch((err) => {
				console.log('ERROR', err);
				setErrorMessage(err.message);
			});
	}

	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<input value={email} onChange={(e) => setEmail(e.target.value)} />
			<input value={password} onChange={(e) => setPassword(e.target.value)} />
			<button type="submit" onClick={() => handleLogin()}>Submit</button>
			{errorMessage && <div>{errorMessage}</div>}
		</form>
	);
}
