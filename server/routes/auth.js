const express = require('express');
const users = require('../db/users');

const router = express.Router();

router.post('/login', (req, res) => {
	const { email } = req.body;
	const matchedUser = users.find((user) => user.email === email);
	/** after successful match, add token to cookie and send to client */
	res.send({ matchedUser });
});

module.exports = router;
