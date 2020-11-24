const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
	const authHeader = req.headers.authorization;
	console.log('authHeader', authHeader);
	const token = authHeader && authHeader.split(' ')[1];

	if (!token) {
		return res.send({ message: 'no token' });
	}

	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
		if (err) {
			res.status(500).send({ message: 'no user access' });
		} else {
			req.user = user;
			next();
		}
	});
};

module.exports = { authenticateToken };
