require('dotenv').config();
const express = require('express');
const next = require('next');
const auth = require('./routes/auth');
const apiGateway = require('./routes/api/api');
const { authenticateToken } = require('./middleware/authenticateToken');

const PORT = parseInt(process.env.PORT, 10) || 8000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handler = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	server.use(express.json());
	server.use(express.urlencoded({ extended: true }));
	server.use('/auth', auth);
	server.use('/api', authenticateToken, apiGateway);

	server.all('*', (req, res) => handler(req, res));

	server.listen(PORT, () => {
		console.log(`Server running on port: http://localhost:${PORT}`);
		console.log(`Environment: ${process.env.NODE_ENV.toUpperCase()}`);
	});
});
