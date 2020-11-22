const express = require('express');

const router = express.Router();

router.get('/user', (req, res) => {
	const { user } = req;
	console.log('USERUSERUSER::::', user);
	res.send({ user: 123, name: 'Sookie' });
});

module.exports = router;
