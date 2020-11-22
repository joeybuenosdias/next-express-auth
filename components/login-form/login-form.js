export default function LoginForm() {
	const postBody = JSON.stringify({
		email: 'j@email.com',
		password: 'password0',
	});
	function handleLogin() {
		fetch('http://localhost:3000/api/login', {
			method: 'post',
			body: postBody,
		}).then((res) => {
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
