const express = require('express');

const router = express.Router();

router.get('/user', (req, res) => {
	const { user } = req;
	console.log('user', user);
	res.send({ user });
});

module.exports = router;
