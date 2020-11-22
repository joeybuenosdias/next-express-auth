require('dotenv').config();
const express = require('express');
const next = require('next');
const auth = require('./routes/auth');

const PORT = parseInt(process.env.PORT, 10) || 8000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handler = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	/** middleware */
	server.use(express.json());
	server.use(express.urlencoded({ extended: true }));

	/** routes */
	server.use('/auth', auth);

	server.get('/api/user', (req, res) => {
		// console.log('req.headers', req.headers);
		res.send({ user: 123, name: 'Sookie' });
	});

	server.all('*', (req, res) => handler(req, res));

	server.listen(PORT, () => {
		console.log(`Server running on port: http://localhost:${PORT}`);
		console.log(`Environment: ${process.env.NODE_ENV.toUpperCase()}`);
	});
});
