export default function LoginForm() {
	function handleLogin() {
		fetch('http://localhost:3000/api/login', {
			method: 'post',
			body: {
				email: 'joey@email.com',
				password: 'sookie',
			},
		});
	}
	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<input />
			<button type="submit" onClick={handleLogin}>Submit</button>
		</form>
	);
}
