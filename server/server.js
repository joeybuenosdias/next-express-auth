require('dotenv').config();
const express = require('express');
const next = require('next');
const users = require('./db/users');

const PORT = parseInt(process.env.PORT, 10) || 8000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handler = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	server.use(express.json());
	server.use(express.urlencoded({ extended: true }));

	server.get('/api/user', (req, res) => {
		// console.log('req.headers', req.headers);
		res.send({ user: 123, name: 'Sookie' });
	});

	/**
	 * match username & password
	 */
	server.post('/api/login', (req, res) => {
		const { email } = req.body;
		const matchedUser = users.find((user) => user.email === email);
		/** after successful match, add token to cookie and send to client */
		res.send({ matchedUser });
	});

	server.all('*', (req, res) => handler(req, res));

	server.listen(PORT, () => {
		console.log(`Server running on port: http://localhost:${PORT}`);
		console.log(`Environment: ${process.env.NODE_ENV.toUpperCase()}`);
	});
});
