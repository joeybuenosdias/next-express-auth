const express = require('express');

const router = express.Router();
const userRoutes = require('./user/user');

router.use(userRoutes);
module.exports = router;
