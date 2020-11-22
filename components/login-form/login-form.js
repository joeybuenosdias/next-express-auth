import axios from 'axios';

export default function LoginForm() {
	const email = 'j@email.com';
	const password = 'password0';

	function handleLogin() {
		axios.post('http://localhost:3000/auth/login', { email, password })
			.then((res) => {
				console.log('res', res);
			}).catch((err) => {
				console.log('ERROR', err);
			});
	}

	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<input />
			<button type="submit" onClick={() => handleLogin()}>Submit</button>
		</form>
	);
}
