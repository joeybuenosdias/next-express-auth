const express = require('express');

const router = express.Router();

/** protected routes */
const userRoutes = require('./user/user');

router.use(userRoutes);

module.exports = router;
