require('dotenv').config();
const express = require('express');
const next = require('next');

const PORT = parseInt(process.env.PORT, 10) || 8000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handler = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	server.use(express.json());

	server.get('/api/user', (req, res) => {
		console.log('req.headers', req.headers);
		res.send({ user: 123, name: 'Sookie' });
	});

	server.post('/api/login', (req, res) => {
		app.render(req, res);
	});

	server.all('*', (req, res) => handler(req, res));

	server.listen(PORT, () => {
		console.log(`Server running on port: http://localhost:${PORT}`);
		console.log(`Environment: ${process.env.NODE_ENV.toUpperCase()}`);
	});
});
