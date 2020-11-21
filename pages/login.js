import LoginForm from '@components';

export default function Login() {
	return (
		<div>
			<LoginForm />
			<Input />
			<Hey />
		</div>
	);
}

function Input() {
	return (
		<input />
	);
}

function Hey() {
	return (
		<div>
			Hey
		</div>
	);
}
