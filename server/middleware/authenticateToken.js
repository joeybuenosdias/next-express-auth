const authenticateToken = (req, res, next) => {
	const authHeader = req.headers.authorization;
	console.log('authHeader', authHeader);
	req.user = { hello: 'world' };
	next();
};

module.exports = { authenticateToken };
